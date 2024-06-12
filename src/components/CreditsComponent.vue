<template>
  <div class="section box">
    <div class="columns is-vcentered">
      <div class="column has-text-centered">
        <i class="has-text-warning"
          >Note that this page is definitely still under constructions (the same Broge meme image
          repeated? How silly!)</i
        >
        <h1 class="title">The following Brogers are credited for bringing back the chill.</h1>
        <h2 class="subtitle">But remember, Broge is still owned by YOU the holders!</h2>
      </div>
    </div>
    <div class="columns is-vcentered" v-for="(item, index) in credits" :key="index">
      <div class="column is-one-third has-text-right" v-if="index % 2 === 0">
        <figure class="image is-128x128 is-pulled-right">
          <img :src="getImageSource(index)" alt="Credit Image" />
        </figure>
      </div>
      <div
        class="column"
        :class="{ 'has-text-left': index % 2 === 0, 'has-text-right': index % 2 !== 0 }"
      >
        <h1 class="title">{{ item.name }}</h1>
        <h2 class="subtitle">{{ item.title }}</h2>
      </div>
      <div class="column is-one-third has-text-left" v-if="index % 2 !== 0">
        <figure class="image is-128x128 is-pulled-left">
          <img :src="getImageSource(index)" alt="Credit Image" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import brogeLogo from '@/assets/images/broge/broge-logo.png';
import brogeLogoLeft from '@/assets/images/broge/broge-logo-left.png';

const credits = [
  { name: 'Chris', title: 'shill' },
  { name: 'Maurice', title: 'pix' },
  { name: 'Live Life', title: 'blurbs' },
  { name: 'blikmaniac', title: 'pilot' },
  { name: 'FlyingMongoose', title: 'tech' }
];

const imageSources = [brogeLogo, brogeLogoLeft, brogeLogo, brogeLogoLeft, brogeLogo];

const getImageSource = (index: number) => {
  return imageSources[index] || brogeLogo;
};
</script>
