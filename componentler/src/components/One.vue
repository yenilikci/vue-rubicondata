<template>
  <div class="container">{{ mutateTitle }}</div>
  <button @click="tryOne"></button>
</template>

<script>
export default {
  name: "One",
  props: {
    titleBig: {
      type: String, Number,
      required: true,
      //default: 'default value'
      default: () => {
        return "default value"
      },
      validator: (value) => {
        return ["this is title", "index", "header"].indexOf(value) !== -1;
      }
    }
  },
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