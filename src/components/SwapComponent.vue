<!-- src/components/SushiSwapComponent.vue -->

<template>
  <div class="section box">
    <h1 class="title is-4">Broge Swap!</h1>
    <h2 class="subtitle is-6">You can go with this, or you can go with that.</h2>
    <div class="box mt-4" style="max-width: 50%; margin: auto">
      <div class="field">
        <label class="label">From</label>
        <div class="control">
          <div class="select is-primary">
            <select>
              <option>Select Token</option>
              <option>ETH</option>
              <option>USDC</option>
              <option>DAI</option>
            </select>
          </div>
          <div style="max-width: 50%856">
            <input class="input mt-3 noscroll" type="tel" placeholder="Amount" />
          </div>
        </div>
      </div>

      <div class="field mt-3">
        <label class="label">To</label>
        <div class="control">
          <div class="select is-primary">
            <select>
              <option>Select Token</option>
              <option>ETH</option>
              <option>USDC</option>
              <option>DAI</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field mt-3">
        <div class="control">
          <button class="button is-primary is-fullwidth">Swap</button>
        </div>
      </div>
    </div>
  </div>
</template>
