import {
  DataInfo,
  Religion,
  Ethnicity,
  Region,
  Scholarity,
  Sex
} from '@/models/DataInfo'

import {
  randomGaussian,
  randomInt,
  randomFloat,
  randomSelect
} from '@/util/random'
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
  private readonly randomEthnicityFunction: () => Ethnicity
  private readonly randomScholarityFunction: () => Scholarity
  private readonly randomIncomeFunction: () => number

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

    this.randomReligionFunction = () =>
      randomSelect(DataGenerator.RELIGIONS, () =>
        clamp(
          0,
          randomGaussian(randomizedMean, randomizedStandardDeviation),
          0.99
        )
      )

    if (Math.random() > 0.25) {
      const randomizedIncomeMean = randomFloat(-2, 5) + 3
      const randomizedIncomeStandardDeviation = randomFloat(0, 5) + 1.5

      this.randomIncomeFunction = () =>
        clamp(
          0,
          randomGaussian(
            randomizedIncomeMean,
            randomizedIncomeStandardDeviation
          ),
          20
        )
    } else this.randomIncomeFunction = () => randomInt(0, 20)

    this.randomEthnicityFunction = () =>
      randomSelect(DataGenerator.EHTNICITIES, () =>
        clamp(0, randomGaussian(0.35, 0.5), 0.9)
      )

    const randomizedScholarityMean = randomFloat(-0.1, 0.1) + 0.445
    const randomizedScholarityStandardDeviation = randomFloat(-0.15, 0.15) + 0.2

    this.randomScholarityFunction = () =>
      randomSelect(DataGenerator.SCHOLARITIES, () =>
        clamp(
          0,
          randomGaussian(
            randomizedScholarityMean,
            randomizedScholarityStandardDeviation
          ),
          0.9
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
      ethnicity: this.randomEthnicityFunction(),
      region: this.randomRegion(),
      scholarity: this.randomScholarityFunction(),
      sex: this.randomSex(),
      income: this.randomIncomeFunction(),
      ivp: this.presidentName,
      ivg: this.randomGovernorName()
    }
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
   * Returns a random selected sex from {@code DataGenerator#SEXES}.
   *
   * @returns a random selected sex from {@code DataGenerator#SEXES}
   */
  private randomSex(): Sex {
    return randomSelect(DataGenerator.SEXES)
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
