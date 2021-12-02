<template>
  <Sidebar />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sidebar from './components/Sidebar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar
  }
})
</script>

<style>
/* Import Fonts */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
