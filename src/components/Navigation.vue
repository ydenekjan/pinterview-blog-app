<script>
export default {
  computed: {
    computedUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>

<template>
  <div class="navbar">
    <router-link to="/" class="logo"><h1>My Blog Name</h1></router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/editor" v-if="computedUser.isAdmin">Editor</router-link>
    <a class="login" v-if="computedUser.name !== ''">{{ computedUser.name }}</a>
    <router-link to="/login" class="login" v-else>Login</router-link>
  </div>
</template>

<style scoped>
.navbar {
  cursor: default;
  background-color: #242325;
  overflow: hidden;
  box-shadow: rgba(36, 35, 37, 0.2) 0 0 20px 10px;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 20px;
  text-decoration: none;
  font-size: 24px;
}

.logo h1 {
  font-family: "Dancing Script", serif;
  margin: 0 10px;
  font-size: 32px;
  padding: 0;
}

.navbar .logo {
  padding: 15px 20px;
}

.navbar a:hover {
  padding: 20px 20px 17px;
  border-bottom: 3px solid #dc965a;
}

.navbar .logo:hover {
  border: none;
  padding: 15px 20px;
}

.navbar .login {
  float: right;
}

@media (max-width: 600px) {
  .navbar a {
    box-sizing: border-box;
    width: 100%;
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 20px;
    text-decoration: none;
    font-size: 24px;
  }
}
</style>
