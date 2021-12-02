<template>
  <div class="sidebar">
    <div class="header">Grupo RRJ</div>
    <div class="menu">
      <ul>
        <li class="menu-title">Menu</li>
        <li>
          <a href="/dashboard">
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
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/data">
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
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  font-family: 'IBM Plex Sans', sans-serif;
  color: #495057;
  width: 250px;
  height: 100%;
  z-index: 1001;
  background: #fbfaff;
  bottom: 0;
  margin-top: 0;
  position: fixed;
  border-right: 1px solid #e9e9ef;
}

.header {
  /* Test Only */
  /* background: red; */
  height: 70px;
  font-weight: 700;
  font-size: 18px;
  vertical-align: middle;
  padding: 0 1.5rem;
  line-height: 70px;
}

.menu {
  /* Test Only */
  /* background: blue; */
  height: 100%;
  padding: 10px 0 30px;
}

.menu ul {
  margin: 0;
  list-style: none;
  padding-left: 0;
  display: block;
}

.menu li {
  display: block;
  width: 100%;
}

.menu-title {
  padding: 12px 20px !important;
  pointer-events: none;
  cursor: default;
  font-size: 12px;
  color: #545a6d;
  font-weight: 500;
}

.menu ul li a {
  display: block;
  color: #545a6d;
  padding: 0.62rem 1.5rem;
  position: relative;
  font-size: 0.9rem;
  transition: all 0.4s;
  font-weight: 500;
}

.menu ul li a:hover {
  color: #5156be;
}

.menu ul li a svg {
  width: 16px;
  height: 16px;
  color: #545a6d;
  fill: rgba(84, 90, 109, 0.2);
  margin-right: 10px;
  margin-top: -3px;
}

.menu ul li a:hover svg {
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
</style>
