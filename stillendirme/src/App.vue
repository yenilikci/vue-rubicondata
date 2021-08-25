<template>
  <StaticStyle/>
  <hr>
  <DynamicStyle/>
  <hr>
  <InlineDynamicStyle/>
</template>

<script>
import StaticStyle from "./components/StaticStyle";
import DynamicStyle from "./components/DynamicStyle";
import InlineDynamicStyle from "./components/InlineDynamicStyle";

export default {
  name: 'App',
  components: {
    StaticStyle,
    DynamicStyle,
    InlineDynamicStyle
  }
}
</script>

<style>
</style>
