<template>
  <Page name="Insights">
    <Card
      class="mt-3"
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
      title="Insights com relação à intenção total de votos"
      subtitle="Consulte seus resultados com relação à intenção total de votos"
    >
      <span class="votes-insight">{{ calculateTotalVotesInsight() }}</span>
    </Card>
    <Card
      v-if="showInsights"
      class="mt-3"
      title="Insights com relação à intenção de votos por Faixa Etária"
      subtitle="Consulte seus resultados com relação à intenção de votos por faixa etária"
    >
      {{ calculateAgeVotesInsight() }}
      <div class="votes-container">
        <span class="votes-insight">{{ mostGroupAgeMessage }}</span>
        <span class="votes-insight">{{ leastGroupAgeMessage }}</span>
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
      leastGroupAgeMessage: ''
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
     * This method returns a message that informs the age group
     * that most voted in the user
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
</style>
