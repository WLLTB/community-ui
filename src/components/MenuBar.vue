<template>
  <el-menu
      :default-active='activeIndex'
      class='el-menu-demo'
      mode='horizontal'
      background-color='#545c64'
      text-color='#fff'
      active-text-color='#ffd04b'
      @select='handleSelect'
  >
    <div style='display: flex; justify-content: space-between'>
      <el-menu-item index='index'>
        首页
      </el-menu-item>
      <el-menu-item index='video'>
        短视频
      </el-menu-item>
      <el-sub-menu index='info'>
        <template #title>个人信息</template>
        <el-menu-item index='logout'>退出登录</el-menu-item>
      </el-sub-menu>
    </div>

  </el-menu>
</template>

<script setup>
const activeIndex = 'index';
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};

</script>

<style scoped>
</style>