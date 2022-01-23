import {
  DataInfo,
  Religion,
  Ethnicity,
  Region,
  Scholarity,
  Sex
} from '@/models/DataInfo'

import { randomGaussian, randomInt, randomSelect } from '@/util/random'
import clamp from './clamp'

/**
 * The {@link DataGenerator} class handles the randomized generation
 * of the populated objects {@link DataInfo}.
 */
export class DataGenerator {
  /**
   * These variables represents the main parameters to generate the age of
   * the people who is voting.
   */
  static readonly MINIMUM_AGE: number = 16
  static readonly MAXIMUM_AGE: number = 99

  /**
   * These variables represents the main parameters to generate the income
   * of the people who is voting.
   */
  static readonly MINIMUM_INCOME: number = 1
  static readonly MAXIMUM_INCOME: number = 20

  /**
   * This variable represents the religions of the people who is voting.
   */
  static readonly RELIGIONS: Religion[] = [
    'Católico',
    'Evangélico',
    'Muçulmano',
    'Judeu',
    'Sem Religião',
    'Outro'
  ]

  /**
   * This variable represents the ethicnities of the people who is voting.
   */
  static readonly EHTNICITIES: Ethnicity[] = [
    'Branco',
    'Pardo',
    'Preto',
    'Amarelo',
    'Indígena',
    'Outro'
  ]

  /**
   * This variable represents the regions of the people who is voting.
   */
  static readonly REGIONS: Region[] = [
    'Sul',
    'Sudeste',
    'Centro-Oeste',
    'Nordeste',
    'Norte'
  ]

  /**
   * This variable represents the scholarities of the people who is voting.
   */
  static readonly SCHOLARITIES: Scholarity[] = [
    'Sem Escolaridade',
    'Ensino Fundamental',
    'Ensino Médio',
    'Ensino Superior'
  ]

  /**
   * This variable represents the sexes of the people who is voting.
   */
  static readonly SEXES: Sex[] = ['M', 'F']

  /**
   * This variable represents the governors name.
   */
  static readonly GOVERNOR_NAMES: string[] = [
    'Paulo Lima Almeida',
    'Luiza Rocha Dias',
    'Carla Correia Cardoso',
    'Antônio Melo Dias',
    'Luiz Cavalcanti Ferreira'
  ]

  private readonly presidentName: string

  private readonly randomAgeFunction: () => number
  private readonly randomReligionFunction: () => Religion

  constructor(presidentName: string) {
    this.presidentName = presidentName

    if (Math.random() > 0.6)
      this.randomAgeFunction = () =>
        randomGaussian(47 + randomInt(-20, 0), 12 + randomInt(8, 16))
    else
      this.randomAgeFunction = () =>
        randomInt(
          DataGenerator.MINIMUM_AGE + randomInt(0, 16),
          DataGenerator.MAXIMUM_AGE - randomInt(24, 47)
        )

    const randomizedMean = Math.random()
    const randomizedStandardDeviation = clamp(0.1, Math.random(), 0.7)

    console.log(`m: ${randomizedMean}, stdDev: ${randomizedStandardDeviation}`)

    this.randomReligionFunction = () =>
      randomSelect(DataGenerator.RELIGIONS, () =>
        clamp(
          0,
          randomGaussian(randomizedMean, randomizedStandardDeviation),
          0.99
        )
      )
  }

  /**
   * Generates a random array of {@link DataInfo}.
   *
   * @param amount the amount of {@link DataInfo} objects
   *               to be generated
   *
   * @returns  a random array of {@link DataInfo}
   */
  generate(amount: number): DataInfo[] {
    if (amount < 0) throw 'Amount must be a nonnegative number'

    const dataInfoArray: DataInfo[] = []

    for (let index = 0; index < amount; index++)
      dataInfoArray.push(this.generateVote())

    return dataInfoArray
  }

  /**
   * Generates a CSV file data containing the generated information
   *
   * @param amount the amount of votes to be generated
   */
  generateToFileData(amount: number): string {
    let dataString = ''
    const dataInfoArray: DataInfo[] = this.generate(amount)

    dataInfoArray.forEach(
      (dataInfo) =>
        (dataString += `${dataInfo.age};${dataInfo.religion};${dataInfo.ethnicity};${dataInfo.region};${dataInfo.scholarity};${dataInfo.sex};${dataInfo.income};${dataInfo.ivp};${dataInfo.ivg}\n`)
    )

    return dataString
  }

  /**
   * Returns a random generated {@link DataInfo}.
   * @returns a random generated {@link DataInfo}
   */
  private generateVote(): DataInfo {
    return {
      age: this.randomAgeFunction(),
      religion: this.randomReligionFunction(),
      ethnicity: this.randomEthnicity(),
      region: this.randomRegion(),
      scholarity: this.randomScholarity(),
      sex: this.randomSex(),
      income: this.randomIncome(),
      ivp: this.presidentName,
      ivg: this.randomGovernorName()
    }
  }

  /**
   * Returns a random selected religion from {@code DataGenerator#RELIGIONS}.
   *
   * @returns a random selected religion from {@code DataGenerator#RELIGIONS}
   */
  private randomReligion(): Religion {
    return randomSelect(DataGenerator.RELIGIONS)
  }

  /**
   * Returns a random selected ethnicity from {@code DataGenerator#ETHNICITIES}.
   *
   * @returns a random selected ethnicity from {@code DataGenerator#ETHNICITIES}
   */
  private randomEthnicity(): Ethnicity {
    return randomSelect(DataGenerator.EHTNICITIES)
  }

  /**
   * Returns a random selected region from {@code DataGenerator#REGIONS}.
   *
   * @returns a random selected region from {@code DataGenerator#REGIONS}
   */
  private randomRegion(): Region {
    return randomSelect(DataGenerator.REGIONS)
  }

  /**
   * Returns a random selected scholarity from {@code DataGenerator#SCHOLARITIES}.
   *
   * @returns a random selected scholarity from {@code DataGenerator#SCHOLARITIES}
   */
  private randomScholarity(): Scholarity {
    return randomSelect(DataGenerator.SCHOLARITIES)
  }

  /**
   * Returns a random selected sex from {@code DataGenerator#SEXES}.
   *
   * @returns a random selected sex from {@code DataGenerator#SEXES}
   */
  private randomSex(): Sex {
    return randomSelect(DataGenerator.SEXES)
  }

  /**
   * Returns a random generated number with uniformely distribution
   * in the interval defined by [{@code DataGenerator#MINIMUM_INCOME},
   * {@code DataGenerator#MAXIMUM_INCOME}].
   *
   * @returns a random generated number with uniformely distribution in
   *          the defined interval.
   */
  private randomIncome(): number {
    return randomInt(DataGenerator.MINIMUM_INCOME, DataGenerator.MAXIMUM_INCOME)
  }

  /**
   * Returns a random selected governor name from {@code DataGenerator#GOVERNOR_NAMES}.
   *
   * @returns a random selected governor name from {@code DataGenerator#GOVERNOR_NAMES}
   */
  private randomGovernorName(): string {
    return randomSelect(DataGenerator.GOVERNOR_NAMES, () =>
      clamp(0, randomGaussian(0.5, 0.3), 0.9)
    )
  }
}
