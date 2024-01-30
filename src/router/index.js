import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditorView from '@/views/EditorView.vue';
import BlogPostView from '@/views/BlogPostView.vue';
import LoginView from '@/views/LoginView.vue';
import PostEditor from '@/components/PostEditor.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/editor',
      component: EditorView,
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
      component: PostEditor,
    }
  ]
})

export default router
