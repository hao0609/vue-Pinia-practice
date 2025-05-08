import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 先定義一個 Store名稱 'counter'

// optionAPI
export const useCounterStore = defineStore('counter', {
    // state 定義資料
    state: () => ({
        count: 0,
    }),
    // getters 定義計算屬性，類似 computed
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    // actions 定義方法
    actions: {
        increment() {
            this.count++
        },
        decrement() {

            this.count--
        },
        reset() {
            this.count=0
        }
    },
})

//conpesitionAPI

export const userCountersStore_2 =defineStore('counter_2',()=>{

    const count = ref(0)
    const doubleCount = computed(()=>count.value*2)
    const increment = ()=>{
        count.value++
    }
    return{
        count,
        doubleCount,
        increment
    }


})