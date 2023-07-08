<script setup>
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
console.log(route.params.id)
const router = useRouter()
</script>

<template>
  goodsDetail
  <button @click="router.push('/home')">to_home</button>
</template>

<style scoped>

</style>
