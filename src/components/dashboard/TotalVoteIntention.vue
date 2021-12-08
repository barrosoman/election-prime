<template>
  <Card
    :title="{ title: `Intenções de Voto à ${this.target}` }"
    :subtitle="{
      subtitle: `Consulte as intenções de voto à ${this.target.toLowerCase()}`
    }"
  >
    <apexchart
      width="80%"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Card from '@/components/Card.vue'

export default defineComponent({
  components: {
    Card
  },
  props: {
    target: {
      type: String /* The target vote intention role */,
      required: true
    },
    names: {
      type: Array /* An array of string */,
      required: true
    },
    votes: {
      type: Array /* An array of numbers */,
      required: true
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: `intenção-de-votos-${this.target}-total`
        },
        xaxis: {
          categories: this.names
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        }
      },
      series: [
        {
          name: `Intenção de Votos à ${this.target}`,
          data: this.votes
        }
      ]
    }
  }
})
</script>

<style scoped></style>
