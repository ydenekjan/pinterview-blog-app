<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,

  }
})

</script>

<template>
  <div>
    <h1>
      <RouterLink :to="post.slug">{{ post.title }}</RouterLink>
    </h1>
    <h2>
      {{ post.time }} • {{ post.editor }}
    </h2>
    <p>
      {{ post.content }}
    </p>
  </div>
</template>

<style scoped>
</style>