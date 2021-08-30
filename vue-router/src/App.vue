<template>
  <div id="app">
    vue router
    <hr />
    <router-link :to="'/componenta/' + id">go to ComponentA</router-link> <br />
    <router-link to="/componentb">go to ComponentB</router-link>
    <hr />
    <button @click="routerA">routerA</button>
    <button @click="$router.push('/componentb')">routerB</button>
    <hr />
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        id: 132,
      };
    },
    methods: {
      routerA() {
        this.$router.push("/componenta/" + this.id);
      },
      routerB() {
        this.$router.push(
          "/componentb",
          () => {},
          () => {}
        );
        //replace -> tarayıcı geçmeşini kaydetmez
        //go -> hem ileriye hem geriye gönderebiliriz
        //this.$router.go(-1); -> 1 geri
        //this.$router.back(); -> 1 geriye gider
        //this.$router.forward(); -> 1 ileriye gider
      },
    },
  };
</script>

<style>
  .router-link-active {
    color: aqua;
  }
</style>
