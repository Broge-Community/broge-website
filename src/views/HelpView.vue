<script setup lang="ts">
import HelpComponent from '../components/HelpComponent.vue';
</script>

<template>
  <div class="container is-centered">
    <div class="columns is-flex-direction-row is-justify-content-center">
      <div class="column has-text-centered is-flex is-align-items-center is-justify-content-center">
        <img
          src="@/assets/images/broge/broge.png"
          style="height: 500px; image-orientation: flip-x; border-radius: 25px"
          alt="Broge Frog!"
        />
      </div>
      <div class="column">
        <HelpComponent />
      </div>
    </div>
  </div>
</template>
