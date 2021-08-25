<template>
  <div>

    <div :class="{class1: value}">
      this is try
    </div>

    <div :class="{class1: tryOne}">
      this is try
    </div>

    <div :class="{class1: tryOne2()}">
      this is try
    </div>

    <div :class="{tryNewOne}">
      this is try
    </div>

    <div :class="[tryNewOne,{class1: tryOne2()}]">
      this is try
    </div>


  </div>
</template>

<script>
export default {
  name: "DynamicStyle",
  data() {
    return {
      value: true,
      //value: false,
    }
  },
  methods: {
    tryOne2() {
      return !this.value;
    }
  },
  computed: {
    tryOne() {
      return !this.value;
    },
    tryNewOne() {
      return {
        class1: this.value
      }
    }
  }
}
</script>

<style scoped>
.class1 {
  background-color: red;
  color: aqua;
}
</style>