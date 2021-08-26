<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</button>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import globalComponents from "./components/globalComponents";

export default {
  components: {
    ...globalComponents
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