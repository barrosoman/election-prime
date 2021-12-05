import {
  DataInfo,
  Religion,
  Ethnicity,
  Region,
  Scholarity,
  Sex
} from '@/models/DataInfo'

export async function readFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = () => resolve(fileReader.result as string)
    fileReader.onerror = (error: Event) => reject(error)
    fileReader.readAsText(file)
  })
}

export function parseCsvContent(data: string, delimiter = ';'): DataInfo[] {
  if (data.length === 0) return []

  const dataLines: string[] = data.split('\n')
  const dataInfoArray: DataInfo[] = []

  for (const dataLine of dataLines) {
    const lineInfo: string[] = dataLine.split(delimiter)
    dataInfoArray.push({
      age: parseInt(lineInfo[0]),
      religion: lineInfo[1] as Religion,
      ethnicity: lineInfo[2] as Ethnicity,
      region: lineInfo[3] as Region,
      scholarity: lineInfo[4] as Scholarity,
      sex: lineInfo[5] as Sex,
      income: parseInt(lineInfo[6]),
      ivp: lineInfo[7],
      ivg: lineInfo[8]
    })
  }

  return dataInfoArray
}

export async function parseCsvFile(
  file: File,
  delimiter = ';'
): Promise<DataInfo[]> {
  const data: string = await readFileContent(file)
  return parseCsvContent(data, delimiter)
}
