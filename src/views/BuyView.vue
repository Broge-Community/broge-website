<script setup lang="ts">
import BuyComponent from '../components/BuyComponent.vue';
</script>

<template>
  <div class="container is-centered">
    <div class="columns is-flex-direction-row-reverse is-justify-content-center">
      <div class="column has-text-centered is-flex is-align-items-center is-justify-content-center">
        <img
          src="@/assets/images/broge/broge-logo-left.png"
          style="height: 400px; image-orientation: flip-x; border-radius: 9999999999px"
          alt="Broge Frog!"
        />
      </div>
      <div class="column is-flex is-align-items-center is-justify-content-center">
        <BuyComponent />
      </div>
    </div>
  </div>
</template>
