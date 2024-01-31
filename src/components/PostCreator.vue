<script>
export default {
  data() {
    return {
      post: {
        slug: "",
        title: "",
        editor: "",
        time: "",
        coverImage: null,
        content: "",
      },
    };
  },

  mounted() {
    this.$refs.focused.focus();
  },

  methods: {
    submitForm() {
      let time = new Date();
      this.post.time = `${time.toLocaleString("default", { month: "short" })} ${time.getDate()}, ${time.getFullYear()}`;

      this.post.slug = this.post.title.toLowerCase().split(" ").join("-");

      this.post.editor = this.$store.getters.currentUser.name;

      this.$store.dispatch("createPost", this.post);

      this.$router.push("/");
    },

    handleFileUpload(event) {
      this.post.coverImage = URL.createObjectURL(event.target.files[0]);
    },
  },
};
</script>

<template>
  <section class="post-creator">
    <h1>Create a new post</h1>
    <div class="form-wrapper">
      <form @submit.prevent="submitForm">
        <label for="title">Title:</label>
        <input
          class="text"
          type="text"
          id="title"
          placeholder="My Blog Post"
          v-model="post.title"
          required
          ref="focused"
        />

        <label class="upload-image" for="image">Cover Image</label>
        <input
          id="image"
          class="img-input"
          type="file"
          @change="handleFileUpload"
        />

        <label for="content">Content:</label>
        <textarea
          class="text"
          id="content"
          placeholder="What would you like to post today?"
          v-model="post.content"
          required
        />

        <input class="create-post" type="submit" value="Create Post" />
      </form>
    </div>
  </section>
</template>

<style scoped>
.post-creator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
}

input[type="file"] {
  display: none;
}

.upload-image {
  margin: 10px 0 25px 0;
  text-align: center;
  padding: 10px 0;
  vertical-align: center;
  display: block;
  position: relative;
  width: 500px;
  outline: none;
  border: 1px solid dimgray;
  border-radius: 5px;
  background-color: white;
  font-size: 18px;
}

.upload-image:hover {
  background-color: dimgray;
  color: white;
}

label {
  margin: 0 400px 0 0;
}

input,
textarea {
  margin: 5px 0 20px 0;
}

h1 {
  font-size: 48px;
  color: #242325;
}

.text {
  box-sizing: border-box;
  width: 500px;
  height: 40px;
  outline: none;
  padding-left: 5px;
  border: 1px solid dimgray;
  border-radius: 5px;
}

#content {
  width: 500px;
  height: 250px;
}

.text:focus,
textarea:focus {
  outline: 1px solid #dc965a;
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

.create-post {
  display: block;
  position: relative;
  width: 500px;
  height: 40px;
  outline: none;
  border: 1px solid #dc965a;
  border-radius: 5px;
  background-color: white;
  color: #dc965a;
  font-size: 18px;
  margin: 10px auto;
}

.create-post:hover {
  color: white;
  background-color: #dc965a;
}
</style>
