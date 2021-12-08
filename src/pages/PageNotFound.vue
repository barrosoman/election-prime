<template>
  <div class="error-content">
    <h3>Desculpe, página não encontrada!</h3>
    <span>Volte para o início clicando no botão abaixo!</span>
    <Button content="Início" v-bind:routing="true" routingTo="/home" />
    <div class="error-img">
      <img src="@/assets/page_not_found.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    Button
  }
})
</script>

<style scoped>
.error-content {
  font-family: 'IBM Plex Sans', sans-serif;
  width: 600px;
  height: 600px;
  margin: 7.5rem auto;
  display: flex;
  flex-direction: column;
  color: #495057;
}

.error-code {
  font-size: calc(0.525rem + 5.7vw);
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
}

.error-content h3 {
  font-size: 1.3125rem;
  font-weight: 600;
  text-align: center;
}

.error-content span {
  margin-top: 0.25rem;
  opacity: 0.8;
  text-align: center;
}

.error-img img {
  position: relative;
  margin-top: -0.25rem;
  opacity: 0.5;
  transform: rotate(-2.75deg);
  z-index: -1;
}

/* <M */
@media (max-width: 768px) {
  .error-img img {
    width: 540px;
  }
}
</style>
