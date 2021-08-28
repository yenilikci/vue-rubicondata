<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <span v-if="show">Hello</span>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
      };
    },
  };
</script>

<style>
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
</style>
