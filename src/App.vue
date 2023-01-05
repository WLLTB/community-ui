<script setup>
import { RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue';
</script>

<template>
  <div>
    <MenuBar style='width: 100%'/>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
