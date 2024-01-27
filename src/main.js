import { createStore } from 'vuex';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const store = createStore({
    state: {
        posts: []
    },
    mutations: {
        addPost(state, post) {
            state.posts.push(post);
        }
    },
    actions: {
        createPost({ commit }, post) {
            commit('addPost', post);
        }
    },
    getters: {
        getPosts: state => state.posts
    }
});


const app = createApp(App)

app.use(router).use(store).mount('#app')

