<template>
  <div>
    <input v-model="userName" /> <br />
    <button @click="setCookies">set cookie</button>
    <button @click="removeCookies">remove cookie</button>
    <button @click="bcryptToken">bcrypt</button>
    <button @click="compareBcrypt">compare</button>
    <button @click="tokenJwt">jwt</button>
    <button @click="decodedToken">decode</button>
  </div>
</template>

<script>
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default {
  data() {
    return {
      userName: "",
      hashValue: "",
      privateKey: "yenilikci 123",
      token: "",
    };
  },
  methods: {
    setCookies() {
      this.$cookies.set("token", this.userName, "30MIN");
    },
    removeCookies() {
      this.$cookies.remove("token");
    },
    bcryptToken() {
      const dataValue = this;
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(dataValue.userName, salt, function (err, hash) {
          if (err) {
            console.log(err);
            return;
          }
          console.log(`HASH: ${hash}`);
          dataValue.hashValue = hash;
        });
      });
    },
    compareBcrypt() {
      const dataValue = this;
      bcrypt.compare(
        dataValue.userName,
        dataValue.hashValue,
        function (err, res) {
          if (res) {
            console.log("success");
          }
        }
      );
    },
    tokenJwt() {
      this.token = jwt.sign({ user: this.userName }, this.privateKey);
      console.log(this.token);
    },
    decodedToken() {
      const decoded = jwt.verify(this.token, this.privateKey);
      console.log(decoded);
    },
  },
};
</script>

<style scoped>
</style>