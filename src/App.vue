<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import BrogeFooter from './components/BrogeFooter.vue';
import './assets/scss/style.scss';

// Here we go!

import { createWeb3Modal } from '@web3modal/wagmi';
import { walletConnect } from 'wagmi/connectors';

import { reconnect, http, createConfig } from '@wagmi/core';
import { base, mainnet, polygon, arbitrum, avalanche, bsc } from '@wagmi/core/chains';
import { coinbaseWallet, injected } from '@wagmi/connectors';

// 1. Your WalletConnect Cloud project ID
const projectId = '3c00359caf8a688244bc9e2be238aacf';

// 2. Create a metadata object
const metadata = {
  name: 'BrogeSwap',
  description: 'The Broge Swap Utility!',
  url: 'https://broge.meme', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const config = createConfig({
  chains: [base, mainnet, polygon, arbitrum, avalanche, bsc],
  transports: {
    [base.id]: http(),
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [avalanche.id]: http(),
    [bsc.id]: http()
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0]
    })
  ]
});

reconnect(config);
// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true,
  defaultChain: base,
  themeMode: 'dark' // Optional - false as default
});
</script>

<template>
  <div class="hero is-fullheight">
    <header class="header">
      <div class="container">
        <NavBar />
      </div>
    </header>
    <main class="main">
      <div class="container">
        <RouterView />
      </div>
    </main>
    <footer class="footer is-fixed-bottom is-flex is-flex-direction-column">
      <div class="container mt-0 pt-0">
        <BrogeFooter />
      </div>
    </footer>
  </div>
</template>
