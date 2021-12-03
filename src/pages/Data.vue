<template>
  <Header name="Dados" />
  <div class="data-page">
    <Card
      title="Envie seus dados"
      subtitle="Abaixo você pode inserir os dados que serão analisados e a formatação dos dados de entrada pode ser visualizado logo abaixo."
    >
      <FileUploader />
    </Card>
    <Card
      class="mt-3"
      title="Estrutura dos dados de entrada"
      subtitle="A estrutura informa o usuário como deve ser estruturado os dados de entrada para que a aplicação possa fazer a análise"
    >
      <div class="table-container">
        <table>
          <thead>
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
          </thead>
          <tbody>
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
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import FileUploader from '@/components/FileUploader.vue'

export default defineComponent({
  components: {
    Header,
    Card,
    FileUploader
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.data-page {
  position: absolute;
  width: 100%;
  margin-top: 196px;
  display: flex;
  flex-direction: column;
  padding: 0 7.5%;
}

.mt-3 {
  margin-top: 3rem !important;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  color: #495057;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-size-adjust: 100%;
  text-align: center;
  line-height: 21px;
}

th,
td {
  text-align: left;
  padding: 16px;
  border-bottom: 1px solid #e9e9ef;
}

tr:nth-child(even) {
  background-color: #f8f9fa;
}
</style>
