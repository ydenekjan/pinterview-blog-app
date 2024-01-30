<script>
  import LoginForm from '@/components/LoginForm.vue';
  import Navigation from '@/components/Navigation.vue';

  export default {
    components: {Navigation, LoginForm },

    mounted(){
      document.title = 'My Blog | Login'
    }
  }
</script>

<template>
  <Navigation/>
  <login-form></login-form>
</template>

<style scoped>

</style>