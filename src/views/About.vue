<template>
  <div class="about">
    <h1>Counter working everywhere</h1>
    <h1>{{store.state.counter}}</h1>
  </div>
</template>
<script>
import {inject} from 'vue'
export default {
  setup(){

    const store = inject('store')

    return {
      store
    }

  }
}
</script>
