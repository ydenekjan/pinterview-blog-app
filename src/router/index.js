import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreatorView from '@/views/CreatorView.vue';
import BlogPostView from '@/views/BlogPostView.vue';
import LoginView from '@/views/LoginView.vue';
import EditorView from '@/views/EditorView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/editor',
      component: CreatorView,
    },
    {
      path: '/:slug',
      component: BlogPostView,
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/:slug/edit',
      component: EditorView,
    }
  ]
})

export default router
