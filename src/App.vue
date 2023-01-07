<script setup>
import {RouterView} from 'vue-router';
import MenuBar from './components/MenuBar.vue';
import img from './assets/bg.jpg';
import {onMounted} from 'vue';

onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#3447C0');
  document.body.style.setProperty('--el-color-primary-light-9', '#F5FBF0');
  document.body.style.setProperty('--el-color-primary-light-3', '#3447C0');
});
</script>

<template>
  <div>
    <el-image :src='img' fit='cover' class='header-img'/>
    <MenuBar class='menu'/>
    <RouterView/>
  </div>
</template>

<style scoped>
.menu {
  width: 100%;
  position: absolute;
  top: 0;
  color: #FFFFFF;
}

.header-img {
  width: 100%;
  height: 500px;
}
</style>
