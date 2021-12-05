<template>
  <header>
    <div class="navbar-header">
      <div class="logo">Grupo RRJ</div>
      <Date class="time" />
    </div>
  </header>
  <div class="topnav">
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Painel de Controle</span>
          </router-link>
        </li>
        <li>
          <router-link to="/data">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              ></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            <span>Dados</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <div class="page-name-container">
    <span>{{ name.name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Date from './Date.vue'

export default defineComponent({
  props: {
    name: {
      type: Object
    }
  },
  components: {
    Date
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding: 0 7.5%;
  font-family: 'IBM Plex Sans', sans-serif;
  background: #fff;
  height: 71px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1002;
  border-bottom: 1px solid #e9e9ef;
}

.navbar-header {
  /* Test Only */
  /* background: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 70px;
  padding: 0 20px 0 0;
  color: #495057;
}

.logo {
  font-weight: 700;
  font-size: 18px;
  vertical-align: middle;
  margin-left: 5px;
}

.logo:hover {
  cursor: pointer;
}

.time {
  /* Test Only */
  /* background: lightblue; */
  align-self: center;
}

.time::v-deep span {
  display: block;
  text-align: center;
}

.topnav {
  font-family: 'IBM Plex Sans', sans-serif;
  color: #495057;
  background: #fbfaff;
  height: 55px;
  padding: 0 10px;
  margin-top: 70px;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid #e9e9ef;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 5.9%;
}

.navbar ul {
  margin: 0;
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  justify-content: left;
}

.navbar li {
  display: block;
}

.navbar ul li a {
  display: block;
  color: #545a6d;
  padding: 0.62rem 1.5rem;
  position: relative;
  font-size: 0.9rem;
  transition: all 0.4s;
  font-weight: 500;
}

.navbar ul li a:hover {
  color: #5156be;
  cursor: pointer;
}

.navbar ul li a svg {
  width: 16px;
  height: 16px;
  color: #545a6d;
  fill: rgba(84, 90, 109, 0.2);
  margin-right: 10px;
  margin-top: -3px;
}

.navbar ul li a:hover svg {
  color: #5156be;
  fill: rgba(81, 86, 190, 0.2);
}

a {
  color: #7a7fdc;
  text-decoration: none;
}

img,
svg {
  vertical-align: middle;
}

.active {
  color: #5156be !important;
}

.page-name-container {
  /* Test Only */
  /* background: blue; */

  position: absolute;
  margin-top: 125px;
  line-height: 70px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 18px;
  color: #495057;
  font-weight: 600;
  padding: 0 7.5%;
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
}
</style>
