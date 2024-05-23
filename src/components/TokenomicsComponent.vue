<script setup lang="ts">
import CountAnimation from './CountAnimation.vue';
import TextAnimation from './TextAnimation.vue';
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
        Owner:&nbsp;<span><TextAnimation target-text="You" :duration="3000" suffix="!" /></span>
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
</style>
