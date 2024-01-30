<script>
  import PostCreator from '@/components/PostCreator.vue';
  import Navigation from '@/components/Navigation.vue';



  export default {
    components: {Navigation, PostCreator },

    data() {
      return {
        user: this.$store.getters.currentUser
      }
    },

    mounted () {
      document.title = 'My Blog | Editor'
      this.user = this.$store.getters.currentUser
    },

  }
</script>

<template>
  <Navigation/>
  <post-creator v-if="user.isAdmin"></post-creator>
  <h1 v-else>You don't have access to this page.</h1>
</template>

<style scoped>
  h1 {
    text-align: center;
  }
</style>