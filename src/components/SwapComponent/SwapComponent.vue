<template>
  <div class="section box">
    <h1 class="title is-4">Broge Swap!</h1>
    <h2 class="subtitle is-6">You can go with this, or you can go with that.</h2>
    <div class="box mt-4" style="max-width: 50%; margin: auto">
      <div class="field">
        <w3m-button />
        <label class="label">Network</label>
        <div class="control">
          <div class="select is-primary">
            <select v-model="selectedChainId" @change="fetchTokens">
              <option value="">Select Network</option>
              <option v-for="network in networks" :key="network.chainId" :value="network.chainId">
                <img :src="network.icon" alt="Network Icon" class="network-icon" />
                {{ network.name }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <TokenDropdown
        label="From"
        :tokens="filteredTokens"
        :selected-token="selectedFromToken"
        :search-query="searchFrom"
        :is-dropdown-active="isFromDropdownActive"
        @select-token="selectFromToken"
        @toggle-dropdown="toggleFromDropdown"
      />

      <TokenDropdown
        label="To"
        :tokens="filteredToTokens"
        :selected-token="selectedToToken"
        :search-query="searchTo"
        :is-dropdown-active="isToDropdownActive"
        @select-token="selectToToken"
        @toggle-dropdown="toggleToDropdown"
      />

      <div class="field mt-3">
        <div class="control">
          <button class="button is-primary is-fullwidth" @click="swap" :disabled="!isSwapValid">
            Swap
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SwapComponent.ts"></script>

<style lang="scss" src="./scss/SwapComponent.scss"></style>
