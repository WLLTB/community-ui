<template>
  <div>
    <el-row>
      <el-col :span='12' :offset='3'>
        <div class='blog-list flex'>
          <el-input placeholder='搜索文章' clearable/>&nbsp;
          <el-button type='primary' :icon='Search'>搜索</el-button>
        </div>
        <div v-for='blog in state.blogList' class='blog-list white-background'>
          <div class='card-header'>
            <div class='user-info'>
              <el-space>
                <el-avatar size='small' src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'/>
                <h5>{{ blog.author }}</h5>
              </el-space>
              <div class='update-time'>
                <el-icon>
                  <Clock/>
                </el-icon>
                {{ blog.updateTime }}
              </div>
            </div>
          </div>
          <div class='title-info'>
            <h3>{{ blog.title }}</h3>
            <el-tag size='small'>测试</el-tag>
          </div>
          <div>{{ blog.content }}</div>
        </div>
        <div class='flex-center white-background'>
          <el-pagination
              background
              layout='prev, pager, next'
              v-model:total='state.page.total'
              v-model:current-page='state.page.current'
              v-model:page-size='state.page.size'
              @current-change='getCurrentBlogList'
          />
        </div>
      </el-col>
      <el-col :span='6' :offset='1'>
        <div class='rank-list white-background'>
          <h2 style='color: rgba(234,40,92,0.99); text-align: center'>热度排行榜</h2>
          <el-space direction='vertical'>
            <el-space v-for='rank in RANK_ICON' size='default' wrap>
              <img :src='rank' alt='' style='width: 25px; height: 25px;'>
              <h2>ok</h2>
            </el-space>
          </el-space>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {getBlogList} from '../../api/blog/blog.api';
import {onMounted, reactive} from 'vue';
import {Search} from '@element-plus/icons-vue';
import {RANK_ICON} from '../../constans/blog.constans';


const state = reactive({
  blogList: [],
  page: {
    current: 1,
    size: 5,
    total: 0,
  }
});

const initBlogList = async () => {
  const result = await getBlogList(0, state.page.size);
  state.blogList = result.data.data.content;
  state.page.total = result.data.data.totalElements;
};

const getCurrentBlogList = async () => {
  const result = await getBlogList(state.page.current - 1, state.page.size);
  state.blogList = result.data.data.content;
};

onMounted(() => {
  initBlogList();
});
</script>

<style scoped>
.card-header {
  height: 30px;
}

.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-list {
  margin: 18px auto;
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