<script>

export default {
  data() {
    return {
      post: {
        slug: '',
        title: '',
        editor: '',
        time: '',
        coverImage: null,
        content: '',
      }
    };
  },

  mounted() {
    this.$refs.focused.focus()
  },

  methods: {
    submitForm(event) {
      let time = new Date
      this.post.time = `${time.toLocaleString('default', { month: 'short' })} ${time.getDate()}, ${time.getFullYear()}`

      this.post.slug = this.post.title.toLowerCase().split(' ').join('-')

      this.post.editor = this.$store.getters.currentUser.name

      this.$store.dispatch('createPost', this.post)

      this.$router.push('/')
    },

    handleFileUpload(event) {
      this.post.coverImage = URL.createObjectURL(event.target.files[0])
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
        <input type="text" id="title" placeholder="My Blog Post" v-model="post.title" required ref="focused">

        <label for="image">Cover Image:</label>
        <input class="img-input" type="file" @change="handleFileUpload"/>

        <label for="content">Content:</label>
        <textarea id="content" placeholder="What would you like to post today?" v-model="post.content" required/>

        <input type="submit" value="Submit">

      </form>

    </div>
  </section>
</template>

<style scoped>
  .post-creator {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
  }

  input {
    width: 490px;
    height: 30px;
  }

  label {
    margin: 10px 0;
  }

  h1 {
    font-size: 48px;
  }

  textarea {
    width: 490px;
    height: 500px;
  }

  form input, textarea {
    padding: 0 0 0 10px;
    margin-bottom: 15px;
  }

  form textarea {
    padding-top: 10px;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  .img-input {
    padding: 0;
  }

</style>