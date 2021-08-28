<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <!-- appear , appear-class ... -->
    <!-- :duration="{ enter: 2000, leave: 1000 } -->
    <transition name="bounce">
      <p v-if="show">
        Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        reprehenderit iusto at illum beatae. Voluptatum magnam deserunt, minima,
        amet labore laborum voluptates, natus nam blanditiis quae id ea a
        excepturi.
      </p>
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
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
