<template>
  <div>
    <p>{{ number + 1 }}</p>
    <p>{{ number * 2 }}</p>
    <p> {{ number === 4 ? 'four' : 'not four' }}</p>
    <p>{{ msg.length }}</p>
    <p>{{ msg.split('').reverse().join('') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 12,
      msg: "this is message"
    }
  },
  methods: {}
}
</script>

<style>

</style>