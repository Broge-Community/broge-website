import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { Token } from '../SwapComponent/types';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    tokens: {
      type: Array as PropType<Token[]>,
      required: true
    },
    selectedToken: {
      type: String,
      default: null
    },
    searchQuery: {
      type: String,
      default: ''
    },
    isDropdownActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select-token', 'toggle-dropdown', 'update:search-query'],
  setup(props) {
    function getTokenLogo(tokenAddress: string): string {
      const token = props.tokens.find((token) => token.address === tokenAddress);
      return token ? token.logoURI : '';
    }

    function getTokenSymbol(tokenAddress: string): string {
      const token = props.tokens.find((token) => token.address === tokenAddress);
      return token ? token.symbol : '';
    }

    return {
      getTokenLogo,
      getTokenSymbol
    };
  }
});
