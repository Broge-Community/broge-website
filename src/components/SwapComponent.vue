<template>
  <div class="section box">
    <h1 class="title is-4">Broge Swap!</h1>
    <h2 class="subtitle is-6">You can go with this, or you can go with that.</h2>
    <div class="box mt-4" style="max-width: 50%; margin: auto">
      <div class="field">
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
                  <img :src="getTokenLogo(selectedFromToken)" alt="Token Logo" class="token-logo" />
                  {{ getTokenSymbol(selectedFromToken) }}
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
                  :key="token.address"
                  class="dropdown-item"
                  @click="selectFromToken(token)"
                >
                  <img :src="token.logoURI" alt="Token Logo" class="token-logo" />
                  {{ token.symbol }}
                </a>
              </div>
            </div>
          </div>
          <div style="max-width: 50%">
            <input
              class="input mt-3 noscroll"
              type="tel"
              placeholder="Amount"
              v-model="fromAmount"
            />
          </div>
        </div>
      </div>

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
                  <img :src="getTokenLogo(selectedToToken)" alt="Token Logo" class="token-logo" />
                  {{ getTokenSymbol(selectedToToken) }}
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
                  :key="token.address"
                  class="dropdown-item"
                  @click="selectToToken(token)"
                >
                  <img :src="token.logoURI" alt="Token Logo" class="token-logo" />
                  {{ token.symbol }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import axios from 'axios';

interface Network {
  chainId: number;
  name: string;
  icon: string;
}

interface Token {
  address: string;
  symbol: string;
  logoURI: string;
}

export default defineComponent({
  setup() {
    const networks = ref<Network[]>([
      { chainId: 1, name: 'Ethereum', icon: 'path/to/ethereum-icon.png' },
      { chainId: 137, name: 'Polygon', icon: 'path/to/polygon-icon.png' },
      { chainId: 56, name: 'Binance Smart Chain', icon: 'path/to/bsc-icon.png' },
      { chainId: 8453, name: 'Base Chain', icon: 'path/to/base-chain-icon.png' }
    ]);
    const selectedChainId = ref<number | null>(null);
    const tokens = ref<Token[]>([]);
    const selectedFromToken = ref<string | null>(null);
    const selectedToToken = ref<string | null>(null);
    const fromAmount = ref<string>('');
    const searchFrom = ref<string>('');
    const searchTo = ref<string>('');
    const isFromDropdownActive = ref<boolean>(false);
    const isToDropdownActive = ref<boolean>(false);

    const filteredTokens = computed(() => {
      return tokens.value.filter((token) =>
        token.symbol.toLowerCase().includes(searchFrom.value.toLowerCase())
      );
    });

    const filteredToTokens = computed(() => {
      return tokens.value.filter(
        (token) =>
          token.symbol.toLowerCase().includes(searchTo.value.toLowerCase()) &&
          token.address !== selectedFromToken.value
      );
    });

    const isSwapValid = computed(() => {
      return (
        selectedFromToken.value &&
        selectedToToken.value &&
        selectedFromToken.value !== selectedToToken.value
      );
    });

    async function fetchTokens() {
      if (!selectedChainId.value) return;

      try {
        const response = await axios.get(
          `https://tokens.coingecko.com/${getNetworkName(selectedChainId.value).toLowerCase()}/all.json`
        );
        tokens.value = response.data.tokens;
      } catch (error) {
        console.error('Failed to fetch tokens:', error);
      }
    }

    function getNetworkName(chainId: number): string {
      const network = networks.value.find((network) => network.chainId === chainId);
      return network ? network.name : 'Unknown Network';
    }

    function getTokenLogo(tokenAddress: string): string {
      const token = tokens.value.find((token) => token.address === tokenAddress);
      return token ? token.logoURI : '';
    }

    function getTokenSymbol(tokenAddress: string): string {
      const token = tokens.value.find((token) => token.address === tokenAddress);
      return token ? token.symbol : '';
    }

    function selectFromToken(token: Token) {
      selectedFromToken.value = token.address;
      isFromDropdownActive.value = false;
      if (selectedFromToken.value === selectedToToken.value) {
        selectedToToken.value = null;
      }
    }

    function selectToToken(token: Token) {
      selectedToToken.value = token.address;
      isToDropdownActive.value = false;
    }

    function toggleFromDropdown() {
      isFromDropdownActive.value = !isFromDropdownActive.value;
    }

    function toggleToDropdown() {
      isToDropdownActive.value = !isToDropdownActive.value;
    }

    async function swap() {
      if (!isSwapValid.value) return;

      try {
        const response = await axios.post('/api/swap', {
          fromToken: selectedFromToken.value,
          toToken: selectedToToken.value,
          amount: fromAmount.value,
          chainId: selectedChainId.value
          // Include other necessary data for the swap
        });
        console.log('Swap response:', response.data);
        // Handle the response and update the UI accordingly
      } catch (error) {
        console.error('Failed to initiate swap:', error);
      }
    }

    return {
      networks,
      selectedChainId,
      tokens,
      selectedFromToken,
      selectedToToken,
      fromAmount,
      searchFrom,
      searchTo,
      isFromDropdownActive,
      isToDropdownActive,
      filteredTokens,
      filteredToTokens,
      isSwapValid,
      fetchTokens,
      getNetworkName,
      getTokenLogo,
      getTokenSymbol,
      selectFromToken,
      selectToToken,
      toggleFromDropdown,
      toggleToDropdown,
      swap
    };
  }
});
</script>

<style scoped>
.network-icon,
.token-logo {
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
