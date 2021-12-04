<template>
  <Page name="Dados">
    <FileUploaderAndHistory />
    <TableInputData class="mt-3" />
    <TableValue class="mt-3" />
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Page from '@/components/Page.vue'
import FileUploaderAndHistory from '@/components/data/FileUploaderAndHistory.vue'
import TableValue from '@/components/data/TableValue.vue'
import TableInputData from '@/components/data/TableInputData.vue'

export default defineComponent({
  components: {
    Page,
    FileUploaderAndHistory,
    TableInputData,
    TableValue
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
</style>
