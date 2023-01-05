<template>
  <div>
    <el-card v-for='blog in state.blogList' class='box-card'>
      <template #header>
        <div class='card-header'>
          <h3>{{ blog.title }}</h3>
          <h3>{{ blog.title }}</h3>
        </div>
      </template>
      <div>{{ blog.content }}</div>
      <el-button class='button' type='primary'>去看看</el-button>
    </el-card>
  </div>
</template>

<script setup>
import {getBlogList} from '../../api/blog/blog.api';
import {onMounted, reactive} from 'vue';

const state = reactive({
  blogList: [],
});

const initBlogList = async () => {
  const result = await getBlogList(0, 15);
  state.blogList = result.data.data.content;
};

onMounted(() => {
  initBlogList();
});
</script>

<style scoped>
.card-header {
  text-align: center;
  height: 8px;
}

.box-card {
  text-align: center;
  margin: 25px auto;
  width: 480px;
}

.button {
  margin-top: 5px;
}
</style>