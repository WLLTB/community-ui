<template>
  <div>
    <el-card v-for='blog in state.blogList' class='box-card'>
      <template #header>
        <div class='card-header'>
          <div class='user-info'>
            <el-avatar size='small' src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'/>
            &nbsp;
            <div>{{blog.author}}</div>
            <div class='update-time'>
              <el-icon><Clock /></el-icon>
              {{blog.updateTime}}
            </div>
          </div>
        </div>
      </template>
      <div>{{ blog.content }}</div>
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

}

.user-info {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
}

.box-card {
  margin: 25px auto;
  width: 480px;
}

.update-time {
  flex: 1;
  text-align: right;
  font-size: 10px;

  color: #bbb;
  line-height: 100%;
}
</style>