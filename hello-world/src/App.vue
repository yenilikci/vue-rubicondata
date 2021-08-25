<template>
  <div>
    <label>
      <!-- v-bind ile html attributelerine dinamik olarak değer verebiliriz, bu değerler ya data ya computed'dan gelmeli -->
      <input v-bind:placeholder="inputHolder">
      <input v-bind:maxlength="maxValue">
    </label>
  </div>
</template>

<script>

export default {
  data() {
    return {
      inputHolder: 'try it again',
      maxValue: 10
    }
  }
}
</script>

<style>
</style>
