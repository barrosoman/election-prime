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
          <router-link to="/home">
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
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Início</span>
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
        <li>
          <router-link to="/graph">
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
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
            <span>Infográficos</span>
          </router-link>
        </li>
        <li>
          <router-link to="/insights">
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
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            <span>Insights</span>
          </router-link>
        </li>
        <li>
          <router-link to="/datagen">
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
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            <span>Gerador de Dados</span>
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
