<script>

import Navigation from '@/components/Navigation.vue';
import PostEditor from '@/components/PostEditor.vue';


export default {
  components: {PostEditor, Navigation},
  data() {
    return {
      post: {},
      slug: ''
    }
  },

  mounted() {

    let posts = this.$store.getters.getPosts

    function findPost(arr, slug) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].slug === slug) return arr[i]
      }
    }

    this.slug = this.$route.params.slug
    this.post = findPost(posts, this.slug)


    document.title = 'My Blog | ' + this.post.title

  },

  computed: {
    computedUser() {
      return this.$store.getters.currentUser
    }}
}



</script>

<template>
  <Navigation/>

  <div class="post">
    <h1>
      {{ post.title }}
    </h1>
    <router-link class="edit-post" v-if="computedUser.isAdmin" :to="post.slug + '/edit'">Edit Post</router-link>
    <h2>
      {{ post.time }} • {{ post.editor }}
    </h2>
    <div class="content">
      <div class="cover-image"><img :src="post.coverImage" alt='Post Cover Image'></div>
      <p>
        {{ post.content }}
      </p>
    </div>

  </div>

</template>

<style scoped>

.post {
  position: relative;
  width: 1200px;
  padding: 80px 120px;
}

.edit-post, .edit-post:visited {
  display: block;
  width: 230px;
  height: 20px;
  outline: none;
  border: 1px solid #DC965A;
  border-radius: 5px;
  background-color: white;
  color: #DC965A;
  font-size: 18px;
  text-decoration: none;
  position: absolute;
  top: 90px;
  right: 130px;
  text-align: center;
  padding: 10px 0;
}

.edit-post:hover {
  background-color: #DC965A;
  color: white;
}

h1 {
  font-size: 42px;
  margin: 0 ;
  color: #DC965A;
}

h2 {
  margin: 0;
}

.cover-image {
  width: 600px;
  position: relative;
  overflow: clip;
}

.cover-image img {
  width: 600px;
  object-fit: cover;
}

.content {
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0;
  font-size: 18px;
  width: 500px;
  color: #3D3B3F;
}

</style>