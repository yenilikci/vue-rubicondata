<template>
  <div>
    <span class="content">
      this is try component
    </span> <br>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Try"
}
</script>

<style>
.content {
  font-size: 22px;
  font-family: Caladea, sans-serif;
  color: royalblue;
}
</style>