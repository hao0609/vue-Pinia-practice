import { defineStore } from 'pinia'

export const useAddCart = defineStore('cart',{

    state:()=>({
        cartArray:[
            // { id: 1, name: 'Apple', price: 30, quantity: 2 }
        ]
    }),
    getters:{   

    },  
    actions:{
        addCartArray(prod){
           this.cartArray.push(prod)
        }
    }

})