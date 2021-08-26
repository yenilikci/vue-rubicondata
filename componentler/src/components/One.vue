<template>
  <div class="container">{{ mutateTitle }} <br> {{ title }}</div>
  <button @click="tryOne"></button>
</template>

<script>
export default {
  name: "One",
  props: ['titleBig', 'title'],
  data() {
    return {
      mutateTitle: this.titleBig
    }
  },
  methods: {
    tryOne() {
      this.mutateTitle = 'new Title'
    }
  }
}
</script>

<style scoped>
.container {
  font-size: 22px;
  color: darkblue;
}
</style>