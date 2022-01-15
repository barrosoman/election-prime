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
  mostAndLeastReligionVotesMessage: string
  relateReligionMessage: string

  /**
   * Messages related to the ethnicity.
   */
  mostAndLeastEthnicityVotesMessage: string
  relateEthnicityMessage: string

  /**
   * Messages related to the region.
   */
  mostAndLeastRegionVotesMessage: string
  relateRegionMessage: string

  /**
   * Messages related to the scholarity.
   */
  mostAndLeastScholarityVotesMessage: string
  relateScholarityMessage: string

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
