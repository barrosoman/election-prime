<template>
  <div>
    <span>{{ formatDay(day) }}</span>
    <span>{{ formatSimpleHour(hours, minutes) }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formatDay, formatSimpleHour } from '@/util/dateFormatter'

export default defineComponent({
  data() {
    return {
      timerId: -1,
      day: new Date().getDay(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes()
    }
  },
  mounted() {
    this.timerId = window.setInterval(this.updateDateTime, 1000)
  },
  unmounted() {
    if (this.timerId !== -1) window.clearTimeout(this.timerId)
  },
  methods: {
    formatDay,
    formatSimpleHour,
    updateDateTime() {
      const date = new Date()
      this.day = date.getDay()
      this.hours = date.getHours()
      this.minutes = date.getMinutes()
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
