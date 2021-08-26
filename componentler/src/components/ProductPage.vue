<template>
  <div>
    <label>
      <input v-model.lazy="message" @keyup="keyFunc">
    </label>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    myCallBackFunc: Function
  },
  data() {
    return {}
  },
  methods: {
    keyFunc() {
      this.myCallBackFunc(this.message);
    }
  }
}
</script>

<style>

</style>