<template>
  <div class="field mt-3">
    <label class="label">{{ label }}</label>
    <div class="control">
      <div class="dropdown" :class="{ 'is-active': isDropdownActive }">
        <div class="dropdown-trigger">
          <button
            class="button is-primary"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            @click="$emit('toggle-dropdown')"
          >
            <span v-if="selectedToken">
              <img :src="getTokenLogo(selectedToken)" alt="Token Logo" class="token-logo" />
              {{ getTokenSymbol(selectedToken) }}
            </span>
            <span v-else>Select Token</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item search-box">
              <input
                class="input"
                type="text"
                placeholder="Search token..."
                :value="searchQuery"
                @input="$emit('update:search-query', $event.target.value)"
              />
            </div>
            <div class="dropdown-item-list">
              <a
                v-for="token in tokens"
                :key="token.address"
                class="dropdown-item"
                @click="$emit('select-token', token)"
              >
                <img :src="token.logoURI" alt="Token Logo" class="token-logo" />
                {{ token.symbol }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./TokenDropdown.ts"></script>
