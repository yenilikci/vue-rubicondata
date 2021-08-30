<template>
  <div>
    Compenent A <br />
    params: {{ this.$route.params.id }}
    <button @click="logConsole">log console</button>
  </div>
</template>

<script>
  export default {
    methods: {
      logConsole() {
        console.log(this.$route);
        console.log(this.$route.params);
      },
    },
  };
</script>
