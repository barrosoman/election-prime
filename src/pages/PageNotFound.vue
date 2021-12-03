<template>
  <div class="content">
    <div class="error-code">
      4
      <span>0</span>
      4
    </div>
    <div class="error-text">Desculpe, página não encontrada!</div>
    <div class="error-button">
      <router-link to="/dashboard" class="error-button-link"
        >Início</router-link
      >
    </div>
    <div class="error-img">
      <img src="@/assets/page_not_found.png" alt="" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.content {
  /* Test Only */
  /* background: red; */
  font-family: 'IBM Plex Sans', sans-serif;
  width: 600px;
  height: 600px;
  margin: 7.5rem auto;
  display: flex;
  flex-direction: column;
  color: #495057;
}

.error-code {
  /* Test Only */
  /* background: blue; */
  font-size: calc(0.525rem + 5.7vw);
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
}

.error-code span {
  color: rgba(127, 127, 220, 1);
  margin: 0 calc(-1.75rem + 0.75vw);
}

.error-text {
  /* Test Only */
  /* background: lightblue; */
  font-size: 1.3125rem;
  font-weight: 600;
  text-align: center;
}

.error-button {
  padding-top: 1.75rem;
  display: flex;
  justify-content: center;
}

.error-button-link {
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

.error-img {
  position: relative;
}

.error-img img {
  width: 740px;
  height: 400px;
  position: absolute;
  left: -9.5%;
  margin-top: -0.25rem;
}

/* <M */
@media (max-width: 768px) {
  .error-img img {
    width: 540px;
    height: 291px;
    left: 5%;
  }
}

/* <XL */
@media (max-width: 992px) {
  .error-code span {
    margin: 0 calc(-0.75rem + 0.75vw);
  }
}
</style>
