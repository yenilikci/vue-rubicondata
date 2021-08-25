<template>
  <div id="app">
    <span v-colorchange:bold.border="'red'">try</span> <br>
    <span v-colorchange="'yellow'">try</span> <br>
    <span v-colorchange="{color:'green',fontsize:''}">try</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  directives: {
    colorchange: {
      mounted(el, binding) {
        console.log(binding)
        console.log("*************")
        console.log(binding.name)
        if (typeof el === "object") {
          el.style.color = binding.value.color
        }
        el.style.color = binding.value
        console.log("directive work");
        if (binding.modifiers.border) {
          el.style.border = 'thick solid #0000ff'
          console.log("directive work white modifiers");
        }
        if (binding.arg.bold) {
          el.style.fontWeight = '600';
        }
      }
    }
  }
}
</script>

<style>

</style>