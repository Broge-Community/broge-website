<!-- src/components/NavBar.vue -->

<script setup lang="ts">
// left empty intentionally
</script>

<template>
  <b-navbar class="is-fixed-top">
    <template #brand>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
        class="navbar-brand ml-5"
      ></b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
        class="is-hidden-desktop is-size-3 underlined has-text-weight-bold"
      >
        <span
          class="title-text"
          style="z-index: 10; right: 20px; position: fixed; text-decoration: underline"
        >
          Broge
        </span>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
        class="is-hidden-touch is-size-3 underlined has-text-weight-bold"
      >
        <span class="title-text" style="text-decoration: underline">
          Broge: The Chillest Memecoin
        </span>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="router-link" :to="{ path: '/wp' }" class="is-size-5 has-text-weight-bold">
        White Paper
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
      >
        How to help
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/credits' }"
        class="is-size-5 has-text-weight-bold"
      >
        Credits
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/swap' }"
        class="is-size-5 has-text-weight-bold"
      >
        Swap
      </b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons mr-5">
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
