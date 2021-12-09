<template>
  <div class="button">
    <router-link
      v-if="routing"
      :to="{
        path: routingTo
      }"
      class="button-link"
      >{{ content }}</router-link
    >
    <a v-else class="button-link" @click="$emit('clicked')" @:click.prevent
      >{{ content }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true
    },
    routing: {
      type: Boolean,
      required: false
    },
    routingTo: {
      type: String,
      required: false
    }
  },
  emits: ['clicked']
})
</script>

<style scoped>
.button {
  padding-top: 1.75rem;
  display: flex;
  justify-content: center;
}

.button-link {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 0.47rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 6px 0 rgba(127, 127, 220, 1);
  color: #fff;
  background-color: #7a7fdc;
  border-color: #7a7fdc;
  text-decoration: none;
}
</style>
