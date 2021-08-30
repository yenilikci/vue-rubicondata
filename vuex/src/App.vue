<template>
  <div id="app">
    {{ this.$store.state.title }} <br />
    {{ this.$store.getters.getTitle }} <br />
    <button @click="changeTitle()">change title</button>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
    methods: {
      changeTitle() {
        //this.$store.commit("setTitle", "new Title");
        this.$store.dispatch("setTitleActions", "big title");
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
