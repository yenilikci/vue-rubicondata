<template>
  <post v-for="(item,index) in posts" :key="index" :item="item" :value="value"/>
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
      ],
      value: '<h1>Value</h1>'
    }
  },
  components: {
    Post
  }
}
</script>

<style>

</style>
