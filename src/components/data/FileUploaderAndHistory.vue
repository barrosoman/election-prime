<template>
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
    <div v-if="fileSentHistory.length === 0" class="no-data-sent">
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
      <StripedTable>
        <template v-slot:head>
          <th>#</th>
          <th>Arquivo</th>
          <th>Tamanho</th>
          <th>Data</th></template
        >
        <template v-slot:body>
          <tr v-for="(fileSent, index) in fileSentHistory" :key="fileSent.date">
            <th>{{ index + 1 }}</th>
            <td>{{ fileSent.name }}</td>
            <td>{{ fileSent.size }} Bytes</td>
            <td>{{ formatSimpleDate(fileSent.date) }}</td>
          </tr></template
        >
      </StripedTable>
    </div>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formatSimpleDate } from '@/util/dateFormatter'
import { clearFileHistory, getFileHistory } from '@/util/storage'
import { FileHistory } from '@/models/FileHistory'

import Card from '@/components/Card.vue'
import StripedTable from '@/components/StripedTable.vue'
import FileUploader from '@/components/FileUploader.vue'

export default defineComponent({
  components: {
    Card,
    StripedTable,
    FileUploader
  },
  data() {
    return {
      fileSentHistory: [] as FileHistory[]
    }
  },
  mounted() {
    this.updateFileSentHistory()
  },
  methods: {
    formatSimpleDate,
    updateFileSentHistory() {
      this.fileSentHistory = getFileHistory()
    },
    cleanFileSentHistory() {
      clearFileHistory()
      this.fileSentHistory = []
    }
  }
})
</script>

<style scoped>
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

.mt-3 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>
