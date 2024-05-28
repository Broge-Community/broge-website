<!-- src/components/HelpComponent.vue -->

<script setup lang="ts">
import { ref } from 'vue';
import SushiSwap from './icons/IconSushiSwap.vue';
import Uniswap from './icons/IconUniswap.vue';
import Aerodrome from './icons/IconAerodrome.vue';

const airdropAddress = ref('0x606185d3D418De51629eF320d8Ab6f9bE3B9C7Ec');
const isHovered = ref(false);
const isCopied = ref(false);

const copyAirdropAddress = () => {
  navigator.clipboard
    .writeText(airdropAddress.value)
    .then(() => {
      console.log('Airdrop address copied to clipboard');
      isCopied.value = true;
      setTimeout(() => {
        isCopied.value = false;
      }, 2000);
    })
    .catch((error) => {
      console.error('Failed to copy airdrop address: ', error);
    });
};
</script>

<template>
  <div class="section box mb-5">
    <h1 class="title">How to help Broge</h1>
    <h2 class="subtitle mt-2">What can you do to help Broge?</h2>
    <div class="content">
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
            <li class="pl-1">
              Use the tags <u><strong>$Broge</strong></u> and <u><strong>#Base!</strong></u
              >!
            </li>
          </ul>
        </li>
        <li>
          <span class="has-text-warning"><i class="fas fa-coins"></i></span> You could also donate
          to our airdrop fund!
          <ul>
            <li class="pl-1">
              <a
                href="#"
                @click.prevent="copyAirdropAddress"
                @mouseover="isHovered = true"
                @mouseout="isHovered = false"
                class="copy-icon"
                :class="{ inverted: isHovered || isCopied }"
              >
                {{ airdropAddress }}
                <i class="far fa-copy ml-2"></i>
                <span v-if="isCopied" class="tooltip">Address copied!</span>
              </a>
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
            liquidity on some of the top Decentralized Exchanges (Dex) on Base!
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

<style scoped>
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
