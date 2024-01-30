<script>

import PostEditor from '@/components/PostEditor.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  components: {Navigation, PostEditor},

  computed: {
    computedUser() {
      return this.$store.getters.currentUser
    }},
}


</script>

<template>
  <Navigation/>
  <post-editor v-if="computedUser.isAdmin"></post-editor>
  <h1 v-else>You don't have access to this page.</h1>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>