import { DataInfo } from '@/models/DataInfo'
import { DataVisualizer } from '@/util/dataVisualizer'

export class DataInsighter {
  /**
   * The candidate with relation to the insights that will be provided
   */
  readonly candidate: string

  /**
   * An array of {@link DataInfo} in which the data will be extracted.
   */
  readonly dataInfoArray: DataInfo[]

  /**
   * The {@link DataVisualizer} that will be used to extract some informations
   * from the {@code dataInfoArray}.
   */
  readonly dataVisualizer: DataVisualizer

  constructor(candidate: string, dataVisualizer: DataVisualizer) {
    this.candidate = candidate
    this.dataInfoArray = dataVisualizer.getVisualizedData()
    this.dataVisualizer = dataVisualizer
  }

  /**
   * Returns the underlying {@link DataVisualizer}
   * @returns the underlying {@link DataVisualizer}
   */
  getDataVisualizer(): DataVisualizer {
    return this.dataVisualizer
  }
}
