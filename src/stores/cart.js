import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAddCart = defineStore('cart',{

    state:()=>({
        cartArray:[
            // { id: 1, name: 'Apple', price: 30, quantity: 2 }
        ]
    }),
    getters:{   
        totalPrice:(state)=>{
            let result = 0
            state.cartArray.forEach(item=>{
                result+=item.totalprice
            })
            return result
        }
    },  
    actions:{
        addCartArray(prod){
            const checkExist = this.cartArray
                                   .some(item => item.id == prod.id) 
            // 檢查購物車清單陣列資料是否已存在
            if (!checkExist) {
                const quality = ref(1)
                const totalprice = computed(()=>prod.price*quality.value)
                const newprodInfo = {
                    //原始資料 ex：{ id: 1, name: 'Apple', price: 30 }
                    ...prod,
                    //增加數量資料
                    quality:quality,
                    //增加單品數量*價格的總金額資料
                    totalprice:totalprice
                }
                this.cartArray.push(newprodInfo)
            }else{
                alert("該商品已加入至購物清單中!")
            }
        },
        addQuality(prodId){

            // 利用 forEach 尋找 cartArray 裡 id 相符的資料，並添加數量
            this.cartArray.forEach((item)=>{
                
                if (item.id == prodId) {
                    item.quality++
                }
            })
            
        },
        reduceQuality(prodId){
            // 利用 forEach 尋找 cartArray 裡 id 相符的資料，並減少數量
            this.cartArray.forEach((item)=>{
                
                if (item.id == prodId) {
                    if (item.quality>0) {
                        item.quality--
                    }
                    // 若數量減到為0時，讓用戶選擇是否要刪除該產品
                    if (item.quality==0) {
                        setTimeout(()=>{
                            this.deleteCartProd(prodId,"qualityZero")
                        }
                        ,500)
                    }
                }
            })
        },
        deleteCartProd(prodId,type){
            const checkDelete = confirm('是否要刪除該筆產品?')
            if (checkDelete) {
                 // 若是，讓 cartArray 利用 filter 重新篩選該 ID 產品的資料，並重新賦值
                 this.cartArray =  this.cartArray.filter(item =>item.id !== prodId)    
             }else{
                 // 若否，則刪除類型是 "數量為0時"，讓該產品數量回復為1
                if (type === 'qualityZero') {
                    this.cartArray.forEach((item)=>{
                        if (item.id == prodId) {
                            item.quality=1
                        }
                    })
                }
                 
             }
        }


    }
})