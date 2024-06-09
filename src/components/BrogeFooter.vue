<!-- src/components/BrogeFooter.vue -->

<script setup lang="ts">
import { ref } from 'vue';

function swapTwitterIcon(setX: boolean) {
  const twitterIcon = document.getElementById('twitterIcon');
  if (twitterIcon) {
    if (setX) {
      twitterIcon.classList.remove('fa-twitter');
      twitterIcon.classList.add('fa-x-twitter');
    } else {
      twitterIcon.classList.remove('fa-x-twitter');
      twitterIcon.classList.add('fa-twitter');
    }
  }
}

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
  <div class="is-flex is-flex-direction-column">
    <div class="content has-text-centered">
      <strong>Broge</strong> was created by <strong>BrogeBoy</strong> and is maintained by the
      <strong>Broge Community</strong>.
      <br />
      <div class="mt-3 contract-address">
        Contract:
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
      </div>
      <div class="level has-text-centered">
        <div class="level-item is-size-3">
          <a href="https://t.me/BrogeOnBase" target="_blank">
            <span class="icon has-text-white mr-4">
              <i class="fa-brands fa-telegram"></i>
            </span>
          </a>
          <a href="https://twitter.com/Broge_On_Base" target="_blank">
            <span class="icon has-text-white mr-4">
              <i
                id="twitterIcon"
                @mouseover="swapTwitterIcon(true)"
                @mouseout="swapTwitterIcon(false)"
                class="fab fa-twitter"
              ></i>
            </span>
          </a>
          <a href="https://warpcast.com/~/channel/broge" target="_blank">
            <span class="icon has-text-white mr-3 pt-5" style="width: 32px; height: 32px">
              <img src="@/assets/farcaster-icon.svg" alt="Farcaster" />
            </span>
          </a>
          <a href="https://tiktok.com/@brogeonbase" target="_blank">
            <span class="icon has-text-white mr-4">
              <i class="fab fa-tiktok"></i>
            </span>
          </a>
          <a href="https://reddit.com/r/Broge" target="_blank">
            <span class="icon has-text-white mr-4">
              <i class="fab fa-reddit"></i>
            </span>
          </a>
          <a href="https://trello.com/b/U4H5u08c/broge-community-plan" target="_blank">
            <span class="icon has-text-white mr-4">
              <i class="fab fa-trello"></i>
            </span>
          </a>
          <a href="https://github.com/broge-community/" target="_blank">
            <span class="icon has-text-white mr-2">
              <i class="fab fa-github"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="level has-text-centered">
        <div class="level-item">
          <a href="https://www.coingecko.com/en/coins/broge" target="_blank" class="mr-5">
            <img src="@/assets/coingecko.svg" alt="CoinGecko Logo" style="max-height: 32px" />
          </a>
          <a
            href="https://dexscreener.com/base/0x6a0586810898b07d22bd4f8be59a36aa09de26a3"
            alt="DEXScreener"
            target="_blank"
            class="mr-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              fill="#fff"
              fill-rule="evenodd"
              viewBox="0 0 252 300"
              focusable="false"
            >
              <path
                d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"
              ></path>
              <path
                d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"
              ></path>
            </svg>
          </a>
          <div class="dext-image-container mr-4">
            <a
              href="https://www.dextools.io/app/en/base/pair-explorer/0x6a0586810898b07d22bd4f8be59a36aa09de26a3?t=1710930343419"
              alt="DEXTools"
              target="_blank"
            >
              <img src="@/assets/dextools_logo_full_dark.svg" alt="DEXTools Logo" />
            </a>
          </div>
          <div class="moontok-image-container">
            <a href="https://moontok.io/coins/broge" target="_blank">
              <img src="@/assets/moontoklogo.svg" alt="Moontok" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contract-address {
  font-size: inherit;
}

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

.dext-image-container {
  width: 32px;
  height: 32px;
  overflow: hidden;
}

.dext-image-container img {
  width: 28px;
  height: 32px;
  object-fit: cover;
  object-position: left center;
}

.moontok-image-container {
  width: 32px;
  height: 32px;
  overflow: hidden;
}

.moontok-image-container img {
  width: 22px;
  height: 32px;
  object-fit: cover;
  object-position: left center;
}
</style>
