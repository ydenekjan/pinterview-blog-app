<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,

  }
})

</script>

<template>
  <div class="post-thumbnail">
    <h1>
      <RouterLink :to="post.slug">{{ post.title }}</RouterLink>
    </h1>
    <h2>
      {{ post.time }} • {{ post.editor }}
    </h2>
    <div class="post-cover">
        <img :src="post.coverImage" alt="Post Cover Image">
    </div>
    <p>
      {{ post.content }}
    </p>
    <div class="post-link">
      <RouterLink :to="post.slug">Continue reading...</RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .post-thumbnail {
    width: 400px;
    height: 600px;
    border: 1px solid lightgray;
    padding: 40px;
    overflow-x: clip;
    position: relative;
    margin: 40px 0;
  }

  h1 {
    margin: 0;
    color: darkslategray;
  }

  h2 {
    font-size: 16px;
    color: dimgray;
    margin: 0;
    font-weight: 500;
  }

  .post-cover {
    position: relative;
    width: 482px;
    height: 250px;
    background-color: grey;
    left: -40px;
    margin: 40px 0;
    overflow: clip;
  }

  img {
    width: 482px;
    height: 250px;
    object-fit: cover;
  }

  p {
    margin: 0;
    height: 180px;
    overflow: clip;
  }

  .post-link {
    position: absolute;
    bottom: 40px;
  }

  a, a:visited {
    color: #056767;
    text-decoration: none;
  }

</style>