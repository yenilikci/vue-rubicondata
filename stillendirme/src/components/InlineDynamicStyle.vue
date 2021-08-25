<template>

  <div :style="styleObj">
    this is try
  </div>

  <div :style="{color:activeColor,fontSize: fontSize1}">
    this is try
  </div>

  <div :style="[styleObj,styleObj2]">
    this is try
  </div>

</template>

<script>
export default {
  name: "InlineDynamicStyle",
  data() {
    return {
      activeColor: 'blue',
      fontSize1: '20px',
      styleObj: {
        fontSize: '34px',
        color: 'red',
        fontStyle: 'italic'
      },
      styleObj2: {
        fontSize: '34px',
        color: 'yellow'
      }
    }
  }
}
</script>

<style>

</style>