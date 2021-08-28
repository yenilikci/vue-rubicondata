<template>
  <div>
    {{ 'hello' | capitalize }} <br>
    {{ 'hello' | reverseValue }} <br>
    {{ 'hello' | reverseValue | capitalize }} <br>
    {{ 'hi' | newCapitalize }}
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  filters: {
    capitalize(value) {
      if (!value) ''
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    reverseValue(value) {
      return value.split('').reverse().join('');
    }
  }
}
</script>

<style>

</style>
