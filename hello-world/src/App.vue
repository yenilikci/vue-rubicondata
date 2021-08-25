<template>
  <div>
    <!-- v-once ile ilk render sabit kalır , değişken değişse de render sabit kalır -->
    <button v-once v-on:click="changeValue">{{ value }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true
    }
  },
  methods: {
    changeValue() {
      this.value = !this.value;
      console.log(this.value);
    }
  }
}
</script>

<style>

</style>