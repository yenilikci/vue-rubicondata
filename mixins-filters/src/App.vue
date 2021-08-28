<template>
  <div>
    {{ 'hello' | capitalize }} <br>
    {{ 'hello' | reverseValue }} <br>
    {{ 'hello' | reverseValue | capitalize }} <br>
    {{ 'hi' | newCapitalize }}

    <div>
      {{ 20000 | currency }} <br>
      {{ someDate | moment("dddd,MMMM Do YYYY") }} <br>
      {{ someDate | moment("from", "now", true) }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someDate: '12.12.12'
    }
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
