<template>

        <div class="productBox">
            <div v-for="product in products" class="product">
                    <div>{{ product.id }}</div>
                    <div>{{ product.name }}</div>
                    <div>{{ product.price }}</div>
                    <button :id="product.id">加入購物車</button>
            </div>
        </div>
</template>


<script setup>
    const products = [
     { id: 1, name: 'Apple', price: 30 },
     { id: 2, name: 'Banana', price: 20 },
     { id: 3, name: 'Orange', price: 25 },
    ]
</script>


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



</style>

