/**
 * Returns an integer number in the interval [0, 6] and returns
 * the name of a day in Portuguese translation.
 *
 * If the number is not in the interval [0, 6]. Then, an exception
 * will be thrown.
 *
 * @param {Number} day the day
 *
 * @returns {String} the name of the day
 */
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

/**
 * Receives two {@link Number} representing the hours and minutes, respectively,
 * and returns a string in the format `HH:mm`.
 *
 * @param {Number} hours the hours
 * @param {Number} minutes the minutes
 *
 * @returns a string in the format `HH:mm`
 */
export function formatSimpleHour(hours: number, minutes: number): string {
  const paddedHours = (hours < 10 ? '0' : '') + hours
  const paddedMinutes = (minutes < 10 ? '0' : '') + minutes
  return `${paddedHours}:${paddedMinutes}`
}

/**
 * Receives a {@link Number} that represents a date in {@code milliseconds}
 * and returns a string in the format `dd/MM/yyyy HH:mm`
 *
 * @param {Number} dateNumber the date in milliseconds
 *
 * @returns a string in the format `dd/MM/yyyy HH:mm`
 */
export function formatSimpleDate(dateNumber: number): string {
  const date = new Date(dateNumber)
  const paddedDate = (date.getDate() < 10 ? '0' : '') + date.getDate()
  const paddedMonth =
    (date.getMonth() + 1 < 10 ? '0' : '') + `${date.getMonth() + 1}`
  const paddedHours = (date.getHours() < 10 ? '0' : '') + date.getHours()
  const paddedMinutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()

  return `${paddedDate}/${paddedMonth}/${date.getFullYear()} ${paddedHours}:${paddedMinutes}`
}
