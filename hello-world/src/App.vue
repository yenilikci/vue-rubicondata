<template>
  <div>
    <label>
      <!-- v-model .lazy ile birlikte kullanıldığında işlemin bitmesi beklenir -->
      <!-- v-model 'da her şey string olarak algılanır .number ile değiştirebiliriz -->
      <!-- .trim boşlukları siler -->
      <input v-model.lazy="message" placeholder="edit me">
      <input v-model.number="number">
      <textarea v-model="area"></textarea>
      <input type="checkbox" v-model="checked">
      <label>
        <select v-model="selected">
          <option disabled>select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
      </label>

      <label>
        <select v-model="selected2">
          <option v-for="(item,index) in items" v-bind:value="item.value" v-bind:key="index">{{ item.option }}</option>
        </select>
      </label>

      <div>
        <input type="radio" value="1" id="1" v-model="radio">
        <label for="1">1</label>
        <input type="radio" value="2" id="2" v-model="radio">
        <label for="2">2</label>
        <input type="radio" value="3" id="3" v-model="radio">
        <label for="3">3</label>
      </div>

    </label>
    <p>{{ message }}</p>
    <p>{{ area }}</p>
    <p>{{ checked }}</p>
    <p>{{ selected }}</p>
    <p>{{ typeof (number) }}</p>
    <p>{{ selected2 }}</p>
    <p>{{ radio }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      area: '',
      checked: '',
      selected: null,
      selected2: null,
      radio: null,
      number: 0,
      items: [
        {option: 'A', value: 'one'},
        {option: 'B', value: 'two'},
        {option: 'C', value: 'three'},
      ]
    }
  },
  methods: {}
}
</script>

<style>

</style>