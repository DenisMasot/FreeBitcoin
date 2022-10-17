<script lang="ts" setup>
import { ref  } from "vue"

const counter = ref(0)

const increaseCounter = () => {
    counter.value++
}

</script>


<template>
  <h1>Base :</h1>
    {{counter}}
    <button @click="increaseCounter">+</button>

</template>

<style>

</style>