<template>
  <div>
    <product-page :myCallBackFunc="otherFunc" :message="val"/>
    <span>{{ val }}</span>
  </div>
</template>

<script>
import ProductPage from "./components/ProductPage";

export default {
  components: {ProductPage},
  data() {
    return {
      val: ''
    }
  },
  methods: {
    otherFunc(message) {
      this.val = message
    }
  }
}
</script>

<style>

</style>