import { DataInfo, AgeGroupData } from '@/models/DataInfo'

type RoleSelector = (dataInfo: DataInfo) => string

export class DataVisualizer {
  dataInfoArray: DataInfo[]

  /**
   * Constructor of {@link DataVisualizer} that set the {@link DataInfo} array
   * that will have its informations extracted and visualized.
   *
   * @param {DataInfo[]} dataInfoArray the data info array
   */
  constructor(dataInfoArray: DataInfo[]) {
    this.dataInfoArray = dataInfoArray
  }

  /**
   * Returns an array of {@link String} contaning the name of the
   * presidents that are taken into account in the provided data.
   *
   * @returns {String[]} an array of {@link String} contaning the name
   *                      of the presidents
   *
   * @see toRolesName that will extract the name of a selected role. In this case,
   *                  the selected role is {@code President}
   * @see createRoleSelectorCallback that creates the role selector callback
   */
  toPresidentsName(): string[] {
    return this.toRolesName(this.createRoleSelectorCallback(true))
  }

  /**
   * Returns an array of {@link String} contaning the name of the
   * governors that are taken into account in the provided data.
   *
   * @returns {String[]} an array of {@link String} contaning the name
   *                      of the governors
   *
   * @see toRolesName that will extract the name of a selected role. In this case,
   *                  the selected role is {@code Governor}
   * @see createRoleSelectorCallback that creates the role selector callback
   */
  toGovernorsName(): string[] {
    return this.toRolesName(this.createRoleSelectorCallback(false))
  }

  /**
   * Returns an array of {@link Number} containing the votes of the
   * presidents that are taken into account in the provided data.
   *
   * @return {Number[]} an array of {@link Number} containing the votes
   *                    of the presidents
   *
   * @see toRolesName that will extract the votes of a selected role. In this case,
   *                  the selected role is {@code President}
   * @see createRoleSelectorCallback that creates the role selector callback
   */
  toPresidentsVote(): number[] {
    return this.toRolesVote(this.createRoleSelectorCallback(true))
  }

  /**
   * Returns an array of {@link Number} containing the votes of the
   * governors that are taken into account in the provided data.
   *
   * @return {Number[]} an array of {@link Number} containing the votes
   *                    of the governors
   *
   * @see toRolesName that will extract the votes of a selected role. In this case,
   *                  the selected role is {@code Governor}
   * @see createRoleSelectorCallback that creates the role selector callback
   */
  toGovernorsVote(): number[] {
    return this.toRolesVote(this.createRoleSelectorCallback(false))
  }

  /**
   * Returns an array of {@link AgeGroupData} containing the names of the presidents
   * with the votes by age group.
   *
   * @returns an array of {@link AgeGroupData} containing the names of the presidents
   *                                           selected with its votes by age group
   */
  toPresidentsAgeGroupVote(): AgeGroupData[] {
    return this.toRolesAgeGroupVote(this.createRoleSelectorCallback(true))
  }

  /**
   * Returns an array of {@link AgeGroupData} containing the names of the governors
   * with the votes by age group.
   *
   * @returns an array of {@link AgeGroupData} containing the names of the governors
   *                                           selected with its votes by age group
   */
  toGovernorsAgeGroupVote(): AgeGroupData[] {
    return this.toRolesAgeGroupVote(this.createRoleSelectorCallback(false))
  }

  /**
   * Returns an array of {@link String} containing the name of the
   * selected role that are taken into account in the provided data.
   *
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its names extracted
   *
   * @return {String[]} an array of {@link String} containing the name
   *                    of the selected role
   */
  private toRolesName(roleSelector: RoleSelector): string[] {
    const roleNameSet = new Set()

    this.dataInfoArray.forEach((dataInfo) =>
      roleNameSet.add(roleSelector(dataInfo))
    )

    return Array.from(roleNameSet) as string[]
  }

  /**
   * Returns an array of {@link Number} containing the votes of the
   * selected role that are taken into account in the provided data.
   *
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its votes extracted
   *
   * @return {Number[]} an array of {@link Number} containing the votes
   *                    of the selected role
   */
  private toRolesVote(roleSelector: RoleSelector): number[] {
    const roleVoteMap = new Map()

    this.dataInfoArray.forEach((dataInfo) => {
      const selectedRole = roleSelector(dataInfo)
      this.setOrDefault(
        roleVoteMap,
        selectedRole,
        1,
        (currentVoteCount) => currentVoteCount + 1
      )
    })

    return Array.from(roleVoteMap.values())
  }

