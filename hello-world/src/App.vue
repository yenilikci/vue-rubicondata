<template>
  <div>
    <label>
      <!-- v-bind ile html attributelerine dinamik olarak değer verebiliriz, bu değerler ya data ya computed'dan gelmeli -->
      <input v-bind:placeholder="inputHolder" v-on:change="changeInput($event)" v-if="see">
      <input v-bind:maxlength="maxValue" v-else>
      <!-- v-on ile html içerisindeki eventleri yakalarız , metotları da çalıştırabiliyoruz -->
      <button v-on:click="buttonClick" v-if="tryIt()">Tıkla</button>
      <input placeholder="input 1" v-show="see">
      <!-- v-show DOM'un her zaman üzerindedir , v-if v-else 'de ise her eklenen element silinir ve tekrar eklenir -->
    </label>
  </div>
</template>

<script>

export default {
  data() {
    return {
      inputHolder: 'try it again',
      maxValue: 10,
      see: true
    }
  },
  methods: {
    changeInput($event) {
      console.log($event.target.value);
    },
    buttonClick() {
      console.log("clicked");
    },
    tryIt() {
      if (this.see === true) {
        return false;
      } else {
        return true;
      }
    }
  }
}
</script>

<style>
</style>
