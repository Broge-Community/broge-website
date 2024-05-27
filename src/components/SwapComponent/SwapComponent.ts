import { defineComponent, ref, computed, onMounted } from 'vue';
import axios from 'axios';
import TokenDropdown from '../TokenDropdown/TokenDropdown.vue';
import type { Token } from './types';

export default defineComponent({
  components: {
    TokenDropdown
  },
  setup() {
    const networks = ref<{ chainId: number; name: string; icon: string }[]>([]);
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
      return tokens.value
        .filter(
          (token) =>
            token.symbol &&
            token.symbol.toLowerCase().includes(searchFrom.value.toLowerCase()) &&
            token.chainId === selectedChainId.value
        )
        .sort((a, b) => a.symbol.localeCompare(b.symbol));
    });

    const filteredToTokens = computed(() => {
      return tokens.value
        .filter(
          (token) =>
            token.symbol &&
            token.symbol.toLowerCase().includes(searchTo.value.toLowerCase()) &&
            token.chainId === selectedChainId.value &&
            token.address !== selectedFromToken.value
        )
        .sort((a, b) => a.symbol.localeCompare(b.symbol));
    });

    const isSwapValid = computed(() => {
      return (
        selectedFromToken.value &&
        selectedToToken.value &&
        selectedFromToken.value !== selectedToToken.value
      );
    });

    async function fetchTokens() {
      try {
        const response = await axios.get('https://tokens.coingecko.com/uniswap/all.json');
        const allTokens: Token[] = response.data.tokens;
        tokens.value = allTokens.filter((token) => token.chainId === selectedChainId.value);

        const chainIds = [...new Set(allTokens.map((token) => token.chainId))];
        networks.value = chainIds
          .map((chainId) => ({
            chainId,
            name: getNetworkName(chainId),
            icon: getNetworkIcon(chainId)
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
        console.error('Failed to fetch tokens:', error);
      }
    }

    function getNetworkName(chainId: number): string {
      switch (chainId) {
        case 1:
          return 'Ethereum';
        case 137:
          return 'Polygon';
        case 56:
          return 'Binance Smart Chain';
        case 8453:
          return 'Base Chain';
        default:
          return `Chain ${chainId}`;
      }
    }

    function getNetworkIcon(chainId: number): string {
      switch (chainId) {
        case 1:
          return 'path/to/ethereum-icon.png';
        case 137:
          return 'path/to/polygon-icon.png';
        case 56:
          return 'path/to/bsc-icon.png';
        case 8453:
          return 'path/to/base-chain-icon.png';
        default:
          return '';
      }
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

    onMounted(fetchTokens);

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
