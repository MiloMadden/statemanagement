<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div :style="{color: store.state.color}">
      {{store.state.counter}}
    </div>

    <div>
      {{store.state.counter}}
      <sup>2</sup> =
      {{store.getters.counterSquared()}}
    </div>

    <div>
      <input type="text" v-model="colorCode">
    </div>

    <div>
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import {inject, computed} from 'vue'
export default {
  name: 'Home',
  setup(){

    const store = inject('store')

    const colorCode = computed({
      get(){
        return store.state.color
      }, 
      set(val){
        store.methods.setColor(val)
      }
    })

    return{
      store, 
      colorCode
    }

  }
}
</script>
