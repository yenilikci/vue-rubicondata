<template>
  <div>
    <ul>
      <li v-for="(item,index) in items" :key="index">Product Name: {{ item.type }} Stock Quantity: {{
          item.number
        }}
      </li>
      <button @click="tryArray()">Add</button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {type: 'pen', number: 33},
        {type: 'ball', number: 344},
        {type: 'rocket', number: 563},
        {type: 'guitar', number: 64},
        {type: 'table', number: 12},
      ]
    }
  },
  methods: {
    tryArray() {
      //mutation fonk (dizi değerini değiştirir)
      //this.items.push({type: 'pencil', number: 888})
      //this.items.unshift({type: 'pencil', number: 888})
      //const a = this.items.pop()
      //const a = this.items.shift()
      //const a = this.items.splice(1, 2) //start,deleteCount
      //const a = this.items.splice(1, 2, {type: 'pencil', number: 888}); //3.param=items eklenir!
      //diğerleri
      //const a = this.items.concat({type: 'pencil', number: 888});
      //const a = [...this.items, {type: 'pencil', number: 888}]; //spread op. -> sağda yazılan kısım override olur
      //console.log(a)
      //const a = this.items[2] = {type: 'pencil', number: 888};
    }
  }

}
</script>

<style>

</style>