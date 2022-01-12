<template>
  <Card
    :title="{ title: `Intenções de Voto à ${this.target} por Escolaridade` }"
    :subtitle="{
      subtitle: `Consulte as intenções de voto à ${this.target.toLowerCase()} por escolaridade`
    }"
  >
    <template v-slot:default>
      <apexchart
        width="80%"
        height="600"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </template>
    <template v-slot:footer>
      <StripedTable>
        <template v-slot:body>
          <tr>
            <th>Candidato</th>
            <th>Média</th>
            <th>Mediana</th>
            <th>Moda</th>
            <th>Desvio Padrão</th>
            <th>Q1</th>
            <th>Q3</th>
            <th>IIQ</th>
            <th>
              Assimetria
              <p style="font-weight: 400; opacity: 0.8">(Pearson)</p>
            </th>
            <th>Curtose</th>
            <th>Amplitude</th>
            <th>Coeficiente de Variação</th>
          </tr>
          <tr v-for="info in summarizeContent" :key="info.name">
            <th>{{ info.name }}</th>
            <td>{{ info.resume.mean.toFixed(1) }}</td>
            <td>{{ info.resume.median.toFixed(1) }}</td>
            <td>
              {{ Number.isNaN(info.resume.mode) ? '*' : info.resume.mode }}
            </td>
            <td>{{ info.resume.standardDeviation.toFixed(2) }}</td>
            <td>{{ info.resume.lowerQuartile }}</td>
            <td>{{ info.resume.upperQuartile }}</td>
            <td>{{ info.resume.upperQuartile - info.resume.lowerQuartile }}</td>
            <td>{{ info.resume.asymmetry.toFixed(2) }}</td>
            <td>{{ info.resume.kurtosis.toFixed(2) }}</td>
            <td>{{ info.resume.range }}</td>
            <td>
              {{
                (
                  (info.resume.standardDeviation / info.resume.mean) *
                  100.0
                ).toFixed(2)
              }}%
            </td>
          </tr>
        </template>
      </StripedTable>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Card from '@/components/Card.vue'
import StripedTable from '@/components/StripedTable.vue'

import { SeriesData } from '@/models/DataInfo'
import { DataStatistics } from '@/util/dataStatistics'

export default defineComponent({
  components: {
    Card,
    StripedTable
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
  },
  computed: {
    /**
     * Summarize up the content provided to populate that graph
     * into statistics measures.
     */
    summarizeContent() {
      const array = []

      for (const info of this.content as SeriesData[]) {
        /* [!] Make a copy of the votes but sorted. */
        /* Now use that copy and not the votes directly */
        /* to not affect the graph distrtibution. [!] */
        const sortedCopiedData = [...info.data].sort(
          DataStatistics.sortingComparator
        )

        array.push({
          name: info.name,
          resume: DataStatistics.summarize(sortedCopiedData)
        })
      }

      return array
    }
  }
})
</script>

<style scoped></style>
