<template>
  <div>
    <div v-if="tryOne === 1"> <!-- computed değeri bir değişken gibi davranır -->
      this is 1
    </div>
    <div v-else-if="tryOne === 2">
      this is 2
    </div>
    <div v-else-if="tryOne === 3">
      this is 3
    </div>
    <div v-else>
      this is 4
    </div>
    <!-- v-if component ve templatelerde kullanılabilir fakat v-show template desteklemez -->
    <!-- v-if ile v-for beraber kullanılmaz, beraber kullanıldığında v-for dışarı yazılır -->
    
    <div v-if="tryRandom">this is bigger
      <!-- eğer birbiri kullanılacak blokların içerisinde aynı elemanlardan kullanılırsa key gerekli -->
      <input placeholder="1" key="1">
    </div>
    <div v-else>this is smaller
      <input placeholder="2" key="2">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false
    }
  },
  methods: {},
  computed: {
    tryOne() {
      return 2;
    },
    tryRandom() {
      const a = Math.random() > 0.5;
      console.log(a);
      return a;
    }
  }
}
</script>

<style>

</style>