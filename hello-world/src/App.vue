<template>
  <div>
    <p>{{ value }}</p> <!-- Mustaches Interpolation, String Interpolation -->
    <p>{{ Value }}</p>
  </div>
</template>

<script>

export default {
  data() {
    //değişken böyle oluşturulur, data içerisinde return edilmeli
    return {
      value: 'TRY',
      Value: 'try' //Case Sensitive'dir. !!!
    }
  }
}
</script>

<style>
</style>
