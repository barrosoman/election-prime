<template>
  <Card
    :title="{ title: `Intenções de Voto à ${this.target}` }"
    :subtitle="{
      subtitle: `Consulte as intenções de voto à ${this.target.toLowerCase()}`
    }"
  >
    <template v-slot:default>
      <apexchart
        width="80%"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </template>
    <template v-slot:footer>
      <StripedTable>
        <template v-slot:body>
          <tr>
            <th>Média</th>
            <td>{{ mean }}</td>
          </tr>
          <tr>
            <th>Mediana</th>
            <td>{{ median }}</td>
          </tr>
          <tr>
            <th>Moda</th>
            <td>{{ Number.isNaN(mode) ? '*' : mode }}</td>
          </tr>
          <tr>
            <th>Desvio Padrão</th>
            <td>{{ standardDeviation.toFixed(2) }}</td>
          </tr>
          <tr>
            <th>Q1</th>
            <td>{{ quartile[0] }}</td>
          </tr>
          <tr>
            <th>Q3</th>
            <td>{{ quartile[1] }}</td>
          </tr>
          <tr>
            <th>IIQ</th>
            <td>{{ quartile[1] - quartile[0] }}</td>
          </tr>
          <tr>
            <th>Assimetria</th>
            <td>
              {{ ((mean - median) / standardDeviation).toFixed(2) }}
            </td>
          </tr>
          <tr>
            <th>Curtose</th>
            <td>{{ kurtosis.toFixed(2) }}</td>
          </tr>
          <tr>
            <th>Amplitude</th>
            <td>{{ range }}</td>
          </tr>
          <tr>
            <th>Coeficiente de Variação</th>
            <td>{{ ((standardDeviation / mean) * 100.0).toFixed(2) }}%</td>
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
  },
  computed: {
    /* [!] Make a copy of the votes but sorted. */
    /* Now use that copy and not the votes directly */
    /* to not affect the graph distrtibution. [!] */
    sortedVotes(): number[] {
      console.log('Votes Called!')
      return ([...this.votes] as number[]).sort(
        DataStatistics.sortingComparator
      )
    },
    mean() {
      return DataStatistics.mean(this.sortedVotes as number[], true)
    },
    median() {
      return DataStatistics.median(this.sortedVotes as number[], true)
    },
    mode() {
      return DataStatistics.mode(this.sortedVotes as number[])
    },
    standardDeviation(): number {
      return DataStatistics.standardDeviation(
        this.sortedVotes as number[],
        true
      )
    },
    quartile() {
      return DataStatistics.quartile(this.sortedVotes as number[], true)
    },
    range() {
      return DataStatistics.range(this.sortedVotes as number[])
    },
    kurtosis() {
      return DataStatistics.kurtosis(this.sortedVotes as number[])
    }
  }
})
</script>

<style scoped></style>
