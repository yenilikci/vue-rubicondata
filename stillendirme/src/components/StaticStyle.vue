<template>
  <div>
    <div id="container">

    </div>
    <div class="comments inside">

    </div>
    <div class="inside">
      <h1 style="font-size: 24px; margin: 20px;">try</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaticStyle"
}
</script>

<style>
#container {
  color: red;
}

.comments {
  color: blue;
}

.inside {
  font-style: italic;
}

h1 {
  font-size: 12px;
}
</style>