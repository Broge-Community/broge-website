<!-- src/components/SushiSwapComponent.vue -->

<script setup lang="ts">
import SushiSwap from './icons/IconSushiSwap.vue';
import Uniswap from './icons/IconUniswap.vue';
import Aerodrome from './icons/IconAerodrome.vue';
</script>
<template>
  <div class="section box">
    <h1 class="title">How to help Broge</h1>
    <h2 class="subtitle mt-2">What can you do to help Broge?</h2>
    <div clsas="content">
      <p class="mt-5 pt-5" style="border-top: solid 1px #3155f4">
        There are many ways you can help Broge!
      </p>

      <ul>
        <li>
          <span class="has-text-warning"><i class="fas fa-coins"></i></span> You can always
          <a href="/buy"> buy more $Broge!</a>
        </li>
        <li>
          <span class="has-text-warning"><i class="fas fa-coins"></i></span> You could shill on
          socials!
          <ul>
            <li class="pl-6">
              Use the tags <u><strong>$Broge</strong></u> and <u><strong>#Base!</strong></u
              >!
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="level mt-5 pt-5" style="border-top: 1px #3155f4 solid">
      <div class="has-text-left">
        <ul>
          <li>
            <span class="has-text-warning"><i class="fas fa-coins"></i></span> You can add to
            liquidity on some of the top Decenralized Exchanges (Dex) on Base!
          </li>
          <li class="pl-5">Doing so can earn you rewards thanks to fees!<br /></li>
        </ul>
      </div>
    </div>
    <div class="level mt-3">
      <div class="level-item has-text-centered">
        <div>
          <p class="title">
            <a
              href="https://app.uniswap.org/add/ETH/0xe8E55A847Bb446d967ef92F4580162fb8f2d3F38/10000"
              target="_blank"
              ><Uniswap /> Uniswap
            </a>
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="title">
            <a
              href="https://aerodrome.finance/pools?type=&token0=eth&token1=0xe8e55a847bb446d967ef92f4580162fb8f2d3f38"
              target="_blank"
              ><Aerodrome /> Aerodrome</a
            >
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="title">
            <a
              href="https://www.sushi.com/pool/add?chainId=8453&toCurrency=0xe8E55A847Bb446d967ef92F4580162fb8f2d3F38&fromCurrency=NATIVE"
              target="_blank"
              ><SushiSwap /> SushiSwap</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="level mt-5 pt-5 mb-0 pb-0" style="border-top: 1px #3155f4 solid">
      <div class="has-text-left">
        <ul>
          <li>
            <span class="has-text-success"><i class="fa-solid fa-circle-info"></i></span>&nbsp;If
            the above links do not work, sign into the appropriate exchange and set the
          </li>
          <li class="pl-5">network to Base, then try the link again.</li>
        </ul>
      </div>
    </div>
  </div>
</template>
