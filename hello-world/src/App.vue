<template>
  <div>
    <label>
      <!-- v-bind ile html attributelerine dinamik olarak değer verebiliriz, bu değerler ya data ya computed'dan gelmeli -->
      <input v-bind:placeholder="inputHolder" v-on:change="changeInput($event)">
      <input v-bind:maxlength="maxValue">
      <!-- v-on ile html içerisindeki eventleri yakalarız , metotları da çalıştırabiliyoruz -->
      <button v-on:click="buttonClick">Tıkla</button>
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
  },
  methods: {
    changeInput($event) {
      console.log($event.target.value);
    },
    buttonClick() {
      console.log("clicked");
    }
  }
}
</script>

<style>
</style>
