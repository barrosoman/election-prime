/**
 * Clamp the {@code value} between minimum and maximum bounds.
 *
 * @param {Number} min the minimum value
 * @param {Number} value the value to be clamped
 * @param {Number} max the maximum value
 *
 * @returns {Number} the {@code value}, since it is in the closed interval [min, max],
 *                   {@code min} if {@code value} is lower than the minimum value and
 *                   {@code max} if {@code value} is greater than the maximum value.
 */
export default function clamp(min: number, value: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}
