<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="post-thumbnail">
    <RouterLink :to="post.slug">
      <h1>
        {{ post.title }}
      </h1>
      <h2>{{ post.time }} • {{ post.editor }}</h2>
      <div class="post-cover">
        <img :src="post.coverImage" alt="Post Cover Image" />
      </div>
      <p>
        {{ post.content }}
      </p>
      <div class="fade"></div>
    </RouterLink>
  </div>
</template>

<style scoped>
.post-thumbnail {
  width: 350px;
  height: 600px;
  padding: 40px;
  overflow-x: clip;
  position: relative;
  margin: 40px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 5px;
  transition: all 0.3s ease-out;
}

h1 {
  margin: 0;
  font-size: 32px;
  color: #dc965a;
}

h2 {
  font-size: 16px;
  color: dimgray;
  margin: 0;
  font-weight: 500;
}

.post-cover {
  position: relative;
  width: 350px;
  height: 240px;
  background-color: grey;
  margin: 40px 0;
  overflow: clip;
}

img {
  width: 350px;
  height: 240px;
  object-fit: cover;
}

p {
  overflow: hidden;
  color: dimgray;
  height: 100%;
}

a,
a:visited {
  color: #dc965a;
  text-decoration: none;
}

.post-thumbnail:hover {
  transform: translate(2px, -5px) rotate(0.5deg);
}

.fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(0deg, white 40px, transparent);
  z-index: 1;
}

@media (max-width: 450px) {
  .post-thumbnail {
    width: 250px;
    height: 400px;
    padding: 20px;
    overflow-x: clip;
    position: relative;
    margin: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 5px 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease-out;
  }
  .post-cover {
    position: relative;
    width: 250px;
    height: 150px;
    background-color: grey;
    margin: 20px 0;
    overflow: clip;
  }

  img {
    width: 250px;
    height: 150px;
    object-fit: cover;
  }

  .fade {
    height: 30px;
    background: linear-gradient(0deg, white 20px, transparent);
  }
}
</style>
