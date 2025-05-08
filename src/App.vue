<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore,userCountersStore_2 } from './stores/counter'
const counter = useCounterStore()
const counter_2 = userCountersStore_2()

import product from './product.vue'
</script>

<template>
  <!-- <div>
    <div> 
    <h2>Count: {{ counter_2.count }}</h2>
    <h2>Double: {{ counter_2.doubleCount }}</h2>

    <button @click="counter_2.increment">+1</button>
    <button @click="counter.decrement">-1</button>
    <button @click="counter.reset">Reset</button>
  </div>
  
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->


  <product/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
