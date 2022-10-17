<script lang="ts" setup>
import { translate } from '@/i18n'
import i18n from '@/main'
import HeaderCmp from './components/HeaderComponents.vue'

const langs = i18n.global.availableLocales;

function changeLang(val: string) {
  if(typeof i18n.global.locale.value !== "string") return;
  i18n.global.locale.value = val;
}
</script>

<template>
  <h3>Header</h3>
  <button
    v-for="(lang, i) in langs"
    :key="i"
    @click="changeLang(lang)"
  >{{lang}}</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

