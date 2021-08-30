<template>
  <div>
    Component B <br />
    <router-link to="/componentb/alert">go to ComponentB alert</router-link>
    <br />
    <router-link to="/componentb/detail">go to ComponentB detail</router-link>

    <router-view />
  </div>
</template>

<script>
  export default {
    watch: {
      $route(to, from) {
        console.log(to);
        console.log("***************");
        console.log(from);
      },
    },
    methods: {
      //yönlendirme kontrolleri için
      beforeRouteUpdate(to, from, next) {
        next(false);
      },
      /*
      beforeRouteEnter(to, from, next) {
        //...
      },
      beforeRouteLeave(to, from, next) {
        //...
      },
      */
    },
  };
</script>
