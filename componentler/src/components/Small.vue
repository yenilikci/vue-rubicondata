<template>
  <div>
    <span>
      this is small
    </span>
    <label>
      <span>
      {{ message }}
      </span>
    </label>
  </div>
</template>

<script>
import {eventBus} from "../main";

export default {
  name: "Small",
  data() {
    return {
      message: ''
    }
  },
  created() {
    eventBus.$on('fromBig', (title) => {
      this.message = title;
    })
  }
}
</script>

<style scoped>

</style>