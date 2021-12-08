import { DataInfo, SeriesData, SeriesSexData } from '@/models/DataInfo'

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
   * Returns an array of {@link SeriesData} containing the names of the presidents
   * with the votes by age group.
   *
   * @returns an array of {@link SeriesData} containing the names of the presidents
   *                                           selected with its votes by age group
   */
  toPresidentsAgeGroupVote(): SeriesData[] {
    return this.toRolesAgeGroupVote(this.createRoleSelectorCallback(true))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the governors
   * with the votes by age group.
   *
   * @returns an array of {@link SeriesData} containing the names of the governors
   *                                           selected with its votes by age group
   */
  toGovernorsAgeGroupVote(): SeriesData[] {
    return this.toRolesAgeGroupVote(this.createRoleSelectorCallback(false))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the presidents
   * with the votes by religion.
   *
   * @returns an array of {@link SeriesData} containing the names of the presidents
   *                                           selected with its votes by religion
   */
  toPresidentsReligionVote(): SeriesData[] {
    return this.toRolesReligionVote(this.createRoleSelectorCallback(true))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the governors
   * with the votes by religion.
   *
   * @returns an array of {@link SeriesData} containing the names of the governors
   *                                           selected with its votes by religion
   */
  toGovernorsReligionVote(): SeriesData[] {
    return this.toRolesReligionVote(this.createRoleSelectorCallback(false))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the presidents
   * with the votes by ethnicity.
   *
   * @returns an array of {@link SeriesData} containing the names of the presidents
   *                                           selected with its votes by ethnicity
   */
  toPresidentsEthnicityVote(): SeriesData[] {
    return this.toRolesEthnicityVote(this.createRoleSelectorCallback(true))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the governors
   * with the votes by ethnicity.
   *
   * @returns an array of {@link SeriesData} containing the names of the governors
   *                                           selected with its votes by ethnicity
   */
  toGovernorsEthnicityVote(): SeriesData[] {
    return this.toRolesEthnicityVote(this.createRoleSelectorCallback(false))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the presidents
   * with the votes by region.
   *
   * @returns an array of {@link SeriesData} containing the names of the presidents
   *                                           selected with its votes by region
   */
  toPresidentsRegionVote(): SeriesData[] {
    return this.toRolesRegionVote(this.createRoleSelectorCallback(true))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the governors
   * with the votes by region.
   *
   * @returns an array of {@link SeriesData} containing the names of the governors
   *                                           selected with its votes by region
   */
  toGovernorsRegionVote(): SeriesData[] {
    return this.toRolesRegionVote(this.createRoleSelectorCallback(false))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the presidents
   * with the votes by scholarity.
   *
   * @returns an array of {@link SeriesData} containing the names of the presidents
   *                                           selected with its votes by scholarity
   */
  toPresidentsScholarityVote(): SeriesData[] {
    return this.toRolesScholarityVote(this.createRoleSelectorCallback(true))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the governors
   * with the votes by scholarity.
   *
   * @returns an array of {@link SeriesData} containing the names of the governors
   *                                           selected with its votes by scholarity
   */
  toGovernorsScholarityVote(): SeriesData[] {
    return this.toRolesScholarityVote(this.createRoleSelectorCallback(false))
  }

  /**
   * Returns of {@link SeriesSexData} containing the amount of votes by sex
   * from all presidents in order.
   *
   * @returns of {@link SeriesSexData} containing the amount of votes by sex
   *          from all presidents in order.
   */
  toPresidentsSexVote(): SeriesSexData {
    return this.toRolesSexVote(this.createRoleSelectorCallback(true))
  }

  /**
   * Returns of {@link SeriesSexData} containing the amount of votes by sex
   * from all gorvernors in order.
   *
   * @returns of {@link SeriesSexData} containing the amount of votes by sex
   *          from all gorvernors in order.
   */
  toGovernorsSexVote(): SeriesSexData {
    return this.toRolesSexVote(this.createRoleSelectorCallback(false))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the presidents
   * with the votes by income.
   *
   * @returns an array of {@link SeriesData} containing the names of the presidents
   *                                           selected with its votes by income
   */
  toPresidentsIncomeVote(): SeriesData[] {
    return this.toRolesIncomeVote(this.createRoleSelectorCallback(true))
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the governors
   * with the votes by income.
   *
   * @returns an array of {@link SeriesData} containing the names of the governors
   *                                           selected with its votes by income
   */
  toGovernorsIncomeVote(): SeriesData[] {
    return this.toRolesIncomeVote(this.createRoleSelectorCallback(false))
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
   * Returns an array of {@link SeriesData} containing the names of the candidate
   * selected by the {@code roleSelector} with the votes by age group.
   *
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its votes by age group extracted
   *
   * @returns an array of {@link SeriesData} containing the names of the candidate
   *                                           selected with its votes by age group
   */
  private toRolesAgeGroupVote(roleSelector: RoleSelector): SeriesData[] {
    const seriesDataArray: SeriesData[] = []
    const rolesName: string[] = this.toRolesName(roleSelector)

    rolesName.forEach((candidate) =>
      seriesDataArray.push(
        this.toCandidateAgeGroupVote(candidate, roleSelector)
      )
    )

    return seriesDataArray
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the candidate
   * selected by the {@code roleSelector} with the votes by religion.
   *
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its votes by religion extracted
   *
   * @returns an array of {@link SeriesData} containing the names of the candidate
   *                                           selected with its votes by religion
   */
  private toRolesReligionVote(roleSelector: RoleSelector): SeriesData[] {
    const seriesDataArray: SeriesData[] = []
    const rolesName: string[] = this.toRolesName(roleSelector)

    rolesName.forEach((candidate) =>
      seriesDataArray.push(
        this.toCandidateReligionVote(candidate, roleSelector)
      )
    )

    return seriesDataArray
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the candidate
   * selected by the {@code roleSelector} with the votes by ethnicity.
   *
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its votes by ethnicity extracted
   *
   * @returns an array of {@link SeriesData} containing the names of the candidate
   *                                           selected with its votes by ethnicity
   */
  private toRolesEthnicityVote(roleSelector: RoleSelector): SeriesData[] {
    const seriesDataArray: SeriesData[] = []
    const rolesName: string[] = this.toRolesName(roleSelector)

    rolesName.forEach((candidate) =>
      seriesDataArray.push(
        this.toCandidateEthnicityVote(candidate, roleSelector)
      )
    )

    return seriesDataArray
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the candidate
   * selected by the {@code roleSelector} with the votes by region.
   *
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its votes by region extracted
   *
   * @returns an array of {@link SeriesData} containing the names of the candidate
   *                                           selected with its votes by region
   */
  private toRolesRegionVote(roleSelector: RoleSelector): SeriesData[] {
    const seriesDataArray: SeriesData[] = []
    const rolesName: string[] = this.toRolesName(roleSelector)

    rolesName.forEach((candidate) =>
      seriesDataArray.push(this.toCandidateRegionVote(candidate, roleSelector))
    )

    return seriesDataArray
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the candidate
   * selected by the {@code roleSelector} with the votes by scholarity.
   *
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its votes by scholarity extracted
   *
   * @returns an array of {@link SeriesData} containing the names of the candidate
   *                                           selected with its votes by scholarity
   */
  private toRolesScholarityVote(roleSelector: RoleSelector): SeriesData[] {
    const seriesDataArray: SeriesData[] = []
    const rolesName: string[] = this.toRolesName(roleSelector)

    rolesName.forEach((candidate) =>
      seriesDataArray.push(
        this.toCandidateScholarityVote(candidate, roleSelector)
      )
    )

    return seriesDataArray
  }

  /**
   * Returns a tuple containing the amount of votes by sex from all
   * candidates selected by the {@code roleSelector}.
   *
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its votes by income extracted
   *
   * @returns a tuple containing the amount of votes by sex from all candidates
   */
  private toRolesSexVote(roleSelector: RoleSelector): SeriesSexData {
    const roleNames = this.toRolesName(roleSelector)
    const maleVotes: number[] = []
    const femaleVotes: number[] = []

    roleNames.forEach((candidate) => {
      const sexVotes: [number, number] = this.calculateRoleSexVote(
        candidate,
        roleSelector
      )

      maleVotes.push(sexVotes[0])
      femaleVotes.push(sexVotes[1])
    })

    return {
      maleVotes,
      femaleVotes
    }
  }

  /**
   * Returns an array of {@link SeriesData} containing the names of the candidate
   * selected by the {@code roleSelector} with the votes by income.
   *
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its votes by income extracted
   *
   * @returns an array of {@link SeriesData} containing the names of the candidate
   *                                           selected with its votes by income
   */
  private toRolesIncomeVote(roleSelector: RoleSelector): SeriesData[] {
    const seriesDataArray: SeriesData[] = []
    const rolesName: string[] = this.toRolesName(roleSelector)

    rolesName.forEach((candidate) =>
      seriesDataArray.push(this.toCandidateIncomeVote(candidate, roleSelector))
    )

    return seriesDataArray
  }

  /**
   * Returns a {@link SeriesData} that contains the votes by age group
   * relative to a provided {@code candidate} that must match the provided
   * {@code roleSelector}.
   *
   * @param {String} candidate the candidate to have its votes by age group extracted
   * @param {RoleSelector} roleSelector the role selector. The role selected must match with the candidate
   *
   * @returns a {@link SeriesData} contanining the name of the candidate and the votes
   *                                 of that one by age group
   */
  private toCandidateAgeGroupVote(
    candidate: string,
    roleSelector: RoleSelector
  ): SeriesData {
    const dataMap = new DataMap<string, number, number>(
      (map: Map<string, number>) =>
        [
          '16',
          '17',
          '18-20',
          '21-24',
          '25-34',
          '35-44',
          '45-59',
          '60-69',
          '70-79',
          '>79'
        ].forEach((key) => map.set(key, 0)),
      (value: number): string => {
        if (value === 16) return '16'
        else if (value === 17) return '17'
        else if (value >= 18 && value <= 20) return '18-20'
        else if (value >= 21 && value <= 24) return '21-24'
        else if (value >= 25 && value <= 34) return '25-34'
        else if (value >= 35 && value <= 44) return '35-44'
        else if (value >= 45 && value <= 59) return '45-59'
        else if (value >= 60 && value <= 69) return '60-69'
        else if (value >= 70 && value <= 79) return '70-79'
        else return '>79'
      }
    )

    return this.calculateCandidateGroupVotes(
      candidate,
      roleSelector,
      dataMap,
      (dataInfo) => dataInfo.age
    )
  }

  /**
   * Returns a {@link SeriesData} that contains the votes by religion
   * relative to a provided {@code candidate} that must match the provided
   * {@code roleSelector}.
   *
   * @param {String} candidate the candidate to have its votes by religion extracted
   * @param {RoleSelector} roleSelector the role selector. The role selected must match with the candidate
   *
   * @returns a {@link SeriesData} contanining the name of the candidate and the votes
   *                                 of that one by religion
   */
  private toCandidateReligionVote(
    candidate: string,
    roleSelector: RoleSelector
  ): SeriesData {
    const dataMap = new DataMap<string, number, string>(
      (map: Map<string, number>) =>
        [
          'Católico',
          'Evangélico',
          'Muçulmano',
          'Judeu',
          'Sem Religião',
          'Outro'
        ].forEach((key) => map.set(key, 0)),
      (value: string): string => value
    )

    return this.calculateCandidateGroupVotes(
      candidate,
      roleSelector,
      dataMap,
      (dataInfo) => dataInfo.religion
    )
  }

  /**
   * Returns a {@link SeriesData} that contains the votes by ethnicity
   * relative to a provided {@code candidate} that must match the provided
   * {@code roleSelector}.
   *
   * @param {String} candidate the candidate to have its votes by ethnicity extracted
   * @param {RoleSelector} roleSelector the role selector. The role selected must match with the candidate
   *
   * @returns a {@link SeriesData} contanining the name of the candidate and the votes
   *                                 of that one by ethnicity
   */
  private toCandidateEthnicityVote(
    candidate: string,
    roleSelector: RoleSelector
  ): SeriesData {
    const dataMap = new DataMap<string, number, string>(
      (map: Map<string, number>) =>
        ['Branco', 'Pardo', 'Preto', 'Amarelo', 'Indígena', 'Outro'].forEach(
          (key) => map.set(key, 0)
        ),
      (value: string): string => value
    )

    return this.calculateCandidateGroupVotes(
      candidate,
      roleSelector,
      dataMap,
      (dataInfo) => dataInfo.ethnicity
    )
  }

  /**
   * Returns a {@link SeriesData} that contains the votes by region
   * relative to a provided {@code candidate} that must match the provided
   * {@code roleSelector}.
   *
   * @param {String} candidate the candidate to have its votes by region extracted
   * @param {RoleSelector} roleSelector the role selector. The role selected must match with the candidate
   *
   * @returns a {@link SeriesData} contanining the name of the candidate and the votes
   *                                 of that one by region
   */
  private toCandidateRegionVote(
    candidate: string,
    roleSelector: RoleSelector
  ): SeriesData {
    const dataMap = new DataMap<string, number, string>(
      (map: Map<string, number>) =>
        ['Sul', 'Sudeste', 'Centro-Oeste', 'Nordeste', 'Norte'].forEach((key) =>
          map.set(key, 0)
        ),
      (value: string): string => value
    )

    return this.calculateCandidateGroupVotes(
      candidate,
      roleSelector,
      dataMap,
      (dataInfo) => dataInfo.region
    )
  }

  /**
   * Returns a {@link SeriesData} that contains the votes by scholarity
   * relative to a provided {@code candidate} that must match the provided
   * {@code roleSelector}.
   *
   * @param {String} candidate the candidate to have its votes by scholarity extracted
   * @param {RoleSelector} roleSelector the role selector. The role selected must match with the candidate
   *
   * @returns a {@link SeriesData} contanining the name of the candidate and the votes
   *                                 of that one by scholarity
   */
  private toCandidateScholarityVote(
    candidate: string,
    roleSelector: RoleSelector
  ): SeriesData {
    const dataMap = new DataMap<string, number, string>(
      (map: Map<string, number>) =>
        [
          'Sem Escolaridade',
          'Ensino Fundamental',
          'Ensino Médio',
          'Ensino Superior'
        ].forEach((key) => map.set(key, 0)),
      (value: string): string => value
    )

    return this.calculateCandidateGroupVotes(
      candidate,
      roleSelector,
      dataMap,
      (dataInfo) => dataInfo.scholarity
    )
  }
  /**
   * Returns a tuple {@code [number, number]} containing two values, the first
   * represents the amount of male people that voted on {@code candidiate} that
   * has a role determined by {@code roleSelector} and the second one the amount of
   * female people.
   *
   * @param {String} candidate the candidate who voted on
   * @param {RoleSelector} roleSelector the callback function that will
   *                                    select the role that will have
   *                                    its votes by sex extracted
   * @returns
   */
  private calculateRoleSexVote(
    candidate: string,
    roleSelector: RoleSelector
  ): [number, number] {
    let maleVotes = 0
    let femaleVotes = 0

    this.dataInfoArray
      .filter((dataInfo) => roleSelector(dataInfo) === candidate)
      .forEach((dataInfo) =>
        dataInfo.sex === 'M' ? maleVotes++ : femaleVotes++
      )

    return [maleVotes, femaleVotes]
  }

  /**
   * Returns a {@link SeriesData} that contains the votes by income
   * relative to a provided {@code candidate} that must match the provided
   * {@code roleSelector}.
   *
   * @param {String} candidate the candidate to have its votes by income extracted
   * @param {RoleSelector} roleSelector the role selector. The role selected must match with the candidate
   *
   * @returns a {@link SeriesData} contanining the name of the candidate and the votes
   *                                 of that one by income
   */
  private toCandidateIncomeVote(
    candidate: string,
    roleSelector: RoleSelector
  ): SeriesData {
    const dataMap = new DataMap<string, number, number>(
      (map: Map<string, number>) =>
        ['<=2', '3-4', '5-6', '7-10', '>10'].forEach((key) => map.set(key, 0)),
      (value: number): string => {
        if (value <= 2) return '<=2'
        else if (value >= 3 && value <= 4) return '3-4'
        else if (value >= 5 && value <= 6) return '5-6'
        else if (value >= 7 && value <= 10) return '7-10'
        else return '>10'
      }
    )

    return this.calculateCandidateGroupVotes(
      candidate,
      roleSelector,
      dataMap,
      (dataInfo) => dataInfo.income
    )
  }

  /**
   * Returns a {@link SeriesData} that contains the name of a candidate
   * that has a role selected by the {@code roleSelector}.
   *
   * @param {String} candidate the candidate name
   * @param {RoleSelector} roleSelector the role selector that will be used to extract
   *                     the votes from the candidate with the role selected
   *                     by this callback
   * @param {DataMap<K, T} dataMap the data map that is used to store the vote groups
   * @param {(DataInfo) => T} assignValueCallback the assign value callback handles which value
   *                            from {@link DataInfo} object will be used as
   *                            reference to make the grouping
   *
   * @returns {SeriesData} the object that contains the name of the candidate
   *                       and the grouping votes
   *
   * @type K the type of value of the grouping.
   * @type T the type of value that the {@code assignValueCallback} will get from the
   *         {@link DataInfo} to do the assignment
   */
  private calculateCandidateGroupVotes<K, T>(
    candidate: string,
    roleSelector: RoleSelector,
    dataMap: DataMap<K, number, T>,
    assignValueCallback: (dataInfo: DataInfo) => T
  ): SeriesData {
    this.dataInfoArray
      .filter((dataInfo) => roleSelector(dataInfo) === candidate)
      .forEach((dataInfo) =>
        dataMap.assign(
          assignValueCallback(dataInfo),
          (currentVoteCount) => currentVoteCount + 1
        )
      )

    return {
      name: candidate,
      data: Array.from(dataMap.getInternalMap().values())
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

class DataMap<K, V, T> {
  map: Map<K, V>
  mapInitializerCallback: (map: Map<K, V>) => void
  mapKeyAssignerCallback: (value: T) => K

  /**
   * Constructor of {@link DataMap} that sets the map initializer callback
   * and the key assigner callback.
   *
   * The initializer callback is called at construction-time to initialize
   * the underlying {@code map}.
   *
   * @param {(Map<K, V>) => void} mapInitializerCallback the map initializer callback
   * @param {(T) => K} mapKeyAssignerCallback the key assigner callback
   */
  constructor(
    mapInitializerCallback: (map: Map<K, V>) => void,
    mapKeyAssignerCallback: (value: T) => K
  ) {
    this.map = new Map()
    this.mapInitializerCallback = mapInitializerCallback
    this.mapKeyAssignerCallback = mapKeyAssignerCallback

    // Initializer the map
    this.mapInitializerCallback(this.map)
  }

  /**
   * Update a {@code value} already registered in a {@code key}. The
   * new value is that returned by the {@code updateCallback}.
   *
   * If the {@code key} is not registered in the {@code map} then an
   * exception will be thrown, because, only registered key can be
   * updated.
   *
   * @param {K} key the key
   * @param {(V) => V} updateCallback the update callback
   */
  update(key: K, updateCallback: (currentValue: V) => V) {
    const value = this.map.get(key)

    if (value === undefined)
      throw `The key ${key} just can be updated if it is already inserted.`

    this.map.set(key, updateCallback(value))
  }

  /**
   * Runs an update on a {@code key} assigned by a {@code value}.
   *
   * @param {T} value the value
   * @param {(V) => V} updateCallback the update callback
   *
   * @see update calls this functions to update the key
   */
  assign(value: T, updateCallback: (currentValue: V) => V) {
    const key = this.mapKeyAssignerCallback(value)
    this.update(key, updateCallback)
  }

  /**
   * Returns the underlying {@link Map}
   * @returns the underlying {@link Map}
   */
  getInternalMap(): Map<K, V> {
    return this.map
  }
}
