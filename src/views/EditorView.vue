<script>
  import PostCreator from '@/components/PostCreator.vue';


  export default {
    components: { PostCreator },

    data() {
      return {
        user: this.$store.getters.currentUser
      }
    },

    mounted () {
      document.title = 'My Blog | Editor'
      this.user = this.$store.getters.currentUser
      console.log(this.$store.getters.currentUser, this.user)
    },

  }
</script>

<template>
  <post-creator v-if="user.isAdmin"></post-creator>
  <h1 v-else>You don't have access to this page.</h1>
</template>

<style scoped>
  h1 {
    text-align: center;
  }
</style>