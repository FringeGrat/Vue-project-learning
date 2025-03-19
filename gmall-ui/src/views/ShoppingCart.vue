<template>
  <div class="shopping-cart">
    <h2>购物车</h2>
    <div v-if="cartItems.length === 0" class="empty-cart">购物车是空的</div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <div class="item-details">
          <div class="item-image">
            <img :src="require('@/assets/images/' + item.image)" alt="Product Image">
          </div>
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p>单价: ￥{{ item.price }}</p>
          </div>
        </div>
        <div class="item-controls">
          <p>数量:
            <input type="number" v-model.number="item.quantity" @input="updateQuantity(item.id, item.quantity)" min="1">
            <button @click="removeFromCart(item.id)">删除</button>
          </p>
          <p class="item-subtotal">小计: ￥{{ item.price * item.quantity }}</p>
        </div>
      </div>
      <div class="cart-total">
        <h3>总计: ￥{{ cartTotal }}</h3>
        <button class="checkout-button" @click="checkout">去结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    ...mapActions(['removeProductFromCart', 'updateProductQuantity']),
    removeFromCart(productId) {
      this.removeProductFromCart(productId);
    },
    updateQuantity(productId, quantity) {
      this.updateProductQuantity({ productId, quantity });
    },
    checkout() {
      this.removeProductFromCart();
      this.$router.push({ name: 'Order' });
    }
  }
};
</script>

<style scoped>
.shopping-cart {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

.shopping-cart h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.empty-cart {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  color: #666;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}

.item-details {
  display: flex;
  align-items: center;
}

.item-image {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 20px;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info {
  flex: 1;
}

.item-info h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.item-info p {
  margin: 5px 0;
  color: #666;
}

.item-controls {
  display: flex;
  align-items: center;
}

.item-controls p {
  margin: 5px 0;
}

.item-controls input[type="number"] {
  width: 50px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.item-controls button {
  background-color: #f5222d;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
}

.item-controls button:hover {
  background-color: #ff4d4f;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.cart-total h3 {
  font-size: 24px;
  color: #333;
  margin: 0;
}

.checkout-button {
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background-color: #40a9ff;
}
</style>
