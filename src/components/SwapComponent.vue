<!-- src/components/SushiSwapComponent.vue -->

<script setup lang="ts">
import SushiSwap from './icons/IconSushiSwap.vue';
import Uniswap from './icons/IconUniswap.vue';
import Aerodrome from './icons/IconAerodrome.vue';
</script>
<template>
  <div class="section">
    <h1 class="title">How to buy Broge</h1>
    <h2 class="subtitle">The many ways to get your Broge.</h2>
    <p class="mt-2">
      You can buy Broge from the top three Decentralized Exchanges on
      <a href="https://base.org" target="_blank">Base</a>!
    </p>
    <nav class="level mt-5" style="border-top: 1px #3155f4 solid">
      <div class="level-item has-text-centered">
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
      <div class="level-item has-text-centered">
        <div>
          <p class="title">
            <a
              href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0xe8e55a847bb446d967ef92f4580162fb8f2d3f38"
              target="_blank"
              ><Uniswap /> Uniswap</a
            >
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
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
    </nav>
  </div>
</template>
