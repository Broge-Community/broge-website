<template>
  <div class="section box">
    <h1 class="title is-4">Broge Swap!</h1>
    <h2 class="subtitle is-6">You can go with this, or you can go with that.</h2>
    <div class="box mt-4" style="max-width: 50%; margin: auto">
      <w3m-button />
      <!-- Network Selection -->
      <div class="field">
        <label class="label">Network</label>
        <div class="control">
          <div class="select is-primary">
            <select v-model="selectedChainId">
              <option value="">Select Network</option>
              <option v-for="network in networks" :key="network.chainId" :value="network.chainId">
                <img :src="network.icon" alt="Network Icon" class="network-icon" />
                {{ network.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <!-- From Token Selection -->
      <div class="field mt-3">
        <label class="label">From</label>
        <div class="control">
          <div class="dropdown" :class="{ 'is-active': isFromDropdownActive }">
            <div class="dropdown-trigger">
              <button
                class="button is-primary"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                @click="toggleFromDropdown"
              >
                <span v-if="selectedFromToken">
                  {{ selectedFromToken.symbol }}
                </span>
                <span v-else>Select Token</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <input
                    class="input"
                    type="text"
                    placeholder="Search token..."
                    v-model="searchFrom"
                  />
                </div>
                <a
                  v-for="token in filteredTokens"
                  :key="token.id"
                  class="dropdown-item"
                  @click="selectFromToken(token)"
                >
                  {{ token.symbol }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- To Token Selection -->
      <div class="field mt-3">
        <label class="label">To</label>
        <div class="control">
          <div class="dropdown" :class="{ 'is-active': isToDropdownActive }">
            <div class="dropdown-trigger">
              <button
                class="button is-primary"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                @click="toggleToDropdown"
              >
                <span v-if="selectedToToken">
                  {{ selectedToToken.symbol }}
                </span>
                <span v-else>Select Token</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <input
                    class="input"
                    type="text"
                    placeholder="Search token..."
                    v-model="searchTo"
                  />
                </div>
                <a
                  v-for="token in filteredToTokens"
                  :key="token.id"
                  class="dropdown-item"
                  @click="selectToToken(token)"
                >
                  {{ token.symbol }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

interface Network {
  chainId: number;
  name: string;
  icon: string;
}

interface Token {
  id: string;
  name: string;
  symbol: string;
}

const networks = ref<Network[]>([
  { chainId: 1, name: 'Ethereum', icon: 'path/to/ethereum-icon.png' },
  { chainId: 137, name: 'Polygon', icon: 'path/to/polygon-icon.png' },
  { chainId: 56, name: 'Binance Smart Chain', icon: 'path/to/bsc-icon.png' },
  { chainId: 8453, name: 'Base Chain', icon: 'path/to/base-chain-icon.png' }
]);
const selectedChainId = ref<number | null>(null);
const selectedFromToken = ref<Token | null>(null);
const selectedToToken = ref<Token | null>(null);
const searchFrom = ref<string>('');
const searchTo = ref<string>('');
const isFromDropdownActive = ref<boolean>(false);
const isToDropdownActive = ref<boolean>(false);

const GET_TOKENS = gql`
  query GetTokens($skip: Int!) {
    tokens(first: 1000, skip: $skip) {
      id
      name
      symbol
    }
  }
`;

const {
  result: tokensResult,
  loading: tokensLoading,
  error: tokensError
} = useQuery(GET_TOKENS, {
  skip: 0
});

const tokens = computed(() => tokensResult.value?.tokens ?? []);

const filteredTokens = computed(() => {
  return tokens.value.filter((token: Token) =>
    token.symbol.toLowerCase().includes(searchFrom.value.toLowerCase())
  );
});

const filteredToTokens = computed(() => {
  return tokens.value.filter(
    (token: Token) =>
      token.symbol.toLowerCase().includes(searchTo.value.toLowerCase()) &&
      token.id !== selectedFromToken.value?.id
  );
});

function selectFromToken(token: Token) {
  selectedFromToken.value = token;
  isFromDropdownActive.value = false;
  if (selectedFromToken.value === selectedToToken.value) {
    selectedToToken.value = null;
  }
}

function selectToToken(token: Token) {
  selectedToToken.value = token;
  isToDropdownActive.value = false;
}

function toggleFromDropdown() {
  isFromDropdownActive.value = !isFromDropdownActive.value;
}

function toggleToDropdown() {
  isToDropdownActive.value = !isToDropdownActive.value;
}
</script>

<style scoped>
.network-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  vertical-align: middle;
}

.dropdown-content {
  max-height: calc(25vh); /* Adjust the value as needed */
  overflow-y: auto;
}
</style>
