import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/blog/BlogPage.vue';
import BlogEdit from '../views/blog/BlogEdit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  ]
})

export default router
