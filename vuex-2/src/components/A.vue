<template>
  <div>
    <label>
      <input type="text" v-model="title" />
    </label>
    <button @click="sendTitle">send Title</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "",
      };
    },
    methods: {
      sendTitle() {
        this.$store.dispatch("setTitleActions", this.title);
      },
    },
  };
</script>
