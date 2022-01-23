<template>
  <Page name="Insights">
    <Card
      style="margin-bottom: 1.5rem"
      title="Primeiro de tudo. Quem é você como candidato?"
      subtitle="Selecione abaixo o nome do candidato que deseja receber os insights"
    >
      <label class="candidate-label">Qual candidato você é?: </label>
      <select
        v-model="candidate"
        name="candidate"
        id="candidate"
        class="candidate-selection"
        @change="removeShowInsights"
      >
        <optgroup label="Presidentes">
          <option
            v-for="presidentName in presidentNames"
            :value="presidentName"
            :key="presidentName"
          >
            {{ presidentName }}
          </option>
        </optgroup>
        <optgroup label="Governadores">
          <option
            v-for="governorName in governorsNames"
            :value="governorName"
            :key="governorName"
          >
            {{ governorName }}
          </option>
        </optgroup>
      </select>
      <Button
        content="Quero meus Insights!"
        @clicked="calculateInsights"
        :class="{ 'unrecognized-candidate-error': unrecgonizedCandidate }"
      />
    </Card>
    <Card
      v-if="showInsights"
      class="mt-3"
      title="Insights dos dados coletado"
      subtitle="Abaixo será apresentado os insights sobre o total de votos em geral, por faixa etária, religião, etnia, região, escolaridade, sexo e renda salarial."
    >
      <div class="insights-list">
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Total de Votos</h1>
          </div>
          <div class="insights-item-info">
            <span class="votes-insight">{{
              calculateTotalVotesInsight()
            }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Faixa Etária</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateAgeVotesInsight() }}
            <span class="votes-insight">{{
              messages.mostAndLeastGroupAgeMessage
            }}</span>
            <span class="votes-insight">{{
              messages.relateGroupAgeMessage
            }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Religião</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateReligionVotesInsights() }}
            <span class="votes-insight">{{
              messages.mostAndLeastReligionVotesMessage
            }}</span>
            <span class="votes-insight">{{
              messages.relateReligionMessage
            }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Etnia</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateEthnicityVotesInsights() }}
            <span class="votes-insight">{{
              messages.mostAndLeastEthnicityVotesMessage
            }}</span>
            <span class="votes-insight">{{
              messages.relateEthnicityMessage
            }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Região</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateRegionVotesInsights() }}
            <span class="votes-insight">{{
              messages.mostAndLeastRegionVotesMessage
            }}</span>
            <span class="votes-insight">{{
              messages.relateRegionMessage
            }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Escolaridade</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateScholarityVotesInsights() }}
            <span class="votes-insight">{{
              messages.mostAndLeastScholarityVotesMessage
            }}</span>
            <span class="votes-insight">{{
              messages.relateScholarityMessage
            }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Sexo</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateSexVotesInsights() }}
            <span class="votes-insight">{{
              messages.mostSexVotesMessage
            }}</span>
            <span class="votes-insight">{{
              messages.leastSexVotesMessage
            }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Renda Salarial</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateIncomeVotesInsight() }}
            <span class="votes-insight">{{
              messages.mostAndLeastIncomeVotesMessage
            }}</span>
            <span class="votes-insight">{{
              messages.relateIncomeMessage
            }}</span>
          </div>
        </div>
      </div>
    </Card>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DataVisualizer } from '@/util/dataVisualizer'
import { DataInsighter } from '@/util/dataInsighter'
import { DataStatistics } from '@/util/dataStatistics'
import { InsightsMessage } from '@/models/Insights'

