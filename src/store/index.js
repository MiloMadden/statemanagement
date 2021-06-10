import {reactive, readonly} from 'vue'

const state = reactive({
    counter: 0, 
    color: 'blue'
})

const methods = {
    increaseCounter(){
        state.counter++
    }, 
    decreaseCounter(){
        state.counter--
    }, 
    setColor(val){
        state.color = val
    }
}

const getters = {
    counterSquared(){
        return state.counter * state.counter
    }
}

export default {
    state: readonly(state), 
    methods, 
    getters
}