<script setup>

    import { useAddCart } from './stores/cart'
    const cart = useAddCart()

    // console.log(cart.cartArray);

    const addCart = (prod) =>{
        cart.addCartArray(prod)
        console.log(prod);
        
    }



    
    // 產品資料
    const products = [
     { id: 1, name: 'Apple', price: 30 },
     { id: 2, name: 'Banana', price: 20 },
     { id: 3, name: 'Orange', price: 25 },
    ]


</script>

<template>

        <div class="productBox">
            <div v-for="product in products" class="product">
                    <div>{{ product.id }}</div>
                    <div>{{ product.name }}</div>
                    <div>{{ product.price }}</div>
                    <button :id="product.id" @click="addCart(product)">加入購物車</button>
            </div>
        </div>

        <div class="cart_box">

            <h1>購物車</h1>

            <div class="cart">
                <div class="tittle">
                    <div class="prodName">
                        產品名稱
                    </div>
                    <div class="prodPrice">
                        產品價格
                    </div>
                    <div class="quality">數量</div>
                    <div class="total">總計</div>
                    <div class="quality">操作</div>
                    
                </div>
                <div class="item">

                    <div class="prodName">
                        香蕉
                    </div>
                    <div class="prodPrice">
                        240
                    </div>
                    <div class="quality">
                            <button>+</button>
                            <div>1</div> 
                            <button>-</button>   
                    </div>
                    <div class="total">240</div>

                    <div class="quality">刪除</div>
                </div>
                <div class="totalPrice_box">
                    總金額：<span id="totalPrice">240</span>
                </div>

            </div>
            
        </div>
</template>


<style scoped>
.productBox{
    display: flex;
    flex-direction: row;
    gap: 50px;

    padding: 10px;
}
.product{

    display: flex;
    flex-direction: column;
    gap: 50px;
    border: 1px solid white;
    width: 300px;
    padding: 10px;
}

.cart_box{
    width: 100%;
}
.cart{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    border: 1px solid white;
    padding: 20px;
}
.tittle{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.quality{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 200px;
}
.item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

}
.totalPrice_box{
    display: flex;
    flex-direction: row;
    justify-content: end;
}
.prodName{
    width: 100px;
}
.prodPrice{
    width: 100px;
}
.total{
    width: 100px;
}


</style>

