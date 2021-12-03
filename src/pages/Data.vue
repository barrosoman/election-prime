<template>
  <Header name="Dados" />
  <div class="data-page">
    <div class="card">
      <div class="card-body">
        <div class="card-title">Envie seus dados</div>
        <div class="card-subtitle">
          Abaixo você pode inserir os dados que serão analisados e a formatação
          dos dados de entrada pode ser visualizado logo abaixo.
        </div>
        <label for="upload">
          <div class="dropzone">
            <div class="dz-message" tabindex="0">
              <input
                id="upload"
                type="file"
                autocomplete="off"
                tabindex="-1"
                style="display: none"
              />
              <div class="dz-icon-container">
                <svg
                  class="dz-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style="fill: rgba(116, 120, 141, 1); transform: ; msfilter: "
                >
                  <path
                    d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888zM13 14v3h-2v-3H8l4-5 4 5h-3z"
                  ></path>
                </svg>
              </div>
              <h4>Solte seus arquivos aqui ou clique para carregar</h4>
            </div>
          </div>
        </label>
        <Button content="Enviar" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    Header,
    Button
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
  padding: 0 7.5%;
}

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

.dropzone {
  min-height: 230px;
  border: 2px dashed #ced4da;
  background: #fff;
  border-radius: 6px;
}

.dz-message {
  margin-top: 0.5rem !important;
  text-align: center;
  padding: 30px;
}

.dropzone .dz-message {
  font-size: 24px;
  width: 100%;
}

.dz-icon {
  color: #74788d !important;
  width: 56px;
  height: 56px;
}

.dropzone h4 {
  color: #495057;
  font-size: 1.3125rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
}
</style>
