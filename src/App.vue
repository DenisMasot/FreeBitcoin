<script lang="ts" setup>
import { translate } from './i18n'
import i18n from './main'

const langs = i18n.global.availableLocales;

function changeLang<T>(val): T {
  i18n.global.locale.value = val;
}

</script>


<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
  <img alt="Vue logo" src="@/assets/images/logo.png" width="120" />
  <p>{{ translate('message.hello', { name: 'Denis' }) }}</p>
  <p>0 {{ translate('message.apple', 0) }}</p>
  <p>1 {{ translate('message.apple', 1) }}</p>
  <p>2 {{ translate('message.apple', 2) }}</p>


  <button
    v-for="(lang, i) in langs"
    :key="i"
    @click="changeLang(lang)"
  >{{lang}}</button>

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
