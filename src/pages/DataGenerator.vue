<template>
  <Page name="Gerador de Dados">
    <Card
      title="Configurações Preliminares"
      subtitle="Realize as principais configurações dos parâmetros para a geração de dados"
    >
      <div class="user-generated-amount-container">
        <!-- <label>Quantos usuários deseja gerar no máximo?: </label>
        <select
          v-model="userAmount"
          name="user-generated-amount"
          id="user-generated-amount"
        >
          <option value="25" selected>25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="10000">10000</option>
        </select> -->
        <Button content="Gerar Dados!" @clicked="generateData"></Button>
      </div>
    </Card>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DataGenerator } from '@/util/dataGenerator'

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
      userAmount: 25
    }
  },
  methods: {
    generateData() {
      alert(`Testing Data Generator v1.0.25!`)
      const firstDataGenerator = new DataGenerator('Carlos Alves Rodrigues')
      const secondDataGenerator = new DataGenerator('Luan Santos Gomes')
      const thirdDataGenerator = new DataGenerator('Rafael Correia Pinto')
      const fourthDataGenerator = new DataGenerator('Julia Melo Martins')
      const fifthDataGenerator = new DataGenerator('Rebeca Cardoso Goncalves')

      const csvFileData: string =
        firstDataGenerator.generateToFileData(Math.random() * 1000) +
        secondDataGenerator.generateToFileData(Math.random() * 1000) +
        thirdDataGenerator.generateToFileData(Math.random() * 1000) +
        fourthDataGenerator.generateToFileData(Math.random() * 1000) +
        fifthDataGenerator.generateToFileData(Math.random() * 1000)

      const blob = new Blob([csvFileData], { type: 'text/csv;charset=UTF-8' })
      const elem = window.document.createElement('a')

      elem.href = window.URL.createObjectURL(blob)
      elem.download = 'generated-content'
      document.body.appendChild(elem)
      elem.click()
      document.body.removeChild(elem)
      window.URL.revokeObjectURL(elem.href)
    }
  }
})
</script>

<style scoped>
.user-generated-amount-container label {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  color: #495057;
  margin-right: 1.25rem;
}

.user-generated-amount-container select {
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
</style>
