<template>
  <Page name="Insights">
    <Card
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
      title="Insights com relação à intenção total de votos"
      subtitle="Consulte seus resultados com relação à intenção total de votos"
    >
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
      unrecgonizedCandidate: false
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
</style>
