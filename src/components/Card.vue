<template>
  <div class="card">
    <div class="card-header">
      <div v-if="typeof title === 'string'" class="card-title">{{ title }}</div>
      <div v-else class="card-title">{{ title.title }}</div>
      <div v-if="typeof subtitle === 'string'" class="card-subtitle">
        {{ subtitle }}
      </div>
      <div v-else class="card-subtitle">{{ subtitle.subtitle }}</div>
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
    <div class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {},
    subtitle: {}
  }
})
</script>

<style scoped>
.card {
  font-family: 'IBM Plex Sans', sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #e9e9ef;
  border-radius: 0.25rem;
  flex: 1;
}

.card-header {
  padding: 1.25rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 1px solid #e9e9ef;
}

.card-footer {
  padding: 1.25rem;
  margin-bottom: 0;
  background-color: #fff;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card-title {
  font-size: 15.4px;
  font-weight: 600;
  margin: 0 0 7px;
  color: #495057;
}

.card-subtitle {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: rgb(73, 80, 87);
  text-align: start;
  text-size-adjust: 100%;
  margin-top: -0.25rem;
  margin-bottom: 1rem !important;
}
</style>
