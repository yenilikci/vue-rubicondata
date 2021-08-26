<template>
  <div>
    <ProductPage product="a" @updateValue="updateMainComponent($event)"/>
    {{ cardValue.length }}
  </div>
</template>

<script>
import ProductPage from "./components/ProductPage";

export default {
  components: {
    ProductPage
  },
  data() {
    return {
      cardValue: [1, 2, 'a', 4]
    }
  },
  methods: {
    updateMainComponent(e) {
      this.cardValue.push(e);
    }
  }
}
</script>

<style></style>