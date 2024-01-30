<script setup>

  import {ref} from 'vue';

  const overlay = ref(false)

</script>

<script>

import Navigation from '@/App.vue';

export default {
  components: {Navigation},

  data() {
    return {
      post: {},
      oldSlug: '',
    }
  },


  mounted() {
    let posts = this.$store.getters.getPosts

    function findPost(arr, slug) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].slug === slug) return arr[i]
      }
    }

    this.oldSlug = this.$route.params.slug
    this.post = findPost(posts, this.oldSlug)

    document.title = 'My Blog | Edit - ' + this.post.title

  },

  methods: {
    submitForm() {
      let time = new Date
      this.post.time = `${time.toLocaleString('default', { month: 'short' })} ${time.getDate()}, ${time.getFullYear()}`

      this.post.slug = this.post.title.toLowerCase().split(' ').join('-')

      this.post.editor = this.$store.getters.currentUser.name

      this.$router.push('/' + this.post.slug)

      this.$store.dispatch('editPost', [this.oldSlug, this.post])
    },

    handleFileUpload(event) {
      this.post.coverImage = URL.createObjectURL(event.target.files[0])
    },

    deletePost() {
      this.$router.push('/')

      this.$store.dispatch('deletePost', this.oldSlug)
    }

  }
}

</script>

<template>
  <Navigation/>

  <section class="post-editor">
    <h1>Edit a post</h1>
    <div class="form-wrapper">
      <form @submit.prevent="submitForm">
        <label for="title">Title:</label>
        <input class="text" type="text" id="title" placeholder="My Blog Post" v-model="post.title" required ref="focused">

        <label class="upload-image" for="image">Cover Image</label>
        <input id="image" class="img-input" type="file" @change="handleFileUpload"/>

        <label for="content">Content:</label>
        <textarea class="text" id="content" placeholder="What would you like to post today?" v-model="post.content" required/>

        <input class="edit-post" type="submit" value="Edit Post">
      </form>

      <button class="delete-post" @click="overlay = !overlay">Delete Post</button>

    </div>
  </section>

  <div v-if="overlay" class="overlay">
    <div class="message">
      <h1> You are about to delete this post!</h1>
      <h2> Are you sure you want to continue? </h2>

      <section class="buttons">
        <button class="edit-post" @click="overlay = !overlay">No, Wait</button>
        <button class="delete-post" @click="deletePost">Yes, Delete</button>
      </section>
    </div>
  </div>


</template>

<style scoped>

.post-editor {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
}

input[type="file"] {
  display: none;
}

.upload-image {
  margin: 10px 0 25px 0 ;
  text-align: center;
  padding: 10px 0;
  vertical-align: center;
  display: block;
  position: relative;
  width: 500px;
  outline: none;
  border: 1px solid dimgray;
  border-radius: 5px;
  background-color: white;
  font-size: 18px;
}

.upload-image:hover {
  background-color: dimgray;
  color: white;
}

label {
  margin: 0 400px 0 0;
}

input, textarea {
  margin: 5px 0 20px 0;
}

h1 {
  font-size: 48px;
  color: #242325;
}

.text {
  box-sizing: border-box;
  width: 500px;
  height: 40px;
  outline: none;
  padding-left: 5px;
  border: 1px solid dimgray;
  border-radius: 5px;
}

#content {
  width: 500px;
  height: 250px;
}

.text:focus, textarea:focus {
  outline: 1px solid #DC965A;
  border: 1px solid #DC965A;
  border-radius: 5px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  width: 500px;
}

form {
  position: relative;
  width: 500px;
}

.edit-post, .delete-post {
  display: block;
  position: relative;
  width: 500px;
  height: 40px;
  outline: none;
  border: 1px solid #DC965A;
  border-radius: 5px;
  background-color: white;
  color: #DC965A;
  font-size: 18px;
  margin: 10px auto;
}

.delete-post {
  border: 1px solid red;
  color: red;
}

.edit-post:hover {
  color: white;
  background-color: #DC965A;
}

.delete-post:hover {
  background-color: red;
  color: white;
}

.overlay {
  width: 100%;
  height: 100vh;
  background-color: rgb(0,0,0,0.2);
  position: absolute;
  top: 80px;
}

.message {
  box-shadow: rgb(0,0,0,0.5) 0 0 100px 50px;
  background-color: white;
  width: 600px;
  height: 500px;
  margin: 70px auto ;
  border-radius: 20px;
  z-index: 10;
  position: relative;
  padding: 80px;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.message h1 {
  font-size: 40px;
}

.overlay button {
  width: 230px;
  margin: 0;
}

.overlay .buttons {
  width: 600px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 70px;
}

</style>