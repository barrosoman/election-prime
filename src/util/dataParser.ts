import {
  DataInfo,
  Religion,
  Ethnicity,
  Region,
  Scholarity,
  Sex
} from '@/models/DataInfo'

/**
 * Parser class that is used to read a CSV file separate by a
 * a delimiter to return an array of {@link DataInfo} containing
 * the informations read from a file.
 */
export class Parser {
  /**
   * The current line being parsed.
   */
  line: number

  /**
   * The file being parsed.
   */
  file: File

  /**
   * Constructor of {@link Parser} that set the file to be parsed
   *
   * @param {File} file the file to be parsed
   */
  constructor(file: File) {
    this.line = 0
    this.file = file
  }

  /**
   * Parse the {@code file} and return an array of {@link DataInfo}
   * containing the information read from that file.
   *
   * If an information from the {@code file} is miswritten or invalid, then
   * an exception will be thrown informing the line where the error occurs
   * as the reason as well.
   *
   * @param {String} delimiter the delimiter that separate the different information
   *                           in the line
   *
   * @returns {DataInfo[]} an array of {@link DataInfo} containing the information
   *                       read from the {@code file}
   *
   * @see parseData that is the auxiliary method to parse the data read from the
   *                {@code file}
   */
  public async parse(delimiter = ';'): Promise<DataInfo[]> {
    const data: string = await this.readFileContent()
    return this.parseData(data, delimiter)
  }

  /**
   * Parse the {@code data} read from the file and return an array of
   * {@link DataInfo} that contains the information read from the {@code data}.
   *
   * If an information from the {@code data} is miswritten or invalid, then an
   * exception will be thrown informing the line where the error occurs
   * as the reason as well.
   *
   * @param {String} data the data to be parsed
   * @param {String} delimiter the delimiter that separate the different information
   *                           in the line
   *
   * @returns {DataInfo[]} an array of {@link DataInfo} containing the information
   *                       read from the {@code data}
   *
   * @see parseLine the auxiliary method used to parse each line read from the
   *                {@code data}
   */
  private parseData(data: string, delimiter: string): DataInfo[] {
    // Check if the data to be read is empty.
    if (data.length === 0) return []

    const dataLines: string[] = data.split('\n')
    const dataInfoArray: DataInfo[] = []

    dataLines
      .filter((dataLine) => dataLine.length !== 0)
      .forEach((dataLine) =>
        dataInfoArray.push(this.parseLine(dataLine, delimiter))
      )

    return dataInfoArray
  }

  /**
   * Parse a line and returns a {@link DataInfo} object from the information
   * containing in that line.
   *
   * If one of the required informations are invalid, then an exception will be
   * be thrown informing the line where the error occurs as the reason as well.
   *
   * @param {String} dataLine the data line to be parsed
   * @param {String} delimiter the delimiter that separate the different information
   *                           in the line
   *
   * @returns {DataInfo} an instance of {@link DataInfo} contaninign the infomration
   *                     read from the {@code dataLine}
   */
  private parseLine(dataLine: string, delimiter: string): DataInfo {
    // Increment the line counter
    this.line++

    const dataParts: string[] = dataLine.split(delimiter)

    // Check if there not is enough data info to be parsed
    if (dataParts.length !== 9)
      throw this.error('deve haver 9 informações por linha')

    const rawAge: number = parseInt(dataParts[0])
    const rawReligion: string = dataParts[1]
    const rawEthnicity: string = dataParts[2]
    const rawRegion: string = dataParts[3]
    const rawScholarity: string = dataParts[4]
    const rawSex: string = dataParts[5]
    const rawIncome: number = parseInt(dataParts[6])
    const ivp: string = dataParts[7]
    const ivg: string = dataParts[8]

    // Check if the age cannot be parsed
    if (isNaN(rawAge)) throw this.error('a idade inserida é inválida')

    // Check if is not a religion type
    if (!this.isReligionType(rawReligion))
      throw this.error('a religião inserida não foi encontrada')

    // Check if is not a ethnicity type
    if (!this.isEthnicityType(rawEthnicity))
      throw this.error('a etnia inserida não foi encontrada')

    // Check if is not a region type
    if (!this.isRegionType(rawRegion))
      throw this.error('a região inserida não foi encontrada')

    // Chekc if is not a scholarity type
    if (!this.isScholarityType(rawScholarity))
      throw this.error('a escolaridade inserida não foi encontrada')

    // Check if is not a sex type
    if (!this.isSexType(rawSex))
      throw this.error('o sexo inserido não foi encontrado')

    // Check if the income cannot be parsed
    if (isNaN(rawIncome)) throw this.error('a renda inserida é inválida')

    return {
      age: rawAge,
      religion: rawReligion,
      ethnicity: rawEthnicity,
      region: rawRegion,
      scholarity: rawScholarity,
      sex: rawSex,
      income: rawIncome,
      ivp: ivp,
      ivg: ivg
    }
  }

  /**
   * Read the file and returns a promise with its content.
   *
   * @returns {Promise<string>} a promise with the file content
   */
  private async readFileContent(): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = () => resolve(fileReader.result as string)
      fileReader.onerror = (error: Event) => reject(error)
      fileReader.readAsText(this.file)
    })
  }

  /**
   * Returns a message informing an error occurred to parse
   * the {@code file} at line {@code line}.
   *
   * @param {String} errorMessage the error message to be sent
   */
  private error(errorMessage: string): string {
    return `\nUm erro ocorreu ao analisar o arquivo ${this.file.name} na linha ${this.line}.\nMotivo: ${errorMessage}.\n`
  }

  /**
   * Returns {@code true} if content has the {@code Religion} type.
   *
   * @param {String} content the content to be checked
   * @returns {Boolean} {@code true} if the content has the {@code Religion} type
   */
  private isReligionType(content: string): content is Religion {
    return [
      'Católico',
      'Evangélico',
      'Muçulmano',
      'Judeu',
      'Sem Religião',
      'Outro'
    ].some((value) => value === content)
  }

  /**
   * Returns {@code true} if the content has the {@code Ethnicity} type.
   *
   * @param {String} content the content to be checked
   * @returns {Boolean} {@code true} if the content has the {@code Ethnicity} type
   */
  private isEthnicityType(content: string): content is Ethnicity {
    return ['Branco', 'Pardo', 'Preto', 'Amarelo', 'Indígena', 'Outro'].some(
      (value) => value === content
    )
  }

  /**
   * Returns {@code true} if the content has the {@code Region} type
   *
   * @param {String} content the content to be checked
   * @returns {Boolean} {@code true} if the content has the {@code Region} type
   */
  private isRegionType(content: string): content is Region {
    return ['Sul', 'Sudeste', 'Centro-Oeste', 'Nordeste', 'Norte'].some(
      (value) => value === content
    )
  }

  /**
   * Returns {@code true} if the content has the {@code Scholarity} type
   *
   * @param {String} content the content to be checked
   * @returns {Boolean} {@code true} if the content has the {@code Scholarity} type
   */
  private isScholarityType(content: string): content is Scholarity {
    return [
      'Sem Escolaridade',
      'Ensino Fundamental',
      'Ensino Médio',
      'Ensino Superior'
    ].some((value) => value === content)
  }

  /**
   * Returns {@code true} if the content has the {@code Sex} type
   *
   * @param {String} content the content to be checked
   * @returns {Boolean} {@code true} if the content has the {@code Sex} type
   */
  private isSexType(content: string): content is Sex {
    return ['M', 'F'].some((value) => value === content)
  }
}
