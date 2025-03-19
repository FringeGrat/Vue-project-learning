<template>
  <div class="product-detail">
    <div class="container">
      <div class="left-column">
        <img :src="require('@/assets/images/' + image)" alt="Product Image" class="main-image" />
      </div>
      <div class="right-column">
        <h1 class="product-title">商品名称：{{ name }}</h1>
        <p class="product-price">商品价格：￥{{ price }}</p>
        <p class="product-description">{{ description }}</p>
<!--        <button @click="addToCart" class="add-to-cart-button">加入购物车</button>-->
        <button @click="addToCart(id,image,name,price)" class="add-to-cart-button">添加到购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
   description: {
     type: String,
     required: true
   },
  },
  mounted() {
    console.log(this.id,1111);
  },
  methods: {
    ...mapActions(['addToCart']),
  }
};
</script>

<style scoped>
.product-detail {
  padding: 20px;
  background-color: #f5f5f5;
}

.container {
  display: flex;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.left-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-image {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border: 1px solid #e5e5e5;
}

.right-column {
  flex: 2;
  padding: 0 20px;
}

.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.product-price {
  font-size: 20px;
  color: #e93e30;
  margin-bottom: 20px;
}

.product-description {
  font-size: 16px;
  margin-bottom: 20px;
}

.add-to-cart-button, .buy-now-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.add-to-cart-button {
  background-color: #ff5000;
  color: white;
  margin-right: 10px;
}

.add-to-cart-button:hover {
  background-color: #e93e30;
}

.buy-now-button {
  background-color: #f60;
  color: white;
}

.buy-now-button:hover {
  background-color: #d9534f;
}
</style>
