<template>
  <div>
    this is component A <br>
    <slot name="title">
      title <!-- fallback content - yedek içerik -->
    </slot>
    <slot name="try">
      try
    </slot>
    <slot name="content" :person="person">
      {{ person.age }}
    </slot>
  </div>
</template>

<script>
export default {
  name: "ComponentA",
  data() {
    return {
      person: {name: 'Melih', age: 22}
    }
  }
}
</script>

<style scoped>

</style>