/**
 * Returns a random generated number in the interval [min, max] in which
 * the random generated number is provided by the {@code random} callback
 * function.
 *
 * @param {Number} min the minimum bound
 * @param {Number} max the maximum bound
 * @param {() => Number} random the random function
 *
 * @returns a random generated number in the interval [min, max]
 */
function randomInterval(
  min: number,
  max: number,
  random: () => number
): number {
  const minInteger: number = Math.ceil(min)
  const maxInteger: number = Math.floor(max)

  return minInteger + Math.floor(random() * (maxInteger - minInteger))
}

/**
 * Returns a random generated number in the interval [min, max],
 * since both {@code min} and {@code max} has been set. Otherwise,
 * the interval is [0, 1].
 *
 * @param {Number} min the minimum bound of the interval
 * @param {Number} max the maximum bound of the interval
 *
 * @returns {Number} a random generated number in the interval [min, max]
 */
export function randomInt(min?: number, max?: number): number {
  if (!min || !max) return Math.random()
  else return randomInterval(min, max, Math.random)
}

/**
 * Returns a random selected element from the {@code array}.
 *
 * @param array the array
 * @param random the random function
 *
 * @returns a random selected element from the {@code array}
 */
export function randomSelect<T>(array: T[], random?: () => number): T {
  if (!random) random = Math.random
  return array[Math.floor(array.length * random())]
}
