import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

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
            console.log(prodId);
            
            this.cartArray.forEach((item)=>{
                console.log(item.id);
                
                if (item.id == prodId) {
                    item.quality++
                }else{
                    // 
                    
                }
            })
            
      },
        reduceQuality(quality){
            // if (quality>0) {
            //   return  quality.value--
            // }
        }

    }
})