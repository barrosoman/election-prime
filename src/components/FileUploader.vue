<template>
  <label for="upload">
    <div v-if="!fileSent" class="container">
      <div class="message" tabindex="0">
        <input
          id="upload"
          type="file"
          autocomplete="off"
          tabindex="-1"
          style="display: none"
          @change="previewFile"
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
        <h4>Clique para carregar seus arquivos!</h4>
      </div>
    </div>
  </label>
  <div
    v-if="currentFile !== undefined"
    class="preview-container"
    :class="{ sent: fileSent, 'error-sent': errorOnSent }"
  >
    <div class="file-preview">
      <div class="file-info">
        <span class="file-name">{{ currentFile.name }}</span>
        <span class="file-size">{{ currentFile.size }} Bytes</span>
      </div>
      <div v-if="fileSent && !errorOnSent" class="file-info-sent">
        <span>Seu arquivo foi enviado com sucesso!</span>
        <span>Estamos o analisando agora mesmo.</span>
      </div>
      <div v-else-if="errorOnSent" class="file-info-sent">
        <span>Houve um erro ao enviar seu arquivo!</span>
        <span>{{ errorMessage }} </span>
      </div>
    </div>
  </div>
  <Button v-if="!fileSent" content="Enviar" @click="sendFile" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Parser } from '@/util/dataParser'
import { getFileHistory } from '@/util/storage'
import { FILE_HISTORY_KEY, DATA_KEY } from '@/util/constants'

import Button from '@/components/Button.vue'

export default defineComponent({
  data() {
    return {
      currentFile: undefined as File | undefined,
      fileSent: false,
      errorOnSent: false,
      errorMessage: ''
    }
  },
  components: {
    Button
  },
  emits: ['sent'],
  methods: {
    previewFile(event: any) {
      this.currentFile = event.target.files[0]
    },
    async sendFile() {
      if (this.currentFile === undefined) {
        console.warn('Tried to send an undefined file')
        return
      }

      const history = getFileHistory()
      const newHistory = [
        ...history,
        {
          name: this.currentFile.name,
          size: this.currentFile.size,
          date: Date.now()
        }
      ]

      try {
        const parser: Parser = new Parser(this.currentFile)
        const dataInfo = await parser.parse()

        localStorage.setItem(FILE_HISTORY_KEY, JSON.stringify(newHistory))
        localStorage.setItem(DATA_KEY, JSON.stringify(dataInfo))

        this.fileSent = true
        this.$emit('sent')
      } catch (exception) {
        console.error(exception)

        this.fileSent = true
        this.errorOnSent = true
        this.errorMessage = exception as string
      }

      // Reset the values from data
      window.setTimeout(() => {
        this.currentFile = undefined
        this.fileSent = false
        this.errorOnSent = false
      }, 8000)
    }
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

.file-preview {
  margin-top: 1.25rem !important;
  border: 1px solid #e9e9ef !important;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  color: #495057;
  font-size: 14px;
}

.file-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.file-size {
  font-weight: 700;
}

.preview-container {
  position: relative;
}

@keyframes halfFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.sent::after {
  position: absolute;
  top: 0;
  background-color: #77d970;
  content: ' ';
  width: 100%;
  height: 100%;
  opacity: 0.5;
  animation: halfFadeIn 1.5s;
}

.error-sent::after {
  background-color: #dd4a48 !important;
}

.file-info-sent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2.25rem;
  animation: fadeIn 1.5s;
}
</style>
