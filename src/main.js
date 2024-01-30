import { createStore } from 'vuex';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const store = createStore({
    state: {
        posts: [{
            slug: 'and-this-is-a-post-as-well',
            title: 'And this is a post as well',
            editor: 'Jan Zdenek',
            time: 'Jan 30, 2024',
            coverImage: 'src/assets/post2-cover-image.jpeg',
            content: `This is an example blog post that would normally show up if this site had any sort of a database and didnt completely reset on page refresh. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem in maiores nobis quia rem? Consequuntur culpa debitis excepturi illum laboriosam modi omnis qui unde voluptatem voluptates! Ad facere fugit sint voluptate. Ab autem delectus ipsam quisquam veniam? Illo in itaque pariatur quisquam rem veniam voluptatum? Aliquid architecto consequatur consequuntur corporis error et, illum iusto laboriosam libero, nihil perspiciatis possimus quas quidem ratione sunt voluptas voluptatibus! Beatae commodi consequuntur error ipsa maiores sapiente veniam. A ad amet aspernatur, at beatae commodi, deleniti inventore laboriosam molestiae nesciunt nihil, nisi non obcaecati omnis quaerat quas quasi quo quos temporibus vero! Accusantium, distinctio omnis.`
        },
            {
            slug: 'this-is-a-test-post',
            title: 'This is a test post',
            editor: 'Jan Zdenek',
            time: 'Jan 26, 2024',
            coverImage: 'src/assets/post1-cover-image.jpeg',
            content: `This is an example blog post that would normally show up if this site had any sort of a database and didnt completely reset on page refresh. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem in maiores nobis quia rem? Consequuntur culpa debitis excepturi illum laboriosam modi omnis qui unde voluptatem voluptates! Ad facere fugit sint voluptate. Ab autem delectus ipsam quisquam veniam? Illo in itaque pariatur quisquam rem veniam voluptatum? Aliquid architecto consequatur consequuntur corporis error et, illum iusto laboriosam libero, nihil perspiciatis possimus quas quidem ratione sunt voluptas voluptatibus! Beatae commodi consequuntur error ipsa maiores sapiente veniam. A ad amet aspernatur, at beatae commodi, deleniti inventore laboriosam molestiae nesciunt nihil, nisi non obcaecati omnis quaerat quas quasi quo quos temporibus vero! Accusantium, distinctio omnis.`
        }],
        users: [
            {
                name: "John Doe",
                username: 'user',
                password: 'password',
                isAdmin: false
        },
            {
                name: 'Jan Zdenek',
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

        editPostDetails(state, [oldPostSlug, newPost]) {
            let postIdx

            for (let i = 0; i < state.posts.target.length; i++) {
                if (state.posts[i].slug === oldPostSlug) postIdx = i
            }

            state.posts[postIdx] = newPost
        },

        removePost(state, postSlug) {
            let postIdx

            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i].slug === postSlug) postIdx = i
            }

            state.posts.splice(postIdx, 1)
        },

        userChange(state, user) {
            state.currentUser = user
        }
    },
    actions: {
        createPost({ commit }, post) {
            commit('addPost', post);
        },

        editPost({ commit }, [oldPostSlug, newPost]) {
            commit('editPostDetails', [oldPostSlug, newPost])
        },

        deletePost({ commit }, postSlug) {
            commit('removePost', postSlug)
        },

        loginUser({ commit }, user) {
            commit('userChange', user)
        },


    },
    getters: {
        getPosts: state => state.posts,
        getUsers: state => state.users,
        currentUser: state => state.currentUser
    }
});


const app = createApp(App)

app.use(router).use(store).mount('#app')

