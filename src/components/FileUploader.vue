<template>
  <label for="upload">
    <div class="container">
      <div class="message" tabindex="0">
        <input
          id="upload"
          type="file"
          autocomplete="off"
          tabindex="-1"
          style="display: none"
        />
        <div class="icon-container">
          <svg
            class="icon"
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    Button
  }
})
</script>

<style scoped>
.container {
  min-height: 230px;
  border: 2px dashed #ced4da;
  background: #fff;
  border-radius: 6px;
}

.message {
  margin-top: 0.5rem !important;
  text-align: center;
  padding: 30px;
}

.container .message {
  font-size: 24px;
  width: 100%;
}

.icon {
  color: #74788d !important;
  width: 56px;
  height: 56px;
}

.container h4 {
  color: #495057;
  font-size: 1.3125rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
}
</style>
