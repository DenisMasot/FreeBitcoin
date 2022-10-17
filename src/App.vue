<script lang="ts" setup>
import { translate } from './i18n'
import Header from '@/components/HeaderComponents.vue'
import BaseCalc from '@/components/BaseCalc.vue'
</script>


<template>
  <Header />
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
  <h1>Description de FreeBitco.in</h1>
  <p>...</p>
  <img alt="Vue logo" src="@/assets/images/logo.png" width="120" />
  <p>{{ translate('message.hello', { name: 'Denis' }) }}</p>
  <p>0 {{ translate('message.apple', 0) }}</p>
  <p>1 {{ translate('message.apple', 1) }}</p>
  <p>2 {{ translate('message.apple', 2) }}</p>

  <BaseCalc />

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
