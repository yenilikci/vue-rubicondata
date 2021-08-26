<template>
  <div>
    <h6 v-for="(i,index) in content" :key="index">
      {{ i.number }} {{ i.content }}
    </h6>
    <button @click="addNewContent()">add new object</button>
  </div>
</template>

<script>
export default {
  props: {
    content: Array
  },
  methods: {
    addNewContent() {
      this.content.push({number: 5, content: 'five'})
    }
  }
}
</script>