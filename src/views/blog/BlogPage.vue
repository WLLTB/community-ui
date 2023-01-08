<template>
  <el-row v-loading='state.loading' style='position:relative; top: -70px; height: 460px;'>
    <el-col :span='12' :offset='3'>
      <ul v-infinite-scroll='load'
          infinite-scroll-distance='30'
          infinite-scroll-delay='100'
          class='infinite-list'>
        <li v-for='blog in state.blogList' class='infinite-list-item blog-list white-background'>
          <div class='flex-space-between user-info'>
            <el-space size='large'>
              <el-avatar size='small' src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'/>
              <h3>{{ blog.author }}</h3>
              <el-button icon='Plus' size='small' type='primary' circle style='width: 16px; height: 16px;'></el-button>
            </el-space>
            <el-space class='user-info-item'>
              <el-icon>
                <Star/>
              </el-icon>
              {{ blog.marks }}
            </el-space>
            <el-space class='user-info-item'>
              <el-icon>
                <View/>
              </el-icon>
              {{ blog.views }}
            </el-space>
            <el-space class='user-info-item'>
              <el-icon>
                <Clock/>
              </el-icon>
              {{ blog.updateTime }}
            </el-space>
          </div>
          <div class='title-info'>
            <h1 class='flex-item-center'>{{ blog.title }}</h1>
            <el-tag size='small'>测试</el-tag>
          </div>
        </li>
      </ul>
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
</template>

<script setup>
import {getBlogList} from '../../api/blog/blog.api';
import {onMounted, reactive} from 'vue';
import {RANK_ICON} from '../../constans/blog.constans';
import '../../assets/blog.css';

const state = reactive({
  blogList: [],
  page: {
    current: 1,
    size: 5,
    total: 0,
  },
  loading: false,
  searchName: undefined,
});

const initBlogList = async () => {
  onLoad();
  const result = await getBlogList({
    current: 0,
    size: state.page.size,
  });
  state.blogList = result.data.data.content;
  state.page.total = result.data.data.totalElements;
  unLoad();
};

const getCurrentBlogList = async () => {
  onLoad();
  const result = await getBlogList({
    current: state.page.current - 1,
    size: state.page.size,
    name: state.searchName,
  });
  state.blogList = result.data.data.content;
  state.page.total = result.data.data.totalElements;
  unLoad();
};

const load = () => {
  if (state.page.size <= state.page.total) {
    state.page.size += 1;
  }
  getCurrentBlogList();
};

onMounted(() => {
  initBlogList();
});

const onLoad = () => {
  state.loading = true;
};

const unLoad = () => {
  state.loading = false;
};
</script>