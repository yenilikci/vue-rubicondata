<template>
  <div>
    <first title-big="this is title" :title="titleValue"/>
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
      titleValue: 'title value'
    }
  }
}
</script>

<style>

</style>