<template>
  <Card
    :title="{ title: `Intenções de Voto à ${this.target} por Sexo` }"
    :subtitle="{
      subtitle: `Consulte as intenções de voto à ${this.target.toLowerCase()} por sexo`
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
import { SeriesSexData } from '@/models/DataInfo'

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
    content: {},
    candidates: {
      type: Array /* An array of string that contains the name of the candidates */,
      required: true
    }
  },
  data() {
    return {
      series: [
        {
          name: 'M',
          data: (this.content as SeriesSexData).maleVotes
        },
        {
          name: 'F',
          data: (this.content as SeriesSexData).femaleVotes
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 0,
          stacked: true
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          categories: this.candidates
        },
        yaxis: {
          title: {
            text: undefined
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      }
    }
  }
})
</script>

<style scoped></style>
