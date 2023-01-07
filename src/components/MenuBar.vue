<template>
<!--  <el-menu-->
<!--      :default-active='activeIndex'-->
<!--      class='el-menu-demo'-->
<!--      mode='horizontal'-->
<!--      text-color='#fff'-->
<!--      active-text-color='#ffd04b'-->
<!--      @select='handleSelect'-->
<!--  >-->
<!--    <div class='flex'>-->
<!--      <el-menu-item index='index'>-->
<!--        首页-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index='video'>-->
<!--        短视频-->
<!--      </el-menu-item>-->
<!--      <el-sub-menu index='info'>-->
<!--        <template #title>个人信息</template>-->
<!--        <el-menu-item index='logout'>退出登录</el-menu-item>-->
<!--      </el-sub-menu>-->
<!--      <div class='flex-item-right'>-->
<!--        <el-space>-->
<!--          <el-input placeholder='搜索文章' clearable/>&nbsp;-->
<!--          <el-button type='primary' :icon='Search'>搜索</el-button>-->
<!--        </el-space>-->
<!--      </div>-->
<!--    </div>-->
<!--  </el-menu>-->
  <div>
    www
  </div>
</template>

<script setup>
import {Search} from '@element-plus/icons-vue';

const activeIndex = 'index';
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};

</script>

<style scoped>
.el-menu-demo {

}
</style>