<script>
  import LoginForm from '@/components/LoginForm.vue';

  export default {
    components: { LoginForm },

    mounted(){
      document.title = 'My Blog | Login'
    }
  }
</script>

<template>
  <login-form></login-form>
</template>

<style scoped>

</style>