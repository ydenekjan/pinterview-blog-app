import { createStore } from 'vuex';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const store = createStore({
    state: {
        posts: [],
        users: [
            {
                name: "John Doe",
                username: 'johndoe12',
                password: 'password',
                isAdmin: false
        },
            {
                name: 'Peter Smith',
                username: 'admin',
                password: 'admin',
                isAdmin: true
            }

        ],

        currentUser: {
            name: '',
            username: '',
            password: '',
            isAdmin: false
        }

    },
    mutations: {
        addPost(state, post) {
            state.posts.unshift(post);
        },

        userChange(state, user) {
            state.currentUser = user
        }
    },
    actions: {
        createPost({ commit }, post) {
            commit('addPost', post);
        },

        loginUser({ commit }, user) {
            commit('userChange', user)
        }
    },
    getters: {
        getPosts: state => state.posts,
        getUsers: state => state.users,
        currentUser: state => state.currentUser
    }
});


const app = createApp(App)

app.use(router).use(store).mount('#app')

