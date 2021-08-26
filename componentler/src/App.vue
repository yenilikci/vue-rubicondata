<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</button>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";

export default {
  components: {
    "first": One,
    "second": Two,
    "third": Three
  },
  data() {
    return {
      currentTab: 'first',
      tabs: ["first", "second", "third"]
    }
  }
}
</script>

<style>

</style>