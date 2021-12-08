/**
 * The {@link FileHistory} is an interface used to storage
 * some information from the file containing the data sent
 * by the user to the application.
 */
export interface FileHistory {
  name: string
  size: string
  sentAt: number
}
