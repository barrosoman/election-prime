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
 * Returns a pseurandom Gaussian distributed number with mean {@code 0.0}
 * and standard deviation {@code 1.0} such that a number in the interval
 * [min, max] will be selected. Otheriwse, if the bounds are not both
 * set then the interval is [0, 1].
 *
 * This code is provided by the Java JDK Random#nextGaussian() method.
 * https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/Random.java
 *
 * @param {Number} min the minimum bound
 * @param {Number} max the maximum bound
 *
 * @returns a pseurandom Gaussian distributed number
 */
export function randomGaussian(min?: number, max?: number): number {
  if (!min || !max) {
    let u: number
    let v: number
    let s: number

    do {
      u = 2 * Math.random() - 1
      v = 2 * Math.random() - 1
      s = u * u + v * v
    } while (s >= 1 || s == 0)

    const multiplier: number = Math.sqrt((-2 * Math.log(s)) / s)
    return u * multiplier
  } else return randomInterval(min, max, randomGaussian)
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
  return array[array.length * random()]
}
