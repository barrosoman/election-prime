<template>
  <Header name="Dados" />
  <div class="data-page">
    <Card
      class="mt-3"
      title="Envie seus dados"
      subtitle="Abaixo você pode inserir os dados que serão analisados e a formatação dos dados de entrada pode ser visualizado no fim da página."
    >
      <FileUploader @sent="updateFileSentHistory" />
    </Card>
    <Card
      class="mt-3"
      title="Histórico de envios"
      subtitle="Consulte os últimos envios de dados"
    >
      <template v-slot:header>
        <div class="clean-file-history-container">
          <svg
            @click="cleanFileSentHistory"
            class="clean-file-history-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(73, 80, 87, 1); transform: ; msfilter: "
          >
            <path
              d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"
            ></path>
          </svg>
        </div>
      </template>
      <div v-if="fileSentHistory === null" class="no-data-sent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: rgba(116, 120, 141, 1); transform: ; msfilter: "
        >
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
          ></path>
        </svg>
        <h3>Você não enviou nenhum dado :(</h3>
      </div>
      <div v-else>
        <table>
          <thead>
            <th>#</th>
            <th>Arquivo</th>
            <th>Tamanho</th>
            <th>Data</th>
          </thead>
          <tbody>
            <tr
              v-for="(fileSent, index) in fileSentHistory"
              :key="fileSent.date"
            >
              <th>{{ index + 1 }}</th>
              <td>{{ fileSent.name }}</td>
              <td>{{ fileSent.size }} Bytes</td>
              <td>{{ formatSimpleDate(fileSent.date) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
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
    <Card
      class="mt-3"
      title="Tabela de valores"
      subtitle="Verifique os possíveis valores dos dados de entrada"
    >
      <table>
        <tbody>
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
          </tr>
        </tbody>
      </table>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formatSimpleDate } from '@/util/dateFormatter'

import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import FileUploader from '@/components/FileUploader.vue'

export default defineComponent({
  components: {
    Header,
    Card,
    FileUploader
  },
  data() {
    return {
      fileSentHistory: null as string | null
    }
  },
  mounted() {
    this.updateFileSentHistory()
  },
  methods: {
    formatSimpleDate,
    updateFileSentHistory() {
      const key = 'prob:file_history'
      const fileSentHistoryString = localStorage.getItem(key)

      if (fileSentHistoryString === null) this.fileSentHistory = null
      else this.fileSentHistory = JSON.parse(fileSentHistoryString)
    },
    cleanFileSentHistory() {
      const key = 'prob:file_history'
      localStorage.removeItem(key)
      this.fileSentHistory = null
    }
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
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
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

.no-data-sent {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.75;
}

.no-data-sent svg {
  width: 36px;
  height: 36px;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.no-data-sent h3 {
  color: #495057;
  font-size: 1.3125rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
}

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

.clean-file-history-container {
  display: flex;
  justify-content: flex-end;
}

.clean-file-history-icon {
  background: #e9e9ef;
  border-radius: 6px;
  padding: 0.5rem;
  box-sizing: content-box;
  cursor: pointer;
}
</style>
