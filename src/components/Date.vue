<template>
  <div>
    <span>{{ textDay }}</span>
    <span>{{ hours }}:{{ paddedMinutes }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
  computed: {
    textDay() {
      switch (this.day) {
        case 0:
          return 'Domingo'
        case 1:
          return 'Segunda-Feira'
        case 2:
          return 'Terça-Feira'
        case 3:
          return 'Quarta-Feira'
        case 4:
          return 'Quinta-Feira'
        case 5:
          return 'Sexta-Feira'
        case 6:
          return 'Sábado'
        default:
          throw 'Unexpected value'
      }
    },
    paddedMinutes(): string {
      return (this.minutes < 10 ? '0' : '') + this.minutes
    }
  },
  methods: {
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
