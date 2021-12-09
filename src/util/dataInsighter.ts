import { DataInfo, SeriesData } from '@/models/DataInfo'
import { DataVisualizer } from '@/util/dataVisualizer'

interface TotalVotes {
  /**
   * The candidate that has this votes.
   */
  candidate: string

  /**
   * The amount of votes that the candidate received.
   */
  votes: number
}

interface AgeVotes {
  /**
   * The age group that has this votes.
   */
  age: string

  /**
   * The amount of votes that the age group received.
   */
  votes: number
}

export class DataInsighter {
  /**
   * The candidate with relation to the insights that will be provided
   */
  readonly candidate: string

  /**
   * An array of {@link DataInfo} in which the data will be extracted.
   */
  readonly dataInfoArray: DataInfo[]

  /**
   * The {@link DataVisualizer} that will be used to extract some informations
   * from the {@code dataInfoArray}.
   */
  readonly dataVisualizer: DataVisualizer

  /**
   * This variable indicates if the {@code candidate} represents a president or not.
   * Then, if this is {@code true} then the {@code candidate} is a president. Otherwise,
   * it is a governor.
   */
  readonly candidatePresident: boolean

  constructor(candidate: string, dataVisualizer: DataVisualizer) {
    this.candidate = candidate
    this.dataInfoArray = dataVisualizer.getVisualizedData()
    this.dataVisualizer = dataVisualizer
    this.candidatePresident = this.dataVisualizer
      .toPresidentsName()
      .some((name) => name === candidate)
  }

  getTotalVotesPosition(): number {
    const totalVotes: TotalVotes[] = this.getTotalVotes()
    totalVotes.sort((a, b) => b.votes - a.votes)

    return (
      totalVotes.findIndex(
        (totalVote: TotalVotes) => totalVote.candidate === this.candidate
      ) + 1
    )
  }

  getAgeVotesMostAndLeast(): [string, string] {
    const ageVotes: AgeVotes[] = this.getAgeVotes()
    ageVotes.sort((a, b) => b.votes - a.votes)

    return [ageVotes[0].age, ageVotes[ageVotes.length - 1].age]
  }

  private getTotalVotes(): TotalVotes[] {
    const totalVotes: TotalVotes[] = []
    let candidateNames: string[]
    let candidateVotes: number[]

    if (this.candidatePresident) {
      candidateNames = this.dataVisualizer.toPresidentsName()
      candidateVotes = this.dataVisualizer.toPresidentsVote()
    } else {
      candidateNames = this.dataVisualizer.toGovernorsName()
      candidateVotes = this.dataVisualizer.toGovernorsVote()
    }

    if (candidateNames.length !== candidateVotes.length)
      throw `Candidate names length ${candidateNames.length} cannot differ from candidate votes length ${candidateVotes.length}`

    for (let index = 0; index < candidateNames.length; index++)
      totalVotes.push({
        candidate: candidateNames[index],
        votes: candidateVotes[index]
      })

    return totalVotes
  }

  private getAgeVotes(): AgeVotes[] {
    let candidatesAgeVotes: SeriesData[]

    if (this.candidatePresident)
      candidatesAgeVotes = this.dataVisualizer.toPresidentsAgeGroupVote()
    else candidatesAgeVotes = this.dataVisualizer.toGovernorsAgeGroupVote()

    const candidateAgeVotes: SeriesData = candidatesAgeVotes.filter(
      (seriesData) => seriesData.name === this.candidate
    )[0]

    return [
      {
        age: '16',
        votes: candidateAgeVotes.data[0]
      },
      {
        age: '17',
        votes: candidateAgeVotes.data[1]
      },
      {
        age: '18-20',
        votes: candidateAgeVotes.data[2]
      },
      {
        age: '21-24',
        votes: candidateAgeVotes.data[3]
      },
      {
        age: '25-34',
        votes: candidateAgeVotes.data[4]
      },
      {
        age: '35-44',
        votes: candidateAgeVotes.data[5]
      },
      {
        age: '45-59',
        votes: candidateAgeVotes.data[6]
      },
      {
        age: '60-69',
        votes: candidateAgeVotes.data[7]
      },
      {
        age: '70-79',
        votes: candidateAgeVotes.data[8]
      },
      {
        age: '>79',
        votes: candidateAgeVotes.data[9]
      }
    ]
  }

  /**
   * Returns the underlying {@link DataVisualizer}
   * @returns the underlying {@link DataVisualizer}
   */
  getDataVisualizer(): DataVisualizer {
    return this.dataVisualizer
  }
}
