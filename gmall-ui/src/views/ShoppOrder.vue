<template>
  <div class="order">
    <h2>订单详情</h2>
    <div v-if="cartItems.length === 0" class="empty-cart">没有订单信息</div>
    <div v-else>
      <div class="order-items">
        <div v-for="item in cartItems" :key="item.id" class="order-item">
          <div class="item-details">
            <img :src="require('@/assets/images/' + item.image)" alt="Product Image">
            <div class="item-info">
              <h3>{{ item.name }}</h3>
              <p>单价: ￥{{ item.price }}</p>
              <p>数量: {{ item.quantity }}</p>
            </div>
          </div>
          <p class="item-subtotal">小计: ￥{{ item.price * item.quantity }}</p>
        </div>
      </div>
      <div class="order-summary">
        <div class="order-total">
          <h3>订单总计: ￥{{ cartTotal }}</h3>
        </div>
        <button class="back-to-cart" @click="backToSy">结算</button>
        <button class="back-to-cart" @click="backToCart">取消订单，返回购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {

  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    backToCart() {
      this.$router.push({ name: 'ShoppingCart' });
    },
    backToSy(){
      console.log("结算成功")
      this.$router.push({ path: '/' });
    }
  }
};
</script>

<style scoped>
.order {
  padding: 20px;
}

.order h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.empty-cart {
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
}

.order-items {
  margin-top: 20px;
}

.order-item {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.item-details {
  display: flex;
  align-items: center;
}

.item-details img {
  width: 80px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
}

.item-info {
  flex: 1;
}

.item-info h3 {
  margin-top: 0;
  font-size: 18px;
}

.item-info p {
  margin: 5px 0;
  font-size: 16px;
}

.item-subtotal {
  font-weight: bold;
  text-align: right;
  font-size: 18px;
}

.order-summary {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-total {
  font-size: 22px;
  font-weight: bold;
}

.back-to-cart {
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-to-cart:hover {
  background-color: #40a9ff;
}
</style>
