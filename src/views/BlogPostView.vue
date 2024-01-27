<script>

export default {
  data() {
    return {
      post: {}
    }
  },

  mounted() {

    let posts = this.$store.getters.getPosts

    function findPost(arr, slug) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].slug === slug) return arr[i]
      }
    }

    this.post = findPost(posts, this.$route.params.slug)

    console.log(this.post)
  },
}



</script>

<template>

</template>

<style scoped>

</style>