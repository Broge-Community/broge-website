<!-- src/components/BuyComponent.vue -->

<script setup lang="ts">
import { ref } from 'vue';
import SushiSwap from './icons/IconSushiSwap.vue';
import Uniswap from './icons/IconUniswap.vue';
import Aerodrome from './icons/IconAerodrome.vue';

const contractAddress = ref('0xe8e55a847bb446d967ef92f4580162fb8f2d3f38');
const isHovered = ref(false);
const isCopied = ref(false);

const copyContractAddress = () => {
  navigator.clipboard
    .writeText(contractAddress.value)
    .then(() => {
      console.log('Contract address copied to clipboard');
      isCopied.value = true;
      setTimeout(() => {
        isCopied.value = false;
      }, 2000);
    })
    .catch((error) => {
      console.error('Failed to copy contract address: ', error);
    });
};
</script>

<template>
  <div class="section box">
    <h1 class="title">How to buy Broge</h1>
    <h2 class="subtitle">The many ways to get your Broge.</h2>
    <p>
      You can buy Broge from the top three Decentralized Exchanges on
      <a href="https://base.org" target="_blank">Base</a>!
    </p>
    <div class="level mt-4" style="border-top: 1px #3155f4 solid">
      <div class="level-item has-text-centered mt-4">
        <div>
          <p class="title">
            <a
              href="https://www.sushi.com/swap?chainId=8453&token0=NATIVE&token1=0xe8E55A847Bb446d967ef92F4580162fb8f2d3F38"
              target="_blank"
              ><SushiSwap /> SushiSwap</a
            >
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered mt-4">
        <div>
          <p class="title">
            <a
              href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0xe8e55a847bb446d967ef92f4580162fb8f2d3f38"
              target="_blank"
              ><Uniswap /> Uniswap
            </a>
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered mt-4">
        <div>
          <p class="title">
            <a
              href="https://aerodrome.finance/swap?from=eth&to=0xe8e55a847bb446d967ef92f4580162fb8f2d3f38"
              target="_blank"
              ><Aerodrome /> Aerodrome</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="level mt-4" style="border-top: 1px #3155f4 solid">
      <div class="level-item has-text-centered mt-5">
        <div>
          <p class="subtitle">
            Contract Address:
            <a :href="'https://basescan.org/token/' + contractAddress" target="_blank">
              {{ contractAddress }}
            </a>
            <a
              href="#"
              @click.prevent="copyContractAddress"
              @mouseover="isHovered = true"
              @mouseout="isHovered = false"
              class="copy-icon"
              :class="{ inverted: isHovered || isCopied }"
            >
              <i class="far fa-copy ml-2"></i>
              <span v-if="isCopied" class="tooltip">Address copied!</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.address-link {
  text-decoration: none;
  color: inherit;
}

.copy-icon {
  position: relative;
  display: inline-block;
  transition: color 0.3s;
}

.copy-icon:hover {
  color: #3155f4;
}

.copy-icon.inverted {
  color: #3155f4;
}

.tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #3155f4;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
}

.copy-icon.inverted .tooltip {
  opacity: 1;
}
</style>
