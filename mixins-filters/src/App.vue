<template>
  <div>
    <button @click="hello">click</button>
    {{ say }}
  </div>
</template>

<script>
import {newMixin} from "../newMixin";

export default {
  mixins: [newMixin],
  data() {
    return {
      say: 'comp'
    }
  }
}
</script>

<style>
</style>
