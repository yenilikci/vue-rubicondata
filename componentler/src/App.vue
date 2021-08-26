<template>
  <div>
    <!-- emit edilen sendToData 'dan gelen veri $event ile sendTo datasına atanır -->
    <ProductPage @sendToData="sendTo = $event"/>
    <span>{{ sendTo }}</span>
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
      sendTo: '',
    }
  },
  methods: {}
}
</script>

<style></style>