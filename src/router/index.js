import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditorView from '@/views/EditorView.vue';
import BlogPostView from '@/views/BlogPostView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/editor',
      name: 'editor',
      component: EditorView
    },
    {
      path: '/:slug',
      component: BlogPostView,
    }
  ]
})

export default router
