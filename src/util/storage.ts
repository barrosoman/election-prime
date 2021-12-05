import { FILE_HISTORY_KEY, DATA_KEY } from './constants'
import { FileHistory } from '@/models/FileHistory'
import { DataInfo } from '@/models/DataInfo'

//
// File History Functions
//

/**
 * Returns an array of {@link FileHistory} containing the
 * registered file history sent by the user.
 *
 * If the user does not sent any file, then an empty array
 * is returned.
 *
 * @returns an array of {@link FileHistory}
 */
export function getFileHistory(): FileHistory[] {
  const fileHistoryString: string | null =
    localStorage.getItem(FILE_HISTORY_KEY)
  return fileHistoryString == null ? [] : JSON.parse(fileHistoryString)
}

/**
 * Clear the file history.
 */
export function clearFileHistory(): void {
  localStorage.removeItem(FILE_HISTORY_KEY)
}

//
// Data Info Array Functions
//

/**
 * Returns an array of {@link DataInfo} tha contains the information
 * read from the last file sent by the user.
 *
 * @returns {DataInfo[]} an array of {@link DataInfo} parsed from the
 *          last file sent by the user
 */
export function getDataInfoArray(): DataInfo[] {
  const dataInfoArrayString: string | null = localStorage.getItem(DATA_KEY)
  return dataInfoArrayString == null ? [] : JSON.parse(dataInfoArrayString)
}
