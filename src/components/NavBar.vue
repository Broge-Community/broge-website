<!-- src/components/NavbarComponent.vue -->
<script setup lang="ts">
// left empty intentionally
</script>

<template>
  <b-navbar class="is-fixed-top">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }" class="navbar-brand"></b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
        class="is-size-3 underlined has-text-weight-bold"
        ><span id="LongPageTitle" class="title-text"> Broge: The Chillest Memecoin </span>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/about' }"
        class="is-size-5 has-text-weight-bold"
      >
        About
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/tokenomics' }"
        class="is-size-5 has-text-weight-bold"
      >
        Tokenomics
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/buy' }"
        class="is-size-5 has-text-weight-bold"
      >
        How to buy
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/help' }"
        class="is-size-5 has-text-weight-bold"
        >How to help
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/socials' }"
        class="is-size-5 has-text-weight-bold"
      >
        Socials
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/swap' }"
        class="is-size-5 has-text-weight-bold"
      >
        Swap
      </b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <button class="button is-primary" @click="$router.push('/buy')">Buy $Broge</button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<style>
.localHide {
  display: none;
}
</style>
