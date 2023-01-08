import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/blog/BlogPage.vue';
import BlogEdit from '../views/blog/BlogEdit.vue';
import About from '../views/About.vue';
import Video from '../views/video/VideoPage.vue';
import VideoDetail from '../views/video/VideoDetail.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/editBlog',
      name: 'blogEdit',
      component: BlogEdit
    },
    {
      path: '/video',
      name: 'video',
      component: Video,
    },
    {
      path: '/video/:id',
      name: 'videoDetail',
      component: VideoDetail,
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})

export default router
