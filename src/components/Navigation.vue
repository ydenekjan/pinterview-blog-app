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
    <div id="navbar">
      <ul>
        <li class="logo">
          <h1>My Blog Name</h1>
        </li>
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
    box-shadow: dimgray 0 0 30px;
  }

  h1 {
    font-family: 'Dancing Script', serif;
    font-weight: 700;
    font-size: 38px;
    color: white;
    margin: 0 30px;
  }

  #navbar {
    width: 100% ;
    height: 80px;
    background-color: #242325;
    position: relative;
    cursor: default;
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
    background-color: #3D3B3F;
  }

  .logo:hover {
    background-color: inherit;
  }

  a, a:visited {
    padding: 0 30px;
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