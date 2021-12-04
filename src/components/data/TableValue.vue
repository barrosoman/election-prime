<template>
  <Card
    title="Tabela de valores"
    subtitle="Verifique os possíveis valores dos dados de entrada"
  >
    <StripedTable>
      <template v-slot:body>
        <tr>
          <th>Idade</th>
          <td>16-99</td>
        </tr>
        <tr>
          <th>Religião</th>
          <td>Católico</td>
          <td>Evangélico</td>
          <td>Muçulmano</td>
          <td>Judeu</td>
          <td>Sem Religião</td>
          <td>Outro</td>
        </tr>
        <tr>
          <th>Etnia</th>
          <td>Branco</td>
          <td>Pardo</td>
          <td>Preto</td>
          <td>Amarelo</td>
          <td>Indígena</td>
          <td>Outro</td>
        </tr>
        <tr>
          <th>Região</th>
          <td>Sul</td>
          <td>Sudeste</td>
          <td>Centro-Oeste</td>
          <td>Nordeste</td>
          <td>Norte</td>
        </tr>
        <tr>
          <th>Escolaridade</th>
          <td>Sem Escolaridade</td>
          <td>Ensino Fundamental</td>
          <td>Ensino Médio</td>
          <td>Ensino Superior</td>
        </tr>
        <tr>
          <th>Sexo</th>
          <td>M</td>
          <td>F</td>
        </tr>
        <tr>
          <th>Renda</th>
          <td>Quantidade em salários mínimos</td>
        </tr>
        <tr>
          <th>IVP</th>
          <td>Definido pelo usuário</td>
        </tr>
        <tr>
          <th>IVG</th>
          <td>Definido pelo usuário</td>
        </tr></template
      >
    </StripedTable>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Card from '@/components/Card.vue'
import StripedTable from '@/components/StripedTable.vue'

export default defineComponent({
  components: {
    Card,
    StripedTable
  }
})
</script>

<style scoped></style>
