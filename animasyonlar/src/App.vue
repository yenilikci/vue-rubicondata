<template>
  <div>
    <button @click="clicked()">Toggle</button>
    <!-- appear , appear-class ... -->
    <!-- :duration="{ enter: 2000, leave: 1000 } -->
    <!-- @leave="leave()" @before-enter="beforeEnter()" -->
    <transition name="fade" mode="out-in">
      <component :is="view"></component>
    </transition>
  </div>
</template>

<script>
  import HelloWorldA from "./components/HelloWorldA.vue";
  import HelloWorldB from "./components/HelloWorldB.vue";
  export default {
    data() {
      return {
        show: true,
        view: "HelloWorldA",
      };
    },
    components: {
      HelloWorldA,
      HelloWorldB,
    },
    methods: {
      leave(el, done) {
        done();
      },
      beforeEnter() {
        document;
      },
      clicked() {
        if (this.view === "HelloWorldA") {
          this.view = "HelloWorldB";
        } else {
          this.view = "HelloWorldA";
        }
      },
    },
  };
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.9s ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
