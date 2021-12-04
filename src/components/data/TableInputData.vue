<template>
  <Card
    class="mt-3"
    title="Estrutura dos dados de entrada"
    subtitle="A estrutura informa o usuário como deve ser estruturado os dados de entrada para que a aplicação possa fazer a análise"
  >
    <template v-slot:header>
      <ul class="legend-list">
        <li class="legend-list-title">Legenda</li>
        <li>IVP - Intenção de Voto a Presidência</li>
        <li>IVG - Intenção de Voto a Gorvernador</li>
      </ul>
    </template>
    <StripedTable>
      <template v-slot:head>
        <tr>
          <th>Idade</th>
          <th>Religião</th>
          <th>Etnia</th>
          <th>Região</th>
          <th>Escolaridade</th>
          <th>Sexo</th>
          <th>Renda</th>
          <th>IVP</th>
          <th>IVG</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr>
          <td>92</td>
          <td>Muçulmano</td>
          <td>Preto</td>
          <td>Sul</td>
          <td>Ensino Fundamental</td>
          <td>M</td>
          <td>16</td>
          <td>Rodrigo Fernandes</td>
          <td>Márcia Souza</td>
        </tr>
        <tr>
          <td>91</td>
          <td>Outro</td>
          <td>Outro</td>
          <td>Norte</td>
          <td>Ensino Médio</td>
          <td>M</td>
          <td>1</td>
          <td>Tiago Lima Martins</td>
          <td>Melissa Gonçalves Costa</td>
        </tr>
        <tr>
          <td>95</td>
          <td>Evangélico</td>
          <td>Pardo</td>
          <td>Sudeste</td>
          <td>Ensino Fundamental</td>
          <td>M</td>
          <td>18</td>
          <td>Ryan Castro Cavalcanti</td>
          <td>João Oliveira Lima</td>
        </tr>
        <tr>
          <td>50</td>
          <td>Outro</td>
          <td>Preto</td>
          <td>Centro-Oeste</td>
          <td>Ensino Médio</td>
          <td>M</td>
          <td>14</td>
          <td>Álvaro Castro</td>
          <td>Márcia Souza</td>
        </tr>
        <tr>
          <td>81</td>
          <td>Judeu</td>
          <td>Amarelo</td>
          <td>Sul</td>
          <td>Ensino Fundamental</td>
          <td>F</td>
          <td>8</td>
          <td>Marina Martins Souza</td>
          <td>João Oliveira Lima</td>
        </tr>
        <tr>
          <td>49</td>
          <td>Judeu</td>
          <td>Preto</td>
          <td>Norte</td>
          <td>Ensino Médio</td>
          <td>F</td>
          <td>1</td>
          <td>Marina Martins Souza</td>
          <td>Márcia Souza</td>
        </tr>
        <tr>
          <td>48</td>
          <td>Sem Religião</td>
          <td>Branco</td>
          <td>Centro-Oeste</td>
          <td>Ensino Superior</td>
          <td>F</td>
          <td>8</td>
          <td>Marina Martins Souza</td>
          <td>Laura Oliveira Dias</td>
        </tr>
        <tr>
          <td>90</td>
          <td>Judeu</td>
          <td>Indígena</td>
          <td>Centro-Oeste</td>
          <td>Ensino Fundamental</td>
          <td>F</td>
          <td>16</td>
          <td>Ryan Castro Cavalcanti</td>
          <td>Laura Oliveira Dias</td>
        </tr>
        <tr>
          <td>95</td>
          <td>Evangélico</td>
          <td>Amarelo</td>
          <td>Nordeste</td>
          <td>Ensino Médio</td>
          <td>M</td>
          <td>15</td>
          <td>Álvaro Castro</td>
          <td>João Oliveira Lima</td>
        </tr>
        <tr>
          <td>22</td>
          <td>Sem Religião</td>
          <td>Preto</td>
          <td>Sudeste</td>
          <td>Ensino Superior</td>
          <td>M</td>
          <td>1</td>
          <td>Rodrigo Fernandes</td>
          <td>Melissa Gonçalves Costa</td>
        </tr>
        <tr>
          <td>23</td>
          <td>Muçulmano</td>
          <td>Amarelo</td>
          <td>Centro-Oeste</td>
          <td>Sem Escolaridade</td>
          <td>F</td>
          <td>7</td>
          <td>Marina Martins Souza</td>
          <td>João Oliveira Lima</td>
        </tr>
        <tr>
          <td>47</td>
          <td>Católico</td>
          <td>Preto</td>
          <td>Nordeste</td>
          <td>Ensino Fundamental</td>
          <td>M</td>
          <td>15</td>
          <td>Ryan Castro Cavalcanti</td>
          <td>Laura Oliveira Dias</td>
        </tr>
        <tr>
          <td>42</td>
          <td>Sem Religião</td>
          <td>Outro</td>
          <td>Norte</td>
          <td>Ensino Médio</td>
          <td>M</td>
          <td>11</td>
          <td>Ryan Castro Cavalcanti</td>
          <td>Laura Oliveira Dias</td>
        </tr>
        <tr>
          <td>65</td>
          <td>Muçulmano</td>
          <td>Indígena</td>
          <td>Norte</td>
          <td>Sem Escolaridade</td>
          <td>M</td>
          <td>19</td>
          <td>Ryan Castro Cavalcanti</td>
          <td>Laura Oliveira Dias</td>
        </tr>
        <tr>
          <td>61</td>
          <td>Evangélico</td>
          <td>Amarelo</td>
          <td>Norte</td>
          <td>Ensino Fundamental</td>
          <td>F</td>
          <td>13</td>
          <td>Marina Martins Souza</td>
          <td>João Oliveira Lima</td>
        </tr>
        <tr>
          <td>44</td>
          <td>Judeu</td>
          <td>Outro</td>
          <td>Norte</td>
          <td>Ensino Fundamental</td>
          <td>M</td>
          <td>4</td>
          <td>Ryan Castro Cavalcanti</td>
          <td>Laura Oliveira Dias</td>
        </tr>
        <tr>
          <td>20</td>
          <td>Católico</td>
          <td>Pardo</td>
          <td>Norte</td>
          <td>Ensino Médio</td>
          <td>F</td>
          <td>18</td>
          <td>Álvaro Castro</td>
          <td>João Oliveira Lima</td>
        </tr>
        <tr>
          <td>77</td>
          <td>Sem Religião</td>
          <td>Indígena</td>
          <td>Sul</td>
          <td>Ensino Fundamental</td>
          <td>F</td>
          <td>14</td>
          <td>Rodrigo Fernandes</td>
          <td>Laura Oliveira Dias</td>
        </tr>
        <tr>
          <td>57</td>
          <td>Evangélico</td>
          <td>Outro</td>
          <td>Sul</td>
          <td>Sem Escolaridade</td>
          <td>M</td>
          <td>16</td>
          <td>Álvaro Castro</td>
          <td>Laura Oliveira Dias</td>
        </tr>
        <tr>
          <td>51</td>
          <td>Católico</td>
          <td>Indígena</td>
          <td>Sul</td>
          <td>Ensino Fundamental</td>
          <td>F</td>
          <td>19</td>
          <td>Ryan Castro Cavalcanti</td>
          <td>Melissa Gonçalves Costa</td>
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

<style scoped>
.legend-list {
  font-size: 14px;
  color: #495057;
  list-style: none;
}

.legend-list-title {
  font-size: 14px;
  font-weight: 700;
  padding-left: 0 !important;
  opacity: 0.75;
}

.legend-list li {
  padding: 0.5rem 0 0 0.75rem;
}
</style>
