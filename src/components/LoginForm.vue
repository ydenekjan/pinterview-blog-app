<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: { Navigation },

  methods: {
    login(event) {
      const users = this.$store.getters.getUsers;

      let username = event.target.elements.username.value;
      let password = event.target.elements.password.value;

      users.forEach((user) => {
        if (user.username === username && user.password === password) {
          this.$store.dispatch("loginUser", user);

          this.$router.push("/");
        }
      });
    },
  },

  mounted() {
    this.$refs.focused.focus();
  },
};
</script>

<template>
  <section class="login-form">
    <h1>Login</h1>
    <div class="form-wrapper">
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          required
          ref="focused"
        />

        <label for="password">Password:</label>
        <input type="password" placeholder="Password" id="password" required />

        <input class="submit" type="submit" value="Submit" />
      </form>
    </div>
  </section>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
}

label {
  margin: 10px 0;
}

h1 {
  font-size: 48px;
  color: #242325;
}

form input {
  box-sizing: border-box;
  width: 500px;
  height: 40px;
  margin-bottom: 10px;
  outline: none;
  padding-left: 5px;
  border: 1px solid dimgray;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border: 1px solid #dc965a;
  border-radius: 5px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  width: 500px;
}

form {
  position: relative;
  width: 500px;
}

.submit {
  display: block;
  margin: 20px auto 0 auto;
  position: relative;
  width: 300px;
  outline: none;
  border: 1px solid #dc965a;
  border-radius: 5px;
  background-color: white;
  color: #dc965a;
  font-size: 18px;
}

.submit:hover {
  color: white;
  background-color: #dc965a;
}
</style>
