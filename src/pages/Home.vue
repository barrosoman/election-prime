<template>
  <Page name="Início">
    <div class="content">
      <svg
        class="wave"
        width="1920"
        height="644"
        viewBox="0 0 1920 644"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1920 0C1051.1 21.27 659.75 631.633 1.70447 0C0.0086013 120.967 -1.08056 178.394 1.70447 644H1920V0Z"
          fill="#5156BE"
          fill-opacity="0.05"
        />
      </svg>
      <h1>
        Maximize sua chance de <span style="color: #519259">vitória</span>.
      </h1>
      <h4>Conosco você saberá onde investir em sua corrida eleitoral.</h4>
      <h4>Faremos com que você seja o primeiro.</h4>
      <Button
        class="go-to-data-button"
        content="Ir para Dados"
        :routing="true"
        routingTo="/data"
      />
    </div>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Button from '@/components/Button.vue'
import Page from '@/components/Page.vue'

export default defineComponent({
  components: {
    Page,
    Button
  }
})
</script>

<style scoped>
.content {
  margin-top: 8.125rem;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #303030;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content h1 {
  font-size: 5.2125rem;
  text-align: center;
  margin-bottom: 0.875rem;
}

.content h4 {
  font-size: 1.2725rem;
  text-align: center;
  font-weight: 500;
  opacity: 0.5;
}

.wave {
  position: absolute;
  width: 100%;
  top: 128px;
  z-index: -1;
}

.go-to-data-button {
  margin-top: 2.8125rem;
}
</style>
