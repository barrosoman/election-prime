<template>
  <Header :name="{ name }" />
  <div class="data-page">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/Header.vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    Header
  }
})
</script>

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
