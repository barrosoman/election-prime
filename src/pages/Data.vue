<template>
  <Header name="Dados" />
  <div class="data-page">
    <Card
      title="Envie seus dados"
      subtitle="Abaixo você pode inserir os dados que serão analisados e a formatação dos dados de entrada pode ser visualizado logo abaixo."
    >
      <FileUploader />
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
</style>
