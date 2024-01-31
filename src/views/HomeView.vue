<script>
import PostThumbnail from "@/components/PostThumbnail.vue";
import CreatorView from "@/views/CreatorView.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  components: { Navigation, CreatorView, PostThumbnail },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },

  mounted() {
    document.title = "My Blog | Home";
  },
};
</script>

<template>
  <Navigation />
  <section class="posts">
    <PostThumbnail v-for="post in posts" :post="post" />
  </section>
</template>

<style scoped>
.posts {
  margin: 0 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media (max-width: 900px) {
  .posts {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
}
</style>
