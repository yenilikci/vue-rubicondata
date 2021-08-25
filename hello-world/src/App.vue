<template>
  <div>
    <!-- string interpolation'ı keser -->
    <p v-pre>{{ value }}</p> <!-- çıktı: {{ value }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'vue'
    }
  },
  methods: {}
}
</script>

<style>

</style>