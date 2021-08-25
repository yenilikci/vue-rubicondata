<template>
  <div>
    {{ newArray }}
    <button v-on:click="changeArray"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      A: ['a', 'b', 'c', 'd', 'e'],
      B: [2, 1, 3, 6, 5, 4],
      newArray: []
    }
  },
  methods: {
    changeArray() {
      // this.newArray = this.A.map(item => item === 'c' ? 'newC' : item);
      // this.newArray = this.A.filter(item => item === 'c');
      // this.newArray = this.B.filter(item => item % 2 === 0);
      // this.newArray = this.A.reverse();
      this.newArray = this.B.sort(function () {
        // return a - b;
        return 0.5 - Math.random();
      });
    }
  }
}
</script>

<style>

</style>