<template>
  <div>
    <button @click="shuffle">Shuffle</button>
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="(item, index) in items" :key="index" class="list-item">{{
        item
      }}</span>
    </transition-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNumber: 10,
      };
    },
    methods: {
      randomIndex() {
        return Math.floor(Math.random() * this.items.length);
      },
      add() {
        this.items.splice(this.randomIndex(), 0, this.nextNumber++);
      },
      remove() {
        this.items.splice(this.randomIndex(), 1);
      },
      shuffle() {
        this.items.sort(() => Math.random() - 0.5);
      },
    },
  };
</script>

<style>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30);
  }
  .list-move {
    transition: transform 1s;
  }
</style>
