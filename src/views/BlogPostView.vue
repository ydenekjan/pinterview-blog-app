<script>
import Navigation from "@/components/Navigation.vue";
import PostEditor from "@/components/PostEditor.vue";

export default {
  components: { PostEditor, Navigation },
  data() {
    return {
      post: {},
      slug: this.$route.params.slug,
    };
  },

  mounted() {
    this.post = this.$store.getters.getPosts.find(
      (post) => post.slug === this.slug,
    );

    document.title = "My Blog | " + this.post.title;
  },

  computed: {
    computedUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>

<template>
  <Navigation />

  <div class="post">
    <h1>
      {{ post.title }}
    </h1>
    <router-link
      class="edit-post"
      v-if="computedUser.isAdmin"
      :to="post.slug + '/edit'"
      >Edit Post</router-link
    >
    <h2>{{ post.time }} • {{ post.editor }}</h2>
    <div class="content">
      <div class="cover-image">
        <img :src="post.coverImage" alt="Post Cover Image" />
      </div>
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

.edit-post,
.edit-post:visited {
  display: block;
  width: 230px;
  height: 20px;
  outline: none;
  border: 1px solid #dc965a;
  border-radius: 5px;
  background-color: white;
  color: #dc965a;
  font-size: 18px;
  text-decoration: none;
  position: absolute;
  top: 90px;
  right: 130px;
  text-align: center;
  padding: 10px 0;
}

.edit-post:hover {
  background-color: #dc965a;
  color: white;
}

h1 {
  font-size: 42px;
  margin: 0;
  color: #dc965a;
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
  color: #3d3b3f;
}
</style>
