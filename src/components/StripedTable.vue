<template>
  <table class="striped-table">
    <thead>
      <slot name="head" />
    </thead>
    <tbody>
      <slot name="body" />
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style>
.striped-table {
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

.striped-table th,
.striped-table td {
  text-align: left;
  padding: 16px;
  border-bottom: 1px solid #e9e9ef;
}

.striped-table tr:nth-child(even) {
  background-color: #f8f9fa;
}
</style>
