<template>
  <div>
    <input v-model="value" /> <br />
    <button @click="saveValue">save</button>
    <hr />
    <span>Local Data: {{ newValue }}</span> <br />
    <span>Session Data: {{ newValue2 }}</span> <br />
    <button @click="removeLocalData">remove local data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      newValue: "",
      newValue2: "",
      foo: { name: "vue", age: 34 },
    };
  },
  methods: {
    saveValue() {
      //localStorage.setItem("inputValue", this.value);
      //sessionStorage.setItem("inputNewValue", this.value);
      //this.value = "";
      localStorage.setItem("inputValue", JSON.stringify(this.foo));
    },
    removeLocalData() {
      localStorage.removeItem("inputValue");
      //localStorage.clear();
    },
  },
  mounted() {
    if (localStorage.getItem("inputValue")) {
      this.newValue = localStorage.getItem("inputValue");
    }
    if (sessionStorage.getItem("inputNewValue")) {
      this.newValue2 = sessionStorage.getItem("inputNewValue");
    }
  },
};
</script>

<style>
</style>  