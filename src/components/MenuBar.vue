<template>
  <div class='flex menu'>
    <a v-for='menu in MENU' :href='menu.href'>
      <el-icon size='18' style='width: 100px'>
        <el-space><component :is='menu.icon'/>{{menu.name}}</el-space>
      </el-icon>
    </a>
  </div>
</template>

<script setup>
import '../assets/menu.css';
import {HomeFilled, VideoCameraFilled, InfoFilled} from '@element-plus/icons-vue';
const MENU = [
  {
    name: '首页',
    icon: HomeFilled,
    href: '/#/'
  },
  {
    name: '视频',
    icon: VideoCameraFilled,
    href: '/#/video'
  },
  {
    name: '关于',
    icon: InfoFilled,
    href: '/#/about'
  },
]
</script>