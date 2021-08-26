<template>
  <div>
    <input type="text" v-model.lazy="inputValue" @keyup="sendData">
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
    sendData() {
      //emit iki parametre alır 1 eventin string olarak adı , 2 gönderilecek parametre
      this.$emit('sendToData', this.inputValue)
    }
  }
}
</script>

<style scoped>

</style>