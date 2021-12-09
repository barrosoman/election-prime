import {
  DataInfo,
  SeriesData,
  SeriesSexData,
  Ethnicity,
  Region,
  Scholarity,
  Sex,
  Religion
} from '@/models/DataInfo'
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
   * The amount of votes that the age group made.
   */
  votes: number
}

interface ReligionVotes {
  /**
   * The religion that has this votes.
   */
  religion: Religion

  /**
   * The amount of votes that the religion made.
   */
  votes: number
}

interface EthnicityVotes {
  /**
   * The ethnicity that has this votes.
   */
  ethnicity: Ethnicity

  /**
   * The amount of votes that the ethnicity made.
   */
  votes: number
}

interface RegionVotes {
  /**
   * The region that has this votes.
   */
  region: Region

  /**
   * The amount of votes that the region made.
   */
  votes: number
}

interface ScholarityVotes {
  /**
   * The scholarity that has this votes.
   */
  scholarity: Scholarity

  /**
   * The amount of votes that the scholarity made.
   */
  votes: number
}

interface SexVotes {
  /**
   * The sex that has this votes.
   */
  sex: Sex

  /**
   * The amount of votes that the sex made.
   */
  votes: number
}

interface IncomeVotes {
  /**
   * The income has this votes.
   */
  income: string

