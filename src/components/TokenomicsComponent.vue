<script setup lang="ts">
import { ref } from 'vue';
import CountAnimation from './CountAnimation.vue';
import TextAnimation from './TextAnimation.vue';

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

I apologize for the confusion. Let's update the TokenomicsComponent.vue file to use the is-size-1
and has-text-warning classes on the Font Awesome icon and adjust the positioning to avoid the
overlap. Here's the updated TokenomicsComponent.vue file:

<template>
  <div class="section box">
    <h1 class="title">Tokenomics</h1>
    <h2 class="subtitle">The details</h2>
    <div class="level mb-5" style="border-top: 1px solid #3155f4">
      <div class="level-item has-text-centered">
        <div class="icon-wrapper">
          <i class="fas fa-coins is-size-1 has-text-warning"></i>
          <div class="title">
            <CountAnimation :targetValue="690420" :duration="1000" suffix=" T" />
          </div>
          <div class="subtitle">Initial Supply</div>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="icon-wrapper">
          <i class="fas fa-coins is-size-1 has-text-warning"></i>
          <div class="title">
            <CountAnimation :targetValue="688420" :duration="1000" suffix=" T" />
          </div>
          <div class="subtitle">Circulating Supply</div>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="icon-wrapper">
          <i class="fas fa-coins is-size-1 has-text-warning"></i>
          <div class="title">
            <div class="title">
              <CountAnimation :startValue="100" :targetValue="0" :duration="1000" suffix="%" />
            </div>
            <div class="subtitle">Tax</div>
          </div>
        </div>
      </div>
    </div>
    <div class="level" style="border-top: 1px solid #3155f4">
      <div class="mt-5 level-item has-text-centered title">
        Owner:<span style="text-indent: 0.5ch"
          ><TextAnimation target-text="You" :duration="3000" suffix="!"
        /></span>
      </div>
      <div class="level-item">
        <div class="mt-5 has-text-centered title">
          Contract Address<br /><a
            href="https://basescan.org/token/0xe8e55a847bb446d967ef92f4580162fb8f2d3f38"
            target="_blank"
            >0xe8e55a847bb446d967ef92f4580162fb8f2d3f38</a
          >
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
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.icon-wrapper {
  position: relative;
  padding-top: 30px;
}

.icon-wrapper i {
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
}

.icon-wrapper .title {
  margin-top: 40px;
}

@media screen and (max-width: 768px) {
  .icon-wrapper {
    padding-top: 20px;
  }

  .icon-wrapper .title {
    margin-top: 40px;
  }
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
