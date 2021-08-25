<template>
  <div>
    <p>{{ vue }}</p>
    <p v-html="vue"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {vue: '<a href="https://www.vue.org">vue web</a>'}
  },
  methods: {}
}
</script>

<style>

</style>