  /**
   * The amount of votes that the income made.
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

  getReligionVotesMostAndLeast(): [string, string] {
    const religionVotes: ReligionVotes[] = this.getReligionVotes()
    religionVotes.sort((a, b) => b.votes - a.votes)

    return [
      religionVotes[0].religion,
      religionVotes[religionVotes.length - 1].religion
    ]
  }

  getEthnicityVotesMostAndLeast(): [string, string] {
    const ethnicityVotes: EthnicityVotes[] = this.getEthnicityVotes()
    ethnicityVotes.sort((a, b) => b.votes - a.votes)

    return [
      ethnicityVotes[0].ethnicity,
      ethnicityVotes[ethnicityVotes.length - 1].ethnicity
    ]
  }

  getRegionVotesMostAndLeast(): [string, string] {
    const regionVotes: RegionVotes[] = this.getRegionVotes()
    regionVotes.sort((a, b) => b.votes - a.votes)

    return [regionVotes[0].region, regionVotes[regionVotes.length - 1].region]
  }

  getScholarityVotesMostAndLeast(): [string, string] {
    const scholarityVotes: ScholarityVotes[] = this.getScholarityVotes()
    scholarityVotes.sort((a, b) => b.votes - a.votes)

    return [
      scholarityVotes[0].scholarity,
      scholarityVotes[scholarityVotes.length - 1].scholarity
    ]
  }

  getSexVotesMostAndLeast(): [string, string] {
    const sexVotes: SexVotes[] = this.getSexVotes()
    sexVotes.sort((a, b) => b.votes - a.votes)

    return [sexVotes[0].sex, sexVotes[sexVotes.length - 1].sex]
  }

  getIncomeVotesMostAndLeast(): [string, string] {
    const incomeVotes: IncomeVotes[] = this.getIncomeVotes()
    incomeVotes.sort((a, b) => b.votes - a.votes)

    return [incomeVotes[0].income, incomeVotes[incomeVotes.length - 1].income]
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

  private getReligionVotes(): ReligionVotes[] {
    let candidatesReligionVotes: SeriesData[]

    if (this.candidatePresident)
      candidatesReligionVotes = this.dataVisualizer.toPresidentsReligionVote()
    else candidatesReligionVotes = this.dataVisualizer.toGovernorsReligionVote()

    const candidateReligionVotes: SeriesData = candidatesReligionVotes.filter(
      (seriesData) => seriesData.name === this.candidate
    )[0]

    return [
      {
        religion: 'Católico',
        votes: candidateReligionVotes.data[0]
      },
      {
        religion: 'Evangélico',
        votes: candidateReligionVotes.data[1]
      },
      {
        religion: 'Muçulmano',
        votes: candidateReligionVotes.data[2]
      },
      {
        religion: 'Judeu',
        votes: candidateReligionVotes.data[3]
      },
      {
        religion: 'Sem Religião',
        votes: candidateReligionVotes.data[4]
      },
      {
        religion: 'Outro',
        votes: candidateReligionVotes.data[5]
      }
    ]
  }

  private getRegionVotes(): RegionVotes[] {
    let candidatesRegionVotes: SeriesData[]

    if (this.candidatePresident)
      candidatesRegionVotes = this.dataVisualizer.toPresidentsRegionVote()
    else candidatesRegionVotes = this.dataVisualizer.toGovernorsRegionVote()

    const candidateRegionVotes: SeriesData = candidatesRegionVotes.filter(
      (seriesData) => seriesData.name === this.candidate
    )[0]

    return [
      {
        region: 'Sul',
        votes: candidateRegionVotes.data[0]
      },
      {
        region: 'Sudeste',
        votes: candidateRegionVotes.data[1]
      },
      {
        region: 'Centro-Oeste',
        votes: candidateRegionVotes.data[2]
      },
      {
        region: 'Nordeste',
        votes: candidateRegionVotes.data[3]
      },
      {
        region: 'Norte',
        votes: candidateRegionVotes.data[4]
      }
    ]
  }

  private getEthnicityVotes(): EthnicityVotes[] {
    let candidiatesEthnicityVotes: SeriesData[]

    if (this.candidatePresident)
      candidiatesEthnicityVotes =
        this.dataVisualizer.toPresidentsEthnicityVote()
    else
      candidiatesEthnicityVotes = this.dataVisualizer.toGovernorsEthnicityVote()

    const candidateEthnicityVotes: SeriesData =
      candidiatesEthnicityVotes.filter(
        (seriesData) => seriesData.name === this.candidate
      )[0]

    return [
      {
        ethnicity: 'Branco',
        votes: candidateEthnicityVotes.data[0]
      },
      {
        ethnicity: 'Pardo',
        votes: candidateEthnicityVotes.data[1]
      },
      {
        ethnicity: 'Preto',
        votes: candidateEthnicityVotes.data[2]
      },
      {
        ethnicity: 'Amarelo',
        votes: candidateEthnicityVotes.data[3]
      },
      {
        ethnicity: 'Indígena',
        votes: candidateEthnicityVotes.data[4]
      },
      {
        ethnicity: 'Outro',
        votes: candidateEthnicityVotes.data[5]
      }
    ]
  }

  private getScholarityVotes(): ScholarityVotes[] {
    let candidatesScholarityVotes: SeriesData[]

    if (this.candidatePresident)
      candidatesScholarityVotes =
        this.dataVisualizer.toPresidentsScholarityVote()
    else
      candidatesScholarityVotes =
        this.dataVisualizer.toGovernorsScholarityVote()

    const candidateScholarityVotes: SeriesData =
      candidatesScholarityVotes.filter(
        (seriesData) => seriesData.name === this.candidate
      )[0]

    return [
      {
        scholarity: 'Sem Escolaridade',
        votes: candidateScholarityVotes.data[0]
      },
      {
        scholarity: 'Ensino Fundamental',
        votes: candidateScholarityVotes.data[1]
      },
      {
        scholarity: 'Ensino Médio',
        votes: candidateScholarityVotes.data[2]
      },
      {
        scholarity: 'Ensino Superior',
        votes: candidateScholarityVotes.data[3]
      }
    ]
  }

  private getSexVotes(): SexVotes[] {
    let candidatesSexVotes: SeriesSexData
    let candidateIndex: number

    if (this.candidatePresident) {
      candidatesSexVotes = this.dataVisualizer.toPresidentsSexVote()
      candidateIndex = this.dataVisualizer
        .toPresidentsName()
        .findIndex((name) => name === this.candidate)
    } else {
      candidatesSexVotes = this.dataVisualizer.toGovernorsSexVote()
      candidateIndex = this.dataVisualizer
        .toGovernorsName()
        .findIndex((name) => name === this.candidate)
    }

    return [
      {
        sex: 'M',
        votes: candidatesSexVotes.maleVotes[candidateIndex]
      },
      {
        sex: 'F',
        votes: candidatesSexVotes.femaleVotes[candidateIndex]
      }
    ]
  }

  private getIncomeVotes(): IncomeVotes[] {
    let candidatesIncomeVotes: SeriesData[]

    if (this.candidatePresident)
      candidatesIncomeVotes = this.dataVisualizer.toPresidentsIncomeVote()
    else candidatesIncomeVotes = this.dataVisualizer.toPresidentsIncomeVote()

    const candidateIncomeVotes: SeriesData = candidatesIncomeVotes.filter(
      (seriesData) => seriesData.name === this.candidate
    )[0]

    return [
      {
        income: '<=2',
        votes: candidateIncomeVotes.data[0]
      },
      {
        income: '3-4',
        votes: candidateIncomeVotes.data[1]
      },
      {
        income: '5-6',
        votes: candidateIncomeVotes.data[2]
      },
      {
        income: '7-10',
        votes: candidateIncomeVotes.data[3]
      },
      {
        income: '>10',
        votes: candidateIncomeVotes.data[4]
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
