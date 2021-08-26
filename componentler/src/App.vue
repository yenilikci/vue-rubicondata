<template>
  <div>
    <first :title-big="titleValue"/>
  </div>
</template>

<script>
import globalComponents from "./components/globalComponents";

export default {
  components: {
    ...globalComponents
  },
  data() {
    return {
      titleValue: 'this is title'
    }
  }
}
</script>

<style>

</style>