<template>
  <div>
    <h2>{{ item.number }}</h2>
    <h4>{{ item.content }}</h4>
    <div v-html="value"></div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    value: String
  },
  methods: {}
}
</script>