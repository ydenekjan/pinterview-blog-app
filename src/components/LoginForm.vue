<script>

  import Navigation from '@/components/Navigation.vue';

  export default {

    components: { Navigation },

    methods: {
      login(event) {

        const users = this.$store.getters.getUsers

        let username = event.target.elements.username.value
        let password = event.target.elements.password.value

        users.forEach(user => {
              if (user.username === username && user.password === password) {

                this.$store.dispatch('loginUser', user)

                this.$router.push('/')
              }
        })

      }
    },

    mounted() {
      this.$refs.focused.focus()
    }
  }


</script>

<template>
  <section class="login-form">
    <h1>Login</h1>
    <div class="form-wrapper">
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" placeholder="Username" name="username" required ref="focused">

        <label for="password">Password:</label>
        <input type="password" placeholder="Password" name="password" required>

        <input type="submit" value="Submit">

      </form>

    </div>
  </section>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
}

input {
  width: 100%;
  height: 30px;
}

label {
  margin: 10px 0;
}

h1 {
  font-size: 48px;
}

form input {
  padding-left: 5px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  width: 500px;
}
</style>