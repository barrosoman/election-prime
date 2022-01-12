export class DataStatistics {
  /**
   * Returns the mean of a sample.
   *
   * Given a sample populated with n numbers. It is returned the
   * mean of that sample, calculated by summing up these numbers
   * and dividing that result by n (the amount of numbers in the sample).
   *
   * @param {Number[]} sample the sample
   * @param {Boolean} sorted if it is true represents that the sample is
   *                         already sorted. Otherwise, the method will
   *                         sort the sample.
   *
   * @returns {Number} the mean of a sample
   */
  static mean(sample: number[], sorted?: boolean): number {
    if (!sorted) sample.sort(this.sortingComparator)
    return sample.reduce((prev, curr) => prev + curr) / sample.length
  }

  /**
   * Returns the median of a sample.
   *
   * Given a sample populated with n numbers. It is returned the
   * median of that sample, that represents the central number of
   * that sample but sorted.
   *
   * If the amount of numbers in the sample (n) is even, the median
   * is the mean of the two central numbers. Otherwise, it is returned
   * the central number.
   *
   * @param {Number[]} sample the sample
   * @param {Boolean} sorted if it is true represents that the sample is
   *                         already sorted. Otherwise, the method will
   *                         sort the sample.
   *
   * @returns {Number} the median of a sample
   */
  static median(sample: number[], sorted?: boolean): number {
    /* Sort the sample if it is not sorted */
    if (!sorted) sample.sort(this.sortingComparator)

    const n = sample.length

    /* Check if the amount of numbers in the sample */
    /* is a even number. Then the median is the mean */
    /* of the two central numbers in the sample. */
    if (n % 2 === 0) return 0.5 * (sample[n / 2 - 1] + sample[n / 2])

    return sample[(n - 1) / 2]
  }

  /**
   * Returns the mode of a sample.
   *
   * Given a sample populated with n numbers. The mode of a sample is the
   * most occurring number in that sample.
   *
   * @param {Number} sample the sample
   *
   * @returns the mode of the sample
   */
  static mode(sample: number[]): number {
    const countingMap: any = {} // eslint-disable-line

    for (const sampleValue of sample)
      countingMap[sampleValue] = countingMap[sampleValue] + 1 || 1

    let mode = sample[0]

    for (const sampleValue of sample)
      if (countingMap[mode] < countingMap[sampleValue]) mode = sampleValue

    /* This condition inform that the sample does not has a mode */
    if (mode === sample[0] && countingMap[mode] === 1) return NaN

    return mode
  }

  /**
   * Returns the lower and upper quartile of a sample.
   *
   * Given a sample populated with n numbers. The lower quartile of the sample
   * is the median of the lower half the sample. Likewise, the upper quartile of
   * the sample is the median of the upper half of the sample.
   *
   * @param {Number} sample the sample
   * @param {Boolean} sorted if it is true represents that the sample is
   *                         already sorted. Otherwise, the method will
   *                         sort the sample.
   *
   * @returns the lower and upper quartile of the sample.
   */
  static quartile(sample: number[], sorted?: boolean): [number, number] {
    /* Sort the sample if it is not sorted */
    if (!sorted) sample.sort(this.sortingComparator)

    const n = sample.length

    /* Check if the amount of numbers in the sample */
    /* is a even number. */
    if (n % 2 === 0) {
      const halfN = n / 2
      return [
        this.median(sample.slice(0, halfN), true),
        this.median(sample.slice(halfN, n), true)
      ]
    }

    const medianIndex = (n - 1) / 2
    return [
      this.median(sample.slice(0, medianIndex + 1), true),
      this.median(sample.slice(medianIndex, n), true)
    ]
  }

  /**
   * Returns the standard deviation of a sample.
   *
   * Given a sample populated with n numbers. It is returned the
   * standard deviation of that sample, that represents an estimative
   * value of the deviation of the sample values from the sample mean.
   *
   * @param {Number[]} sample the sample
   * @param {Boolean} sorted if it is true represents that the sample is
   *                         already sorted. Otherwise, the method will
   *                         sort the sample.
   *
   * @returns {Number} the standard deviation of a sample
   */
  static standardDeviation(sample: number[], sorted?: boolean): number {
    /* Sort the sample if it is not sorted */
    if (!sorted) sample.sort(this.sortingComparator)

    const n = sample.length
    const sxx =
      sample.reduce(
        (prev, curr, index) =>
          (index === 1 ? Math.pow(prev, 2) : prev) + Math.pow(curr, 2)
      ) -
      n * Math.pow(this.mean(sample), 2)
    return Math.sqrt(sxx / (n - 1))
  }

  /**
   * Returns the asymmetry of a sample.
   *
   * If one of the values mean, median or standard deviation has not been specified,
   * the method will calculate all these values before calculate the asymmetry.
   *
   * @param {Number[]} sample the sample
   * @param {Number} [mean] the mean of that sample
   * @param {Number} [median] the median of that sample
   * @param {Number} [standardDeviation] the standard deviation of that sample
   *
   * @returns the asymmetry of the sample
   */
  static asymmetry(
    sample: number[],
    mean?: number,
    median?: number,
    standardDeviation?: number
  ): number {
    if (!mean || !median || !standardDeviation) {
      mean = this.mean(sample)
      median = this.median(sample)
      standardDeviation = this.standardDeviation(sample)
    }

    return (3.0 * (mean - median)) / standardDeviation
  }

  /**
   * Returns the range of a sample.
   *
   * Given a sample populated with n numbers. It is returned the range
   * of that sample, calculated by the difference between the greatest
   * and lowest value in that sample.
   *
   * If the minimum value or maximum valuue has not been specified. The
   * method will calculate those values from the sample.
   *
   * @param {Number[]} sample the sample
   * @param {Number} min the minimum value of that sample
   * @param {Number} max the maximum value of that sample
   *
   * @returns the range of that sample
   */
  static range(sample: number[], min?: number, max?: number): number {
    if (!min || !max) {
      /* Sort the sample */
      sample.sort(this.sortingComparator)

      min = sample[0]
      max = sample[sample.length - 1]
    }

    return max - min
  }

  /**
   * Returns the kurtosis of a sample.
   *
   * @param {Number[]} sample the sample
   * @param {Number} [mean] the mean of the sample
   *
   * @returns the kurtosis of the sample.
   */
  static kurtosis(sample: number[], mean?: number): number {
    if (!mean) mean = this.mean(sample)

    let numAcc = 0
    let denAcc = 0

    for (const sampleValue of sample) {
      const sMeanDeviation = Math.pow(sampleValue - mean, 2)
      const fMeanDeviation = sMeanDeviation * sMeanDeviation

      numAcc += fMeanDeviation
      denAcc += sMeanDeviation
    }

    return (sample.length * numAcc) / Math.pow(denAcc, 2) - 3.0
  }

  /**
   * @internal
   */
  static sortingComparator(a: number, b: number): number {
    return +a - +b
  }
}
