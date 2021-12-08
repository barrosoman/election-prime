/**
 * The possible values of type {@link Religion}
 */
export type Religion =
  | 'Católico'
  | 'Evangélico'
  | 'Muçulmano'
  | 'Judeu'
  | 'Sem Religião'
  | 'Outro'

/**
 * The possible values of type {@link Ethnicity}
 */
export type Ethnicity =
  | 'Branco'
  | 'Pardo'
  | 'Preto'
  | 'Amarelo'
  | 'Indígena'
  | 'Outro'

/**
 * The possible values of type {@link Region}
 */
export type Region = 'Sul' | 'Sudeste' | 'Centro-Oeste' | 'Nordeste' | 'Norte'

/**
 * The possible values of type {@link Scholarity}
 */
export type Scholarity =
  | 'Sem Escolaridade'
  | 'Ensino Fundamental'
  | 'Ensino Médio'
  | 'Ensino Superior'

/**
 * The possible values of type {@link Sex}
 */
export type Sex = 'M' | 'F'

/**
 * The {@link DataInfo} interface is used to storage the
 * information in an object way after the parsing of the
 * file containing the data inserted by the users.
 */
export interface DataInfo {
  age: number
  religion: Religion
  ethnicity: Ethnicity
  region: Region
  scholarity: Scholarity
  sex: Sex
  income: number
  ivp: string
  ivg: string
}

/**
 * The {@link SeriesData} interface is used to transmit
 * data from the {@link DataVisualizer} into a Vue Component,
 * more specifically a chart that will render these information.
 */
export interface SeriesData {
  /**
   * The candidate name
   */
  name: string

  /**
   * The data of the candidate in an array such that each index
   * of the array represents a subgroup of the group type selected
   * by thefunction that will populate this array
   */
  data: number[]
}

/**
 * The {@link SeriesSexData} interface is used to transmit
 * data from the {@link DataVisualizer} into a Vue Component,
 * more specifically a chart that will render these information.
 */
export interface SeriesSexData {
  /**
   * The array that contains all male votes from all
   * candidates in order.
   */
  maleVotes: number[]

  /**
   * The array that contains all female votes from all
   * candidates in order.
   */
  femaleVotes: number[]
}
