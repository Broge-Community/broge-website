<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import BrogeFooter from './components/BrogeFooter.vue';
import './assets/scss/style.scss';
</script>

<template>
  <div class="hero is-fullheight">
    <header class="header">
      <div class="container">
        <NavBar />
      </div>
    </header>
    <main class="main">
      <div class="container">
        <RouterView />
      </div>
    </main>
    <footer class="footer is-fixed-bottom">
      <div class="container">
        <BrogeFooter />
      </div>
    </footer>
  </div>
</template>
