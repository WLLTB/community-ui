<script setup>
import { RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue';

import { onMounted } from 'vue'

onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#3447C0');
  document.body.style.setProperty('--el-color-primary-light-9', '#F5FBF0');
  document.body.style.setProperty('--el-color-primary-light-3', '#3447C0');
});
</script>

<template>
  <div>
    <MenuBar style='width: 100%'/>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
