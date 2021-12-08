export type Religion =
  | 'Católico'
  | 'Evangélico'
  | 'Muçulmano'
  | 'Judeu'
  | 'Sem Religião'
  | 'Outro'

export type Ethnicity =
  | 'Branco'
  | 'Pardo'
  | 'Preto'
  | 'Amarelo'
  | 'Indígena'
  | 'Outro'

export type Region = 'Sul' | 'Sudeste' | 'Centro-Oeste' | 'Nordeste' | 'Norte'

export type Scholarity =
  | 'Sem Escolaridade'
  | 'Ensino Fundamental'
  | 'Ensino Médio'
  | 'Ensino Superior'

export type Sex = 'M' | 'F'

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

export interface SeriesData {
  name: string /* The candidate name */
  data: number[] /* The candidate series data */
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
