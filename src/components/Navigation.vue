<script>

export default {
  computed: {
    computedUser() {
        return this.$store.getters.currentUser
    }
}}


</script>

<template>
  <section id="header">
    <h1>My Blog</h1>
    <div id="navbar">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li v-if="computedUser.isAdmin">
          <router-link to="/editor">Editor</router-link>
        </li>
        <li v-if="computedUser.name !== ''" class="login"><a>{{ computedUser.name }}</a></li>
        <li v-else class="login">
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

  #header {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }

  h1 {
    font-size: 48px;
    color: darkslategray;
  }

  #navbar {
    width: 960px;
    height: 60px;
    background-color: darkslategray;
    position: relative;
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  li {
    display: flex;
    height: 100%;
    align-items: center;
  }

  li:hover {
    background-color: #1b3b3b;
  }

  a, a:visited {
    padding: 20px;
    font-size: 20px;
    text-decoration: none;
    color: white;
    display: block;
    align-items: center;
    float: left;
  }

  .login {
    position: absolute;
    right: 0;
  }

</style>