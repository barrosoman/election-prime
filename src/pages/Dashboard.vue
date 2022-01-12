<template>
  <Page name="Infográficos">
    <div v-if="dataInfoArray.length === 0" class="no-data-container">
      <h3>Você não inseriu nenhum dado :(</h3>
      <span>Insira seus dados na página Dados para nós podermos analisar!</span>
      <Button content="Ir para Dados" :routing="true" routingTo="/data" />
      <img class="no-data-img" src="@/assets/no_data.svg" alt="" />
    </div>
    <div v-else class="main-container">
      <TotalVoteIntention
        target="Presidência"
        :names="this.dataVisualizer.toPresidentsName()"
        :votes="this.dataVisualizer.toPresidentsVote()"
      />
      <TotalVoteIntention
        target="Governador"
        :names="this.dataVisualizer.toGovernorsName()"
        :votes="this.dataVisualizer.toGovernorsVote()"
      />
      <AgeGroupVoteIntention
        target="Presidência"
        class="graph-one-line"
        :content="this.dataVisualizer.toPresidentsAgeGroupVote()"
      />
      <AgeGroupVoteIntention
        target="Governador"
        class="graph-one-line"
        :content="this.dataVisualizer.toGovernorsAgeGroupVote()"
      />
      <ReligionVoteIntention
        target="Presidência"
        class="graph-one-line"
        :content="this.dataVisualizer.toPresidentsReligionVote()"
      />
      <ReligionVoteIntention
        target="Governador"
        class="graph-one-line"
        :content="this.dataVisualizer.toGovernorsReligionVote()"
      />
      <EthnicityVoteIntention
        target="Presidência"
        class="graph-one-line"
        :content="this.dataVisualizer.toPresidentsEthnicityVote()"
      />
      <EthnicityVoteIntention
        target="Governador"
        class="graph-one-line"
        :content="this.dataVisualizer.toGovernorsEthnicityVote()"
      />
      <RegionVoteIntention
        target="Presidência"
        class="graph-one-line"
        :content="this.dataVisualizer.toPresidentsRegionVote()"
      />
      <RegionVoteIntention
        target="Governador"
        class="graph-one-line"
        :content="this.dataVisualizer.toGovernorsRegionVote()"
      />
      <ScholarityVoteIntention
        target="Presidência"
        class="graph-one-line"
        :content="this.dataVisualizer.toPresidentsScholarityVote()"
      />
      <ScholarityVoteIntention
        target="Governador"
        class="graph-one-line"
        :content="this.dataVisualizer.toGovernorsScholarityVote()"
      />
      <SexVoteIntention
        target="Presidência"
        :content="this.dataVisualizer.toPresidentsSexVote()"
        :candidates="this.dataVisualizer.toPresidentsName()"
      />
      <SexVoteIntention
        target="Governador"
        :content="this.dataVisualizer.toGovernorsSexVote()"
        :candidates="this.dataVisualizer.toGovernorsName()"
      />
      <IncomeVoteIntention
        target="Presidência"
        class="graph-one-line"
        :content="this.dataVisualizer.toPresidentsIncomeVote()"
      />
      <IncomeVoteIntention
        target="Governador"
        class="graph-one-line"
        :content="this.dataVisualizer.toGovernorsIncomeVote()"
      />
    </div>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getDataInfoArray } from '@/util/storage'
import { DataInfo } from '@/models/DataInfo'
import { DataVisualizer } from '@/util/dataVisualizer'

import Page from '@/components/Page.vue'
import Button from '@/components/Button.vue'

import TotalVoteIntention from '@/components/dashboard/TotalVoteIntention.vue'
import AgeGroupVoteIntention from '@/components/dashboard/AgeGroupVoteIntention.vue'
import ReligionVoteIntention from '@/components/dashboard/ReligionVoteIntention.vue'
import EthnicityVoteIntention from '@/components/dashboard/EthnicityVoteIntention.vue'
import RegionVoteIntention from '@/components/dashboard/RegionVoteIntention.vue'
import ScholarityVoteIntention from '@/components/dashboard/ScholarityVoteIntention.vue'
import SexVoteIntention from '@/components/dashboard/SexVoteIntention.vue'
import IncomeVoteIntention from '@/components/dashboard/IncomeVoteIntention.vue'

export default defineComponent({
  components: {
    Page,
    Button,
    TotalVoteIntention,
    AgeGroupVoteIntention,
    ReligionVoteIntention,
    EthnicityVoteIntention,
    RegionVoteIntention,
    ScholarityVoteIntention,
    IncomeVoteIntention,
    SexVoteIntention
  },
  data() {
    return {
      dataInfoArray: [] as DataInfo[],
      dataVisualizer: undefined as DataVisualizer | undefined
    }
  },
  mounted() {
    this.dataInfoArray = getDataInfoArray()
    this.dataVisualizer = new DataVisualizer(this.dataInfoArray)
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-data-container {
  font-family: 'IBM Plex Sans', sans-serif;
  color: #495057;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.no-data-container h3 {
  margin-bottom: 0.25rem;
}

.no-data-container span {
  opacity: 0.8;
  width: 350px;
  text-align: center;
}

.no-data-img {
  width: 560px;
  opacity: 0.7;
  position: relative;
  top: -56px;
  transform: rotate(-2.75deg);
  z-index: -1;
}

.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
  margin-bottom: 1.5rem;
}

.graph-one-line {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
