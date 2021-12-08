<template>
  <Card
    :title="{ title: `Intenções de Voto à ${this.target} por Escolaridade` }"
    :subtitle="{
      subtitle: `Consulte as intenções de voto à ${this.target.toLowerCase()} por escolaridade`
    }"
  >
    <apexchart
      width="80%"
      height="600"
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
    content: {
      type: Array /* The objects of candidate and its votes for each age group */,
      required: true
    }
  },
  data() {
    return {
      series: this.content,
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
            horizontal: false
          }
        },
        xaxis: {
          categories: [
            'Sem Escolaridade',
            'Ensino Fundamental',
            'Ensino Médio',
            'Ensino Superior'
          ]
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
