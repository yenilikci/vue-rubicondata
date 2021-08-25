<template>
  <StaticStyle/>
  <DynamicStyle/>
</template>

<script>
import StaticStyle from "./components/StaticStyle";
import DynamicStyle from "./components/DynamicStyle";

export default {
  name: 'App',
  components: {
    StaticStyle,
    DynamicStyle
  }
}
</script>

<style>
</style>
