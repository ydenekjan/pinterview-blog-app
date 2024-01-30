<script>

export default {
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
  <div class="post">
    <h1>
      {{ post.title }}
    </h1>
    <router-link class="edit-post" v-if="computedUser.isAdmin" :to="post.slug + '/edit'">Edit Post</router-link>
    <h2>
      {{ post.time }} • {{ post.editor }}
    </h2>
    <div class="cover-image"><img :src="post.coverImage" alt='Post Cover Image'></div>
    <p>
      {{ post.content }}
    </p>
  </div>
</template>

<style scoped>

.post {
  position: relative;
  width: 880px;
  padding: 40px;
  margin-left: auto;
  margin-right: auto;
}

.edit-post {
  position: absolute;
  top: 40px;
  right: 40px;
}

h1 {
  margin: 0 ;
}

.cover-image {
  width: 960px;
  height: 400px;
  position: relative;
  left: -40px;
  overflow: clip;
  object-fit: cover;
}

</style>