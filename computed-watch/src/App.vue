<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ reverseMsg }}</p> <!-- bir sefer çalışır diğer seferlerde datayı cache serverdan döner -->
    <p>{{ reverseMsgFunc() }}</p> <!-- methods kısmında tanımlanan her çağrıldığında yeniden bu fonksiyonu çağırır -->
  </div>
  <watch></watch>
</template>

<script>
import Watch from "./Watch";

export default {
  components: {
    Watch
  },
  data() {
    return {
      msg: 'this is message'
    }
  },
  methods: {
    reverseMsgFunc() {
      return this.msg.split('').reverse().join('');
    }
  },
  computed: {
    reverseMsg() {
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>

<style>

</style>
