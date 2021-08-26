<template>
  <div>
    <span>
      this is big
    </span> <br>
    <label>
      <input v-model="title" @keyup="eventBusFunction">
    </label>
  </div>
</template>

<script>
import {eventBus} from "../main";

export default {
  name: "Big",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    eventBusFunction() {
      eventBus.$emit('fromBig', this.title)
    }
  }
}
</script>

<style scoped>

</style>