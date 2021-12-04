export function formatDay(day: number): string {
  switch (day) {
    case 0:
      return 'Domingo'
    case 1:
      return 'Segunda-Feira'
    case 2:
      return 'Terça-Feira'
    case 3:
      return 'Quarta-Feira'
    case 4:
      return 'Quinta-Feira'
    case 5:
      return 'Sexta-Feira'
    case 6:
      return 'Sábado'
    default:
      throw 'Unexpected value'
  }
}

export function formatSimpleHour(hours: number, minutes: number): string {
  const paddedHours = (hours < 10 ? '0' : '') + hours
  const paddedMinutes = (minutes < 10 ? '0' : '') + minutes
  return `${paddedHours}:${paddedMinutes}`
}

export function formatSimpleDate(dateNumber: number): string {
  const date = new Date(dateNumber)
  const paddedDate = (date.getDate() < 10 ? '0' : '') + date.getDate()
  const paddedHours = (date.getHours() < 10 ? '0' : '') + date.getHours()
  const paddedMinutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()

  return `${paddedDate}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${paddedHours}:${paddedMinutes}`
}
