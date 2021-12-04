import { FILE_HISTORY_KEY } from './constants'
import { FileHistory } from '@/models/FileHistory'

export function getFileHistory(): FileHistory[] {
  const fileHistoryString: string | null =
    localStorage.getItem(FILE_HISTORY_KEY)
  return fileHistoryString == null ? [] : JSON.parse(fileHistoryString)
}

export function clearFileHistory(): void {
  localStorage.removeItem(FILE_HISTORY_KEY)
}
