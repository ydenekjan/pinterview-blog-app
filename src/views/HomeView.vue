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

  created() {
    this.$store.dispatch('createPost', {
      slug: 'this-is-the-first-post-on-this-blog',
      title: 'This is the first post on this blog',
      editor: 'Jan Zdenek',
      time: 'Jan 26, 2024',
      content: `This is an example blog post that would normally show up if this site had any sort of a database and didnt completely reset on page refresh`
    })
  }
}

</script>

<template>
  <PostThumbnail v-for="post in posts" :post="post"/>
</template>

<style scoped>

</style>