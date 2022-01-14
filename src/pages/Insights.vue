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
            <span class="votes-insight">{{ mostGroupAgeMessage }}</span>
            <span class="votes-insight">{{ leastGroupAgeMessage }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Religião</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateReligionVotesInsights() }}
            <span class="votes-insight">{{ mostReligionVotesMessage }}</span>
            <span class="votes-insight">{{ leastReligionVotesMessage }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Etnia</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateEthnicityVotesInsights() }}
            <span class="votes-insight">{{ mostEthnicityVotesMessage }}</span>
            <span class="votes-insight">{{ leastEthnicityVotesMessage }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Região</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateRegionVotesInsights() }}
            <span class="votes-insight">{{ mostRegionVotesMessage }}</span>
            <span class="votes-insight">{{ leastRegionVotesMessage }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Escolaridade</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateScholarityVotesInsights() }}
            <span class="votes-insight">{{ mostScholarityVotesMessage }}</span>
            <span class="votes-insight">{{ leastScholarityVotesMessage }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Sexo</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateSexVotesInsights() }}
            <span class="votes-insight">{{ mostSexVotesMessage }}</span>
            <span class="votes-insight">{{ leastSexVotesMessage }}</span>
          </div>
        </div>
        <div class="insights-item">
          <div class="insights-item-category">
            <h1>Renda Salarial</h1>
          </div>
          <div class="insights-item-info">
            {{ calculateIncomeVotesInsight() }}
            <span class="votes-insight">{{ mostIncomeVotesMessage }}</span>
            <span class="votes-insight">{{ leastIncomeVotesMessage }}</span>
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
      dataVisualizer: DataVisualizer.defaultVisualizer() as DataVisualizer,
      dataInsighter: undefined as DataInsighter | undefined,
      presidentNames: [] as string[],
      governorsNames: [] as string[],
      unrecgonizedCandidate: false,
      showInsights: false,
      mostGroupAgeMessage: '',
      leastGroupAgeMessage: '',
      mostReligionVotesMessage: '',
      leastReligionVotesMessage: '',
      mostEthnicityVotesMessage: '',
      leastEthnicityVotesMessage: '',
      mostRegionVotesMessage: '',
      leastRegionVotesMessage: '',
      mostScholarityVotesMessage: '',
      leastScholarityVotesMessage: '',
      mostSexVotesMessage: '',
      leastSexVotesMessage: '',
      mostIncomeVotesMessage: '',
      leastIncomeVotesMessage: ''
    }
  },
  mounted() {
    this.presidentNames = this.dataVisualizer.toPresidentsName()
    this.governorsNames = this.dataVisualizer.toGovernorsName()
  },
  methods: {
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

      let mostGroupAgeMessage = ''
      let leastGroupAgeMessage = ''

      const [mostGroupAge, leastGroupAge] =
        this.dataInsighter.getAgeVotesMostAndLeast()

      if (mostGroupAge === '16')
        mostGroupAgeMessage = 'Os jovens estão loucos por você!'
      else if (mostGroupAge === '17')
        mostGroupAgeMessage = 'Os pré-adultos estão te adorando!'
      else if (mostGroupAge === '18-20')
        mostGroupAgeMessage = 'Os jovens adultos te apoaim!'
      else if (mostGroupAge === '21-24')
        mostGroupAgeMessage = 'Você está com o pessoal dos 21 aos 24 anos!'
      else if (mostGroupAge === '25-34')
        mostGroupAgeMessage =
          'Com certeza, a população dos 25 aos 34 anos o apoia!'
      else if (mostGroupAge === '35-44')
        mostGroupAgeMessage = 'Os adultos estão te apoiando!'
      else if (mostGroupAge === '45-59')
        mostGroupAgeMessage = 'A meia-idade está com você!'
      else if (mostGroupAge === '60-69')
        mostGroupAgeMessage = 'A população dos 60 ao 69 anos está com você!'
      else if (mostGroupAge === '70-79')
        mostGroupAgeMessage = 'Os idosos estão te adorando!'
      else if (mostGroupAge === '>79')
        mostGroupAgeMessage = 'O apoio dos com mais de 79 anos é seu!'

      if (leastGroupAge === '16')
        leastGroupAgeMessage = 'Necessitamos focar mais na comunidade jovem!'
      else if (leastGroupAge === '17')
        leastGroupAgeMessage = 'É preciso focar nos pré-adultos!'
      else if (leastGroupAge === '18-20')
        leastGroupAgeMessage = 'É vital focar nos jovens adultos!'
      else if (leastGroupAge === '21-24')
        leastGroupAgeMessage = 'Primordial focar no pessoal dos 21 aos 24 anos!'
      else if (leastGroupAge === '25-34')
        leastGroupAgeMessage =
          'Devemos destacar a população dos 25 aos 34 anos!'
      else if (leastGroupAge === '35-44')
        leastGroupAgeMessage =
          'Algo deve ser feito para que os adultos o apoie!'
      else if (leastGroupAge === '45-59')
        leastGroupAgeMessage = 'É fato, a meia-idade não está te apoiando!'
      else if (leastGroupAge === '60-69')
        leastGroupAgeMessage =
          'A faixa etária dos 60 aos 69 anos está difícil para você!'
      else if (leastGroupAge === '70-79')
        leastGroupAgeMessage = 'Devemos focar nas questões dos idosos!'
      else if (leastGroupAge === '>79')
        leastGroupAgeMessage = 'Os com mais de 79 anos não o apoiam!'

      this.mostGroupAgeMessage = mostGroupAgeMessage
      this.leastGroupAgeMessage = leastGroupAgeMessage
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

      if (mostReligionVotes !== 'Sem Religião')
        mostReligionVotesInfo = mostReligionVotes.toLowerCase() + 's'
      else mostReligionVotesInfo = mostReligionVotes

      if (leastReligionVotes !== 'Sem Religião')
        leastReligionVotesInfo = leastReligionVotes.toLowerCase() + 's'
      else leastReligionVotesInfo = leastReligionVotes

      this.mostReligionVotesMessage = `Os ${mostReligionVotesInfo} estão te apoiando imensamente!`
      this.leastReligionVotesMessage = `Devemos nos focar nas necessidades dos ${leastReligionVotesInfo}.`
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

      this.mostEthnicityVotesMessage = `A população ${mostEthnicityVotesInfo} é a que mais te apoia nessa corrida eleitoral!`
      this.leastEthnicityVotesMessage = `A população ${leastEthnicityVotesInfo} mostram que não compatibilizam com sua campanha!`
    },
    /**
     * This method informs the insights of the vote with relation to region.
     */
    calculateRegionVotesInsights(): void {
      if (this.dataInsighter === undefined) throw 'data insighter undefined'

      const [mostRegionVotes, leastRegionVotes] =
        this.dataInsighter.getRegionVotesMostAndLeast()

      this.mostRegionVotesMessage = `A região ${mostRegionVotes} mostra ser uma grande aliada à sua vitória!`
      this.leastRegionVotesMessage = `Devemos focar nas necessidades da região ${leastRegionVotes} que não apoia fortemente sua campanha!`
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

      this.mostScholarityVotesMessage = `Os eleitores ${withMostScholarity} ${mostScholarityVotes} apoiam sua campanha!`
      this.leastScholarityVotesMessage = `Indispensável rever as necessidades dos eleitores ${withLeastScholarity} ${leastScholarityVotes} que parecem não simpartizar com sua corrida eleitoral!`
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

      this.mostSexVotesMessage = `Os eleitores do sexo ${mostSexVotesInfo} contribuem com sua jornada!`
      this.leastSexVotesMessage = `Poxa, devemos focar nas dificuldades da população do sexo ${leastSexVotesInfo}.`
    },
    /**
     * This method calculates the insights with relation to the income
     */
    calculateIncomeVotesInsight(): void {
      if (this.dataInsighter === undefined) throw 'data insighter undefined'

      let mostIncomeVotesMessage = ''
      let leastIncomeVotesMessage = ''

      const [mostIncomeVotes, leastIncomeVotes] =
        this.dataInsighter.getIncomeVotesMostAndLeast()

      if (mostIncomeVotes === '<=2') mostIncomeVotesMessage = 'até 2'
      else if (mostIncomeVotes === '>10') mostIncomeVotesMessage = 'mais de 10'
      else mostIncomeVotesMessage = mostIncomeVotes

      if (leastIncomeVotes === '<=2') leastIncomeVotesMessage = 'até 2'
      else if (leastIncomeVotes === '>10')
        leastIncomeVotesMessage = 'mais de 10'
      else leastIncomeVotesMessage = leastIncomeVotes

      this.mostIncomeVotesMessage = `A população com renda salarial de ${mostIncomeVotesMessage} salários mínimos colaboram com sua campanha!`
      this.leastIncomeVotesMessage = `Precisamos rever as dificuldades que a população com renda salarial de ${leastIncomeVotesMessage} salários mínimos.`
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
  height: 80px;
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
  display: flex;
  align-items: center;
}
</style>
