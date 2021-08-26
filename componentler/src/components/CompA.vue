<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id" @click="selectedPost = post">
        {{ post.title }}
      </li>
    </ul>
    <div v-if="selectedPost">
      <h3>{{ selectedPost.title }}</h3>
      <div v-html="selectedPost.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: '1', title: 'try new one', content: '<span>try new one</span>'},
        {id: '2', title: 'try new two', content: '<span>try new two</span>'},
        {id: '3', title: 'try new three', content: '<span>try new three</span>'},
      ],
      selectedPost: null
    }
  }
}
</script>

<style>

</style>