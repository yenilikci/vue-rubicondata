<template>
  <div>
    <label>
      Celcius:
      <input type="text" v-model="cel">
    </label>
    <label>
      Fahrenheit:
      <input type="text" v-model="fah">
    </label>
    <label>
      Kelvin:
      <input type="text" v-model="kel">
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cel: 0,
      fah: 0,
      kel: 0
    }
  },
  methods: {},
  watch: {
    // her inputun değişimini izlemek
    // watch genelde asenkron ve büyük işlemler için kullanılır
    // watchte tanımlanınca , değişkenler her değiştiğinde ilgili fonksiyonlar tekrar çalışır
    cel(val) {
      this.cel = val;
      this.fah = (val * 1.8) + 32;
      this.kel = val + 273.15;
    },
    fah(val) {
      this.cel = (val - 32) / 1.8;
      this.fah = val;
      this.kel = ((val - 32) / 1.8) + 273.15;
    },
    kel(val) {
      this.cel = val - 273.15;
      this.fah = ((val - 273.15) * 1.8) + 32;
      this.kel = val;
    }
  }
}
</script>

<style>

</style>