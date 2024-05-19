<script setup lang="ts">
import BuyComponent from '../components/BuyComponent.vue';
</script>

<template>
  <div class="container is-centered">
    <div class="columns is-flex-direction-row-reverse is-justify-content-center">
      <div class="column">
        <img
          src="@/assets/broge-logo-left.png"
          style="height: 300px; image-orientation: flip-x; border-radius: 9999999999px"
          alt="Broge Frog!"
        />
      </div>
      <div class="column">
        <BuyComponent />
      </div>
    </div>
  </div>
</template>