import Page from '@/components/Page.vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    Page,
    Card,
    Button
  },
  data() {
    return {
      candidate: undefined as string | undefined,
      isCandidatePresident: false,
      dataVisualizer: DataVisualizer.defaultVisualizer() as DataVisualizer,
      dataInsighter: undefined as DataInsighter | undefined,
      presidentNames: [] as string[],
      governorsNames: [] as string[],
      unrecgonizedCandidate: false,
      showInsights: false,
      messages: {} as InsightsMessage
    }
  },
  mounted() {
    this.presidentNames = this.dataVisualizer.toPresidentsName()
    this.governorsNames = this.dataVisualizer.toGovernorsName()
  },
  methods: {
    removeShowInsights() {
      this.showInsights = false
    },
    /**
     * This method will be called when the user clicks on the button
     * to calculate the insights.
     */
    calculateInsights() {
      if (this.candidate === undefined) {
        // Prevent multiple users click.
        if (!this.unrecgonizedCandidate) {
          this.unrecgonizedCandidate = true
          window.setTimeout(() => (this.unrecgonizedCandidate = false), 280)
        }

        return
      }

      this.isCandidatePresident = this.presidentNames.some(
        (presidentName) => presidentName == this.candidate
      )

      this.dataInsighter = new DataInsighter(
        this.candidate,
        this.dataVisualizer as DataVisualizer
      )
      this.showInsights = true
    },
    /**
     * This method returns a message that informs the user
     * the classification in that poll.
     */
    calculateTotalVotesInsight(): string {
      if (this.dataInsighter === undefined) throw 'data insighter undefined'

      const position = this.dataInsighter.getTotalVotesPosition()
      let message = ''

      if (position === 1) message = 'Excelente!'
      else if (position === 2) message = 'Opa, estamos quase lá!'
      else if (position === 3) message = 'Vamos lá, iremos melhorar!'
      else if (position === 4) message = 'Não desamine, estamos muito perto!'
      else if (position >= 5 && position <= 10)
        message = 'Poxa, não tá bom, mas dá para melhorar!'
      else if (position > 10 && position <= 20)
        message = 'Pera, pera, pera, ajudaremos a chegar no TOP 10.'
      else if (position > 20) message = 'É, tá duro!'

      return `Você ficou em #${position} nessa pesquisa. ${message}`
    },
    /**
     * This method calculates the insights with relation to the age groups
     */
    calculateAgeVotesInsight(): void {
      if (this.dataInsighter === undefined) throw 'data insighter undefined'

      let mostAndLeastGroupAgeMessage = ''
      let relateGroupAgeMessage = ''

      const [mostGroupAge, leastGroupAge] =
        this.dataInsighter.getAgeVotesMostAndLeast()

      /* Votes by age group for this candidate */
      let ageGroupVotes: number[] = []

      if (this.isCandidatePresident)
        ageGroupVotes = this.dataVisualizer
          .toPresidentsAgeGroupVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data
      else
        ageGroupVotes = this.dataVisualizer
          .toGovernorsAgeGroupVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data

      /* Statistics Calculation */
      const mean = DataStatistics.mean(ageGroupVotes)
      const standardDeviation = DataStatistics.standardDeviation(ageGroupVotes)
      const [Q1, Q3] = DataStatistics.quartile(ageGroupVotes)
      const variation = (standardDeviation / mean) * 100.0

      mostAndLeastGroupAgeMessage = `A faixa etária ${mostGroupAge} anos é a que mais está te apoiando nesta campanha. Por outro lado, devemos rever a faixa etária ${leastGroupAge} anos que mostra não seguir sua campanha!`
      relateGroupAgeMessage = `Você teve uma média de ${mean.toFixed(
        1
      )} votos. Ainda mais, a partir do seu coeficiente de variação podemos afirmar que `

      if (variation > 70.0)
        relateGroupAgeMessage += `você teve votos de várias faixas etárias, ou seja, pouca concentração em alguns grupos.`
      else
        relateGroupAgeMessage +=
          'você teve votos de poucas faixas etárias, ou seja, uma concentração maior em alguns grupos.'

      relateGroupAgeMessage += ` Além disso, a partir dos quartis, podemos afirmar que 50% das faixas etárias tiveram uma quantidade de voto entre ${Q1} e ${Q3} votos.`

      this.messages.mostAndLeastGroupAgeMessage = mostAndLeastGroupAgeMessage
      this.messages.relateGroupAgeMessage = relateGroupAgeMessage
    },
    /**
     * This method informs the insights of the vote with relation to religion.
     */
    calculateReligionVotesInsights(): void {
      if (this.dataInsighter === undefined) throw 'data insighter undefined'

      const [mostReligionVotes, leastReligionVotes] =
        this.dataInsighter.getReligionVotesMostAndLeast()

      let mostReligionVotesInfo = ''
      let leastReligionVotesInfo = ''
      let relateReligionMessage = ''

      if (mostReligionVotes !== 'Sem Religião')
        mostReligionVotesInfo = mostReligionVotes.toLowerCase() + 's'
      else mostReligionVotesInfo = mostReligionVotes

      if (leastReligionVotes !== 'Sem Religião')
        leastReligionVotesInfo = leastReligionVotes.toLowerCase() + 's'
      else leastReligionVotesInfo = leastReligionVotes

      /* Votes by religion group for this candidate */
      let religionGroupVotes: number[] = []

      if (this.isCandidatePresident)
        religionGroupVotes = this.dataVisualizer
          .toPresidentsReligionVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data
      else
        religionGroupVotes = this.dataVisualizer
          .toGovernorsReligionVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data

      /* Statistics Calculation */
      const mean = DataStatistics.mean(religionGroupVotes)
      const standardDeviation =
        DataStatistics.standardDeviation(religionGroupVotes)
      const [Q1, Q3] = DataStatistics.quartile(religionGroupVotes)
      const variation = (standardDeviation / mean) * 100.0

      relateReligionMessage = `Você teve uma média de ${mean.toFixed(
        1
      )} votos. Ainda mais, a partir do seu coeficiente de variação podemos afirmar que `

      if (variation > 70.0)
        relateReligionMessage += `você teve votos de vários grupos religiosos, ou seja, pouca concentração em algumas.`
      else
        relateReligionMessage +=
          'você teve votos de poucos grupos religiosos, ou seja, uma concentração maior em algumas.'

      relateReligionMessage += ` Além disso, a partir dos quartis, podemos afirmar que 50% dos grupos religiosos tiveram uma quantidade de voto entre ${Q1} e ${Q3} votos.`

      this.messages.mostAndLeastReligionVotesMessage = `Os ${mostReligionVotesInfo} estão te apoiando imensamente nesta campanha. Contudo, visualizamos que o ${leastReligionVotesInfo} parece não estar te apoiando tanto quanto.`
      this.messages.relateReligionMessage = relateReligionMessage
    },
    /**
     * This method informs the insights of the vote with relation to ethnicity.
     */
    calculateEthnicityVotesInsights(): void {
      if (this.dataInsighter === undefined) throw 'data insighter undefined'

      const [mostEthnicityVotes, leastEthnicityVotes] =
        this.dataInsighter.getEthnicityVotesMostAndLeast()

      let mostEthnicityVotesInfo = ''
      let leastEthnicityVotesInfo = ''
      let relateEthnicityMessage = ''

      if (mostEthnicityVotes !== 'Indígena')
        mostEthnicityVotesInfo =
          mostEthnicityVotes
            .toLowerCase()
            .substring(0, mostEthnicityVotes.length - 1) + 'a'
      else mostEthnicityVotesInfo = mostEthnicityVotes.toLowerCase()

      if (leastEthnicityVotes !== 'Indígena')
        leastEthnicityVotesInfo =
          leastEthnicityVotes
            .toLowerCase()
            .substring(0, leastEthnicityVotes.length - 1) + 'a'
      else leastEthnicityVotesInfo = leastEthnicityVotes.toLowerCase()

      /* Votes by ethnicity group for this candidate */
      let ethnicityGroupVotes: number[] = []

      if (this.isCandidatePresident)
        ethnicityGroupVotes = this.dataVisualizer
          .toPresidentsEthnicityVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data
      else
        ethnicityGroupVotes = this.dataVisualizer
          .toGovernorsEthnicityVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data

      /* Statistics Calculation */
      const mean = DataStatistics.mean(ethnicityGroupVotes)
      const median = DataStatistics.median(ethnicityGroupVotes)
      const standardDeviation =
        DataStatistics.standardDeviation(ethnicityGroupVotes)
      const [Q1, Q3] = DataStatistics.quartile(ethnicityGroupVotes)
      const variation = (standardDeviation / mean) * 100.0

      relateEthnicityMessage = `Você teve uma mediana de ${median.toFixed(
        1
      )} votos. Ainda mais, a partir do seu coeficiente de variação podemos afirmar que `

      if (variation > 70.0)
        relateEthnicityMessage += `você teve votos de vários grupos populacionais, ou seja, pouca concentração em algumas.`
      else
        relateEthnicityMessage +=
          'você teve votos de poucos grupos populacionais, ou seja, uma concentração maior em algumas.'

      relateEthnicityMessage += ` Além disso, a partir dos quartis, podemos afirmar que 50% dos grupos populacionais tiveram uma quantidade de voto entre ${Q1} e ${Q3} votos.`

      this.messages.mostAndLeastEthnicityVotesMessage = `A população ${mostEthnicityVotesInfo} é a que mais te apoia nessa corrida eleitoral. Todavia, a população ${leastEthnicityVotesInfo} mostram que não compatibilizam com sua campanha`
      this.messages.relateEthnicityMessage = relateEthnicityMessage
    },
    /**
     * This method informs the insights of the vote with relation to region.
     */
    calculateRegionVotesInsights(): void {
      if (this.dataInsighter === undefined) throw 'data insighter undefined'

      const [mostRegionVotes, leastRegionVotes] =
        this.dataInsighter.getRegionVotesMostAndLeast()

      let relateRegionMessage = ''

      /* Votes by region for this candidate */
      let regionGroupVotes: number[] = []

      if (this.isCandidatePresident)
        regionGroupVotes = this.dataVisualizer
          .toPresidentsRegionVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data
      else
        regionGroupVotes = this.dataVisualizer
          .toGovernorsRegionVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data

      /* Statistics Calculation */
      const mean = DataStatistics.mean(regionGroupVotes)
      const median = DataStatistics.median(regionGroupVotes)
      const standardDeviation =
        DataStatistics.standardDeviation(regionGroupVotes)
      const [Q1, Q3] = DataStatistics.quartile(regionGroupVotes)
      const variation = (standardDeviation / mean) * 100.0

      relateRegionMessage = `Você teve uma mediana de ${median.toFixed(
        1
      )} votos. Ainda mais, a partir do seu coeficiente de variação podemos afirmar que `

      if (variation > 70.0)
        relateRegionMessage += `você teve votos de várias regiões, ou seja, pouca concentração em algumas.`
      else
        relateRegionMessage +=
          'você teve votos de poucas regiões, ou seja, uma concentração maior em algumas.'

      relateRegionMessage += ` Além disso, a partir dos quartis, podemos afirmar que 50% das regiões tiveram uma quantidade de voto entre ${Q1} e ${Q3} votos.`

      this.messages.mostAndLeastRegionVotesMessage = `A região ${mostRegionVotes} mostra ser uma grande aliada à sua vitória. De outra forma, devemos focar nas necessidades da região ${leastRegionVotes} que não apoia fortemente sua campanha!`
      this.messages.relateRegionMessage = relateRegionMessage
    },
    /**
     * This method informs the insights of the vote with relation to scholarity.
     */
    calculateScholarityVotesInsights(): void {
      if (this.dataInsighter === undefined) throw 'data insighter undefined'

      const [mostScholarityVotes, leastScholarityVotes] =
        this.dataInsighter.getScholarityVotesMostAndLeast()
      const withMostScholarity =
        mostScholarityVotes === 'Sem Escolaridade' ? '' : 'com'
      const withLeastScholarity =
        leastScholarityVotes === 'Sem Escolaridade' ? '' : 'com'

      let relateScholarityMessage = ''

      /* Votes by scholarity for this candidate */
      let scholarityGroupVotes: number[] = []

      if (this.isCandidatePresident)
        scholarityGroupVotes = this.dataVisualizer
          .toPresidentsScholarityVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data
      else
        scholarityGroupVotes = this.dataVisualizer
          .toGovernorsScholarityVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data

      /* Statistics Calculation */
      const mean = DataStatistics.mean(scholarityGroupVotes)
      const median = DataStatistics.median(scholarityGroupVotes)
      const standardDeviation =
        DataStatistics.standardDeviation(scholarityGroupVotes)
      const [Q1, Q3] = DataStatistics.quartile(scholarityGroupVotes)
      const variation = (standardDeviation / mean) * 100.0

      relateScholarityMessage = `Você teve uma mediana de ${median.toFixed(
        1
      )} votos. Ainda mais, a partir do seu coeficiente de variação podemos afirmar que `

      if (variation > 70.0)
        relateScholarityMessage += `você teve votos de várias escolaridades, ou seja, pouca concentração em algumas.`
      else
        relateScholarityMessage +=
          'você teve votos de poucas escolaridades, ou seja, uma concentração maior em algumas.'

      relateScholarityMessage += ` Além disso, a partir dos quartis, podemos afirmar que 50% das escolaridades tiveram uma quantidade de voto entre ${Q1} e ${Q3} votos.`

      this.messages.mostAndLeastScholarityVotesMessage = `Os eleitores ${withMostScholarity} ${mostScholarityVotes} apoiam sua campanha. Ainda mais, é indispensável rever as necessidades dos eleitores ${withLeastScholarity} ${leastScholarityVotes} que parecem não simpartizar com sua corrida eleitoral!`
      this.messages.relateScholarityMessage = relateScholarityMessage
    },
    /**
     * This method informs the insights of the vote with relation to sex.
     */
    calculateSexVotesInsights(): void {
      if (this.dataInsighter === undefined) throw 'data insighter undefined'

      const [mostSexVotes, leastSexVotes] =
        this.dataInsighter.getSexVotesMostAndLeast()
      const mostSexVotesInfo = mostSexVotes === 'M' ? 'Masculino' : 'Feminino'
      const leastSexVotesInfo = leastSexVotes === 'M' ? 'Masculino' : 'Feminino'

      this.messages.mostSexVotesMessage = `Os eleitores do sexo ${mostSexVotesInfo} contribuem com sua jornada!`
      this.messages.leastSexVotesMessage = `Poxa, devemos focar nas dificuldades da população do sexo ${leastSexVotesInfo}.`
    },
    /**
     * This method calculates the insights with relation to the income
     */
    calculateIncomeVotesInsight(): void {
      if (this.dataInsighter === undefined) throw 'data insighter undefined'

      let mostIncomeVotesMessage = ''
      let leastIncomeVotesMessage = ''
      let relateIncomeMessage = ''

      const [mostIncomeVotes, leastIncomeVotes] =
        this.dataInsighter.getIncomeVotesMostAndLeast()

      if (mostIncomeVotes === '<=2') mostIncomeVotesMessage = 'até 2'
      else if (mostIncomeVotes === '>10') mostIncomeVotesMessage = 'mais de 10'
      else mostIncomeVotesMessage = mostIncomeVotes

      if (leastIncomeVotes === '<=2') leastIncomeVotesMessage = 'até 2'
      else if (leastIncomeVotes === '>10')
        leastIncomeVotesMessage = 'mais de 10'
      else leastIncomeVotesMessage = leastIncomeVotes

      /* Votes by scholarity for this candidate */
      let incomeGroupVotes: number[] = []

      if (this.isCandidatePresident)
        incomeGroupVotes = this.dataVisualizer
          .toPresidentsIncomeVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data
      else
        incomeGroupVotes = this.dataVisualizer
          .toGovernorsIncomeVote()
          .filter((seriesData) => seriesData.name === this.candidate)[0].data

      /* Statistics Calculation */
      const mean = DataStatistics.mean(incomeGroupVotes)
      const standardDeviation =
        DataStatistics.standardDeviation(incomeGroupVotes)
      const [Q1, Q3] = DataStatistics.quartile(incomeGroupVotes)
      const variation = (standardDeviation / mean) * 100.0

      relateIncomeMessage = `Você teve uma média de ${mean.toFixed(
        1
      )} votos. Ainda mais, a partir do seu coeficiente de variação podemos afirmar que `

      if (variation > 70.0)
        relateIncomeMessage += `você teve votos de várias classes sociais, ou seja, pouca concentração em algumas.`
      else
        relateIncomeMessage +=
          'você teve votos de poucas classes sociais, ou seja, uma concentração maior em algumas.'

      relateIncomeMessage += ` Além disso, a partir dos quartis, podemos afirmar que 50% das classes sociais tiveram uma quantidade de voto entre ${Q1} e ${Q3} votos.`

      this.messages.mostAndLeastIncomeVotesMessage = `A população com renda salarial de ${mostIncomeVotesMessage} salários mínimos colaboram com sua campanha. Em contrapartida, precisamos rever as dificuldades que a população com renda salarial de ${leastIncomeVotesMessage} salários mínimos.`
      this.messages.relateIncomeMessage = relateIncomeMessage
    }
  }
})
</script>

