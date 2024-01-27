<script>

export default {
  data() {
    return {
      post: {
        slug: '',
        title: '',
        editor: '',
        time: '',
        content: '',
      }
    };
  },
  methods: {
    submitForm() {
      let time = new Date
      this.post.time = `${time.toLocaleString('default', { month: 'short' })} ${time.getDate()}, ${time.getFullYear()}`

      this.post.slug = this.post.title.toLowerCase().split(' ').join('-')

      this.$store.dispatch('createPost', this.post)
    }
  }
}

</script>

<template>
  <section class="post-creator">
    <h1>Create a new post</h1>
    <div class="form-wrapper">
      <form @submit.prevent="submitForm">
        <label for="title">Title:</label>
        <input type="text" id="title" placeholder="My Blog Post" v-model="post.title" required>

        <label for="title">Editor:</label>
        <input type="text" id="editor" placeholder="John Doe" v-model="post.editor" required>

        <label for="content">Content:</label><br>
        <textarea id="content" placeholder="What would you like to post today?" v-model="post.content" required/>

        <input type="submit" value="Submit">

      </form>

    </div>
  </section>
</template>

<style scoped>
  .post-creator {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
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

  textarea {
    width: 100%;
    height: 500px;
  }

  form input, textarea {
    padding-left: 5px;
  }

  form textarea {
    padding-top: 10px;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

</style>