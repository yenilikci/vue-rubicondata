<template>
  <div>
    <button @click="addToCard">click me</button>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  props: {
    product: String
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    addToCard() {
      this.$emit('updateValue', this.product)
    }
  }
}
</script>

<style scoped>

</style>