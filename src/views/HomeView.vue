<script>

import PostThumbnail from '@/components/PostThumbnail.vue';
import EditorView from '@/views/EditorView.vue';

export default {
  components: {EditorView, PostThumbnail },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    }
  },

  mounted() {
    document.title = 'My Blog | Home'
  }
}

</script>

<template>
  <section class="posts">
   <PostThumbnail v-for="post in posts" :post="post"/>
  </section>
</template>

<style scoped>
  .posts {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>