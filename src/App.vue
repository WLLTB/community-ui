<script setup>
import {RouterView} from 'vue-router';
import MenuBar from './components/MenuBar.vue';
import img from './assets/bg.jpg';
import {onMounted} from 'vue';
import './assets/app.css';
const TITLE = 'WLLTB';

onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#3447C0');
  document.body.style.setProperty('--el-color-primary-light-9', '#F5FBF0');
  document.body.style.setProperty('--el-color-primary-light-3', '#3447C0');
});
</script>

<template>
  <div>
    <el-image :src='img' fit='cover' class='header-img'/>
    <div class='header-avator' href='#blog'>
      <a href='#content'>
        <img src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' class='avator'/>
      </a>
    </div>
    <div class='header-info'>
      <el-icon v-for='str in TITLE' size='120'>
        <div class='header-title'>{{str}}</div>
      </el-icon>
    </div>
    <div class='header-text'>
      <h2 class='site-master-description'>有趣的灵魂终将相遇</h2>
    </div>
    <MenuBar class='menu'/>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
