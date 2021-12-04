<template>
  <Header name="Dados" />
  <div class="data-page">
    <FileUploaderAndHistory />
    <TableInputData class="mt-3" />
    <TableValue class="mt-3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formatSimpleDate } from '@/util/dateFormatter'

import Header from '@/components/Header.vue'
import FileUploaderAndHistory from '@/components/data/FileUploaderAndHistory.vue'
import TableValue from '@/components/data/TableValue.vue'
import TableInputData from '@/components/data/TableInputData.vue'

export default defineComponent({
  components: {
    Header,
    FileUploaderAndHistory,
    TableInputData,
    TableValue
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
</style>
