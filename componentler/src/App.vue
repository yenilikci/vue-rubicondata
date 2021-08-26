<template>
  <div>
    <ComponentA>
      <!-- name ile eşleştirme yapmak için v-slot: veya # kullanabiliriz -->
      <template v-slot:title>
        <h2>this is title</h2>
      </template>

      <template v-slot:[slot2]>
        <h2>this is try</h2>
      </template>

      <template #content="{person}">
        <h2>this is content</h2>
        {{ person.name }}
      </template>

    </ComponentA>

  </div>
</template>

<script>
import ComponentA from "./components/ComponentA";

export default {
  components: {
    ComponentA
  },
  data() {
    return {
      slot2: 'try'
    }
  }
}
</script>

<style></style>