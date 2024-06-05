<template>
  <div class="home-view">
    <h1 class="title">Welcome to Broge</h1>
    <div class="content">
      <p>
        Broge is a community-driven, decentralized meme coin that aims to promote chill and positive
        vibes in the crypto world. It began as the brainchild of BrogeBoy, inspired by the legendary
        FROGE, but in a surprising turn of events, BrogeBoy entrusted the project entirely to its
        community.
      </p>
      <h2 class="subtitle">Broge Vision - Chill Reigns Supreme</h2>
      <p>
        Broge's core vision remains unchanged: chill vibes, positivity, and inclusivity. The
        transition to a community-driven model strengthens this vision, emphasizing decentralization
        and collective ownership.
      </p>
      <h2 class="subtitle">Community - A Place for Brogers to Chill</h2>
      <p>
        Broge fosters a welcoming environment where everyone feels valued. Every brogers' ideas and
        contributions are what will shape Broge's future. Broge encourages collaboration and
        respectful interactions within and outside the community.
      </p>
      <p>
        To learn more about Broge's tokenomics and how to buy Broge, please visit the
        <router-link to="/tokenomics">Tokenomics</router-link> and
        <router-link to="/buy">Buy</router-link> pages.
      </p>
      <h2 class="subtitle">Community Tenets</h2>
      <p>When the Broge CTO team first met, in order to ensure the success of the token, four community tenets were outlined and adopted from the very start. These are those tenets.
        <ol>
          <li>Be transparent and clear to the communtiy, always.</li>
          <li>All CTO-led development shall be open source.</li>
          <li>The communtiy <strong><u>always</u></strong> has a voice.</li>
          <li>Be chill, always.</li>
        </ol>
      </p>
      <p>Let's redefine what a meme coin can be. Welcome to Broge!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView'
});
</script>

<style scoped>
.home-view {
  padding: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.content {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