  /**
   * Returns an array of {@link AgeGroupData} containing the names of the candidate
   * selected by the {@code roleSelector} with the votes by age group.
   *
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its votes by age group extracted
   *
   * @returns an array of {@link AgeGroupData} containing the names of the candidate
   *                                           selected with its votes by age group
   */
  private toRolesAgeGroupVote(roleSelector: RoleSelector): AgeGroupData[] {
    const ageGroupDataArray: AgeGroupData[] = []
    const rolesName: string[] = this.toRolesName(roleSelector)

    rolesName.forEach((candidate) =>
      ageGroupDataArray.push(
        this.toCandidateAgeGroupVote(candidate, roleSelector)
      )
    )

    return ageGroupDataArray
  }

  /**
   * Returns a {@link AgeGroupData} that contains the votes by age group
   * relative to a provided {@code candidate} that must match the provided
   * {@code roleSelector}.
   *
   * @param {String} candidate the candidate to have its votes by age group extracted
   * @param {RoleSelector} roleSelector the role selector. The role selected must match with the candidate
   *
   * @returns a {@link AgeGroupData} contanining the name of the candidate and the votes
   *                                 of that one by age group
   */
  private toCandidateAgeGroupVote(
    candidate: string,
    roleSelector: RoleSelector
  ): AgeGroupData {
    const voteMap = new Map()

    voteMap.set('16', 0)
    voteMap.set('17', 0)
    voteMap.set('18-20', 0)
    voteMap.set('21-24', 0)
    voteMap.set('25-34', 0)
    voteMap.set('35-44', 0)
    voteMap.set('45-59', 0)
    voteMap.set('60-69', 0)
    voteMap.set('70-79', 0)
    voteMap.set('>79', 0)

    this.dataInfoArray
      .filter((dataInfo) => roleSelector(dataInfo) === candidate)
      .forEach((dataInfo) => {
        let ageGroupKey: string

        if (dataInfo.age === 16) ageGroupKey = '16'
        else if (dataInfo.age === 17) ageGroupKey = '17'
        else if (dataInfo.age >= 18 && dataInfo.age <= 20) ageGroupKey = '18-20'
        else if (dataInfo.age >= 21 && dataInfo.age <= 24) ageGroupKey = '21-24'
        else if (dataInfo.age >= 25 && dataInfo.age <= 34) ageGroupKey = '25-34'
        else if (dataInfo.age >= 35 && dataInfo.age <= 44) ageGroupKey = '35-44'
        else if (dataInfo.age >= 45 && dataInfo.age <= 59) ageGroupKey = '45-59'
        else if (dataInfo.age >= 60 && dataInfo.age <= 69) ageGroupKey = '60-69'
        else if (dataInfo.age >= 70 && dataInfo.age <= 79) ageGroupKey = '70-79'
        else ageGroupKey = '>79'

        this.setOrDefault(
          voteMap,
          ageGroupKey,
          1,
          (currentVoteCount) => currentVoteCount + 1
        )
      })

    return {
      name: candidate,
      data: Array.from(voteMap.values())
    }
  }

  /**
   * Create a callback that will be used to do the role selecting when
   * the information from {@code dataInfoArray} will be extracted by the
   * other functions.
   *
   * @param {Boolean} president if it is {@code true} then the role selector
   *                            always be the president. Otherwise, will be the governor.
   *
   * @returns a callback that do the role selecting
   */
  private createRoleSelectorCallback(president: boolean): RoleSelector {
    return president
      ? (dataInfo: DataInfo) => dataInfo.ivp
      : (dataInfo: DataInfo) => dataInfo.ivg
  }

  /**
   * If the key does not exists in the {@code map} then a {@code defaultValue}
   * is set to that {@code key}. Otherwise, a {@code updateCallback} function
   * is called to update the value at that {@code key}.
   *
   * @param {Map<K, V>} map the map to have its key updated
   * @param {K} key the key to have its value updated
   * @param {V} defaultValue the default value
   * @param {(V) => V} updateCallback the update callback function
   */
  private setOrDefault<K, V>(
    map: Map<K, V>,
    key: K,
    defaultValue: V,
    updateCallback: (currentValue: V) => V
  ): void {
    const currentValue = map.get(key)
    if (currentValue === undefined) map.set(key, defaultValue)
    else map.set(key, updateCallback(currentValue))
  }
}
