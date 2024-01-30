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
    <RouterLink :to="post.slug">
    <h1>
     {{ post.title }}
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
    </RouterLink>
  </div>
</template>

<style scoped>
  .post-thumbnail {
    width: 400px;
    height: 600px;
    padding: 60px;
    overflow-x: clip;
    position: relative;
    margin: 80px 0;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 5px 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #FFF;
    border-radius: 5px;
    transition: all 0.3s ease-out;
  }

  h1 {
    margin: 0;
    font-size: 32px;
    text-overflow: fade;
    color: #DC965A;

  }

  h2 {
    font-size: 16px;
    color: dimgray;
    margin: 0;
    font-weight: 500;
  }

  .post-cover {
    position: relative;
    width: 440px;
    height: 250px;
    left: -20px;
    background-color: grey;
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
    width: 350px;
    height: 180px;
    overflow: clip;
    color: dimgray;
  }

  .post-link {
    position: absolute;
    bottom: 40px;
  }

  a, a:visited {
    color: #DC965A;
    text-decoration: none;
  }

  .post-thumbnail:hover {
    transform: translate(2px, -5px) rotate(0.5deg);
  }

</style>