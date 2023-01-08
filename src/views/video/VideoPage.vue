<template>
  <div id='content' class='video-page'>
    <div class='flex-center' style='position: relative; top: 90px'>
      <el-space :size='20'>
        <el-button v-for='type in TYPE_LIST' :icon='type.icon'>{{type.name}}</el-button>
        <el-button icon='StarFilled' type='primary'>收藏</el-button>
        <el-button icon='Promotion' color='#fb7299'>投稿</el-button>
      </el-space>
    </div>
    <el-row style='position: relative; top: 110px'>
      <el-col :span='8' :offset='2'>
        <el-space direction='vertical'>
          <el-image src='https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg' fit='cover' class='border-radius-10'/>
          <h2>分享视频吧！！！</h2>
        </el-space>
      </el-col>
      <el-col :span='12' :offset='2'>
        <el-space direction='vertical' size='large'>
          <el-space class='flex-space-between' :size='40'>
            <a v-for='video in state.TOP3' :href='video.href'>
              <el-space direction='vertical'>
                <el-image :src='video.url' fit='cover' class='border-radius-10' style='height: 140px; width: 200px;'/>
                <h3>sdsa</h3>
                <el-space class='video-info'>
                  <el-icon><Avatar /></el-icon><h4>{{video.nickname}}</h4>·
                  <div class='flex'>{{video.updateTime}}</div>
                </el-space>
              </el-space>
            </a>
          </el-space>
          <el-space class='flex-space-between' :size='40'>
            <a v-for='video in state.TOP6' :href='video.href'>
              <el-space direction='vertical'>
                <el-image :src='video.url' fit='cover' class='border-radius-10' style='height: 140px; width: 200px;'/>
                <h3>sdsa</h3>
                <el-space class='video-info'>
                  <el-icon><Avatar /></el-icon><h4>{{video.nickname}}</h4>·
                  <div class='flex'>{{video.updateTime}}</div>
                </el-space>
              </el-space>
            </a>
          </el-space>
        </el-space>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import '../../assets/video.css';
import {reactive} from 'vue';

const state = reactive({
  TOP3: [{
    id: '1',
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    title: '时代终结者时时时',
    nickname: 'WLLTB',
    updateTime: '2005-05-31 17:35:43',
    views: 12,
    marks: 13,
    href: '/#/video/1',
  }, {
    id: '1',
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    title: '时',
    nickname: 'WLLTB',
    updateTime: '2005-05-31 17:35:43',
    views: 12,
    marks: 13,
    href: '/#/video/1',
  }, {
    id: '1',
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    title: '时代者',
    nickname: 'WLLTB',
    updateTime: '2005-05-31 17:35:43',
    views: 12,
    marks: 13,
    href: '/#/video/1',
  }],
  TOP6: [{
    id: '1',
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    title: '时代终结者',
    nickname: 'WLLTB',
    updateTime: '2005-05-31 17:35:43',
    views: 12,
    marks: 13,
    href: '/#/video/1',
  }, {
    id: '1',
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    title: '时代终结者',
    nickname: 'WLLTB',
    updateTime: '2005-05-31 17:35:43',
    views: 12,
    marks: 13,
    href: '/#/video/1',
  }, {
    id: '1',
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    title: '时代终结者',
    nickname: 'WLLTB',
    updateTime: '2005-05-31 17:35:43',
    views: 12,
    marks: 13,
    href: '/#/video/1',
  }],
});

const TYPE_LIST = [{
  id: '科技',
  name: '科技',
  icon: 'CameraFilled',
},{
  id: '音乐',
  name: '音乐',
  icon: 'Service',
},{
  id: '动画',
  name: '动画',
  icon: 'Drizzling',
},{
  id: '电影',
  name: '电影',
  icon: 'VideoCameraFilled',
},{
  id: '生活',
  name: '生活',
  icon: 'GoodsFilled',
},{
  id: '知识',
  name: '知识',
  icon: 'Platform',
},{
  id: '资讯',
  name: '资讯',
  icon: 'BellFilled',
},{
  id: '其他',
  name: '其他',
  icon: '',
}]

</script>

<style scoped>

</style>