<style scoped>
.candidate-label {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  color: #495057;
  margin-right: 1.25rem;
}

.candidate-selection {
  padding: 0 0.25rem;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #303030;
  align-items: center;
  background-color: #fff;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  cursor: default;
  position: relative;
  min-height: 30px;
  transition: all 0.1s;
  box-sizing: border-box;
  outline: 0px !important;
}

.candidate-selection optgroup {
  color: #495057;
}

@keyframes trim {
  from {
    left: 0px;
  }

  25% {
    left: 25px;
  }

  75% {
    left: -25px;
  }

  100% {
    left: 0;
  }
}

.unrecognized-candidate-error::v-deep a {
  background: #dd4a48;
  position: relative;
  animation: trim 0.25s ease-out;
}

.mt-3 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.votes-container {
  display: flex;
  flex-direction: column;
}

.votes-insight {
  color: #030303;
  margin-bottom: 0.1725rem;
}

.insights-list {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #495057;
  /* Test Only */
  /* background-color: red; */
}

.insights-item {
  /* Test Only */
  /* background-color: green; */
  display: grid;
  grid-template-columns: 10% 1fr;
  border-bottom: 1px solid #e9e9ef;
  min-height: 80px;
}

.insights-item:nth-child(even) {
  background-color: #f8f9fa;
}

.insights-item-category {
  font-size: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-right: 1px solid #e9e9ef;
}

.insights-item-info {
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: -1.25rem;
}
</style>
