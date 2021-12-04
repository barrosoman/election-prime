const registerKey = (namespace: string, key: string): string =>
  `${namespace}:${key}`

export const FILE_HISTORY_KEY = registerKey('prob', 'file_history')
