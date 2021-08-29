<template>
  <div id="app">
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.email }} <br />
        <img :src="item.avatar" :alt="item.avatar" />
      </li>
    </ul>
    <input v-model="name" /> <br /><input v-model="job" />
    <button @click="sendUser()">Save User</button>
    <hr />
    <input v-model="id" /> <br />
    <button @click="deleteUser()">Delete User</button>
    <hr />
    <input v-model="id" /> <br />
    <input v-model="name" /> <br /><input v-model="job" />
    <button @click="updateUser()">Update User</button>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        items: [],
        name: "",
        job: "",
        id: null,
      };
    },
    beforeCreate() {
      this.$http.get("https://reqres.in/api/users").then(
        (response) => {
          this.items.push(...response.body.data);
          console.log(response.body.data);
        },
        (response) => {
          //error callback
          console.log(response);
        }
      );
    },
    methods: {
      sendUser() {
        this.$http
          .post("https://reqres.in/api/users", {
            name: this.name,
            job: this.job,
          })
          .then(
            (response) => {
              console.log(response);
              console.log(response.body);
              console.log(response.status);
            },
            () => {
              console.log("error");
            }
          );
      },
      deleteUser() {
        this.$http
          .delete("https://reqres.in/api/users/" + this.id)
          .then((response) => {
            console.log(response);
          });
      },
      updateUser() {
        this.$http
          .put("https://reqres.in/api/users/" + this.id, {
            name: this.name,
            job: this.job,
          })
          .then(
            (response) => {
              console.log(response);
            },
            () => {
              console.log("error");
            }
          );
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .image {
    width: 100px;
    height: auto;
  }
</style>
