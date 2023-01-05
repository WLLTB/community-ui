<template>
  <div>
    <el-row>
      <el-col :span='16'>
        <div class='blog-list flex'>
          <el-input placeholder='搜索文章'/>&nbsp;
          <el-button type='primary'>搜索</el-button>
        </div>
        <el-card v-for='blog in state.blogList' class='blog-list'>
          <template #header>
            <div class='card-header'>
              <div class='user-info'>
                <el-avatar size='small' src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'/>
                &nbsp;
                <div>{{ blog.author }}</div>
                <div class='update-time'>
                  <el-icon>
                    <Clock/>
                  </el-icon>
                  {{ blog.updateTime }}
                </div>
              </div>
            </div>
          </template>
          <div class='title-info'>
            <h3>{{ blog.title }}</h3>
            <el-tag size='small'>测试</el-tag>
          </div>
          <div>{{ blog.content }}</div>
        </el-card>
      </el-col>
      <el-col :span='8'>
        <el-card class='rank-list'>
          11
        </el-card>
      </el-col>
    </el-row>
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

.blog-list {
  margin: 25px auto;
  width: 90%;
}

.update-time {
  flex: 1;
  text-align: right;
  font-size: 10px;

  color: #bbb;
  line-height: 100%;
}

.title-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rank-list {
  margin: 25px auto;
  width: 80%;
}
</style>