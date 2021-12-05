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
