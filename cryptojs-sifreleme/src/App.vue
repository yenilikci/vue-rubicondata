<template>
  <div>
    <input v-model="value" /> <br />
    <button @click="saveData">save</button>
  </div>
</template>

<script>
var CryptoJS = require("crypto-js");
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    saveData() {
      //encode
      const data = CryptoJS.AES.encrypt(
        this.value,
        "yenilikci 123321444"
      ).toString();
      localStorage.setItem("userData", data);
      console.log(data);

      //decode
      var bytes = CryptoJS.AES.decrypt(data, "yenilikci 123321444");
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      console.log(originalText);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>