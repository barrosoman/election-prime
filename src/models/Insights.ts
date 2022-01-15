/**
 * InsightsMessage interface is responsible for contains all
 * the messages that should be shown in the Insights page.
 */
export interface InsightsMessage {
  /**
   * Messages related to the group age.
   */
  mostAndLeastGroupAgeMessage: string
  relateGroupAgeMessage: string

  /**
   * Messages related to the religion.
   */
  mostReligionVotesMessage: string
  leastReligionVotesMessage: string

  /**
   * Messages related to the ethnicity.
   */
  mostEthnicityVotesMessage: string
  leastEthnicityVotesMessage: string

  /**
   * Messages related to the region.
   */
  mostRegionVotesMessage: string
  leastRegionVotesMessage: string

  /**
   * Messages related to the scholarity.
   */
  mostScholarityVotesMessage: string
  leastScholarityVotesMessage: string

  /**
   * Messages related to the sex.
   */
  mostSexVotesMessage: string
  leastSexVotesMessage: string

  /**
   * Messages related to the income.
   */
  mostIncomeVotesMessage: string
  leastIncomeVotesMessage: string
}
