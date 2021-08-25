<template>
  <div>
    <p v-for="i in 4" v-bind:key="i">{{ i }}</p>
    <p v-for="(person,index) in persons" v-bind:key="index">name: {{ person.name }} age: {{ person.age }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [
        {name: 'Melih', age: 22},
        {name: 'Zeynep', age: 10},
        {name: 'Hüsnü', age: 7}
      ]
    }
  },
  methods: {}
}
</script>

<style>

</style>