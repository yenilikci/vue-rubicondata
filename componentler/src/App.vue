<template>
  <post :content="posts"/>
</template>

<script>
import Post from "./components/Post";

export default {
  name: 'App',
  data() {
    return {
      posts: [
        {number: 1, content: 'one'},
        {number: 2, content: 'two'},
        {number: 3, content: 'three'},
        {number: 4, content: 'four'},
      ]
    }
  },
  components: {
    Post
  }
}
</script>

<style>

</style>
