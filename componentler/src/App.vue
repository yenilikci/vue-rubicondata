<template>
  <div>
    <Try v-html="slotValue">
      <!-- this is for slot -->
    </Try>
  </div>
</template>

<script>
import Try from "./components/Try";

export default {
  components: {
    Try
  },
  data() {
    return {
      slotValue: '<h3>this is slot with html</h3>'
    }
  }
}
</script>

<style>

</style>