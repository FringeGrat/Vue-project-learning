<template>
  <div class="order-list">
    <h2>订单列表</h2>
    <div v-if="orders.length === 0" class="empty-orders">没有订单信息</div>
    <div v-else>
      <div class="orders">
        <div v-for="order in orders" :key="order.id" class="order-item">
          <div class="order-header">
            <p class="order-id">订单号: {{ order.id }}</p>
            <p class="order-date">下单时间: {{ formatDateTime(order.date) }}</p>
          </div>
          <div class="order-details">
            <div v-for="item in order.items" :key="item.productId" class="order-item-details">
              <div class="item-info">
                <h3>{{ item.name }}</h3>
                <p class="item-price">单价: ￥{{ item.price }}</p>
                <p class="item-quantity">数量: {{ item.quantity }}</p>
              </div>
              <p class="item-subtotal">小计: ￥{{ item.price * item.quantity }}</p>
            </div>
          </div>
          <p class="order-total">订单总计: ￥{{ getOrderTotal(order.items) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [] // 假设从 Vuex 或其他数据源获取订单数据
    };
  },
  created() {
    // 假设 orders 是从 Vuex 中获取的静态订单数据
    this.orders = [
      {
        id: 'ORD123',
        date: 1623876900000,
        items: [
          { productId: 1, name: '商品A', price: 100, quantity: 2 },
          { productId: 2, name: '商品B', price: 50, quantity: 3 }
        ]
      },
      {
        id: 'ORD456',
        date: 1623963300000,
        items: [
          { productId: 3, name: '商品C', price: 80, quantity: 1 }
        ]
      }
      // 可以添加更多的订单数据
    ];
  },
  methods: {
    formatDateTime(timestamp) {
      const date = new Date(timestamp);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    },
    getOrderTotal(items) {
      return items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  }
};
</script>

<style scoped>
.order-list {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
}

.order-list h2 {
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
}

.empty-orders {
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
  color: #666;
}

.orders {
  margin-top: 30px;
}

.order-item {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.order-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.order-id {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.order-date {
  font-size: 18px;
  color: #666;
}

.order-details {
  margin-top: 20px;
}

.order-item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.item-info {
  flex: 1;
}

.item-info h3 {
  margin-top: 0;
  font-size: 22px;
  margin-bottom: 10px;
  color: #333;
}

.item-info p {
  margin: 0;
  font-size: 18px;
  color: #666;
}

.item-price {
  font-weight: bold;
}

.item-subtotal {
  font-weight: bold;
  font-size: 22px;
  text-align: right;
  color: #333;
}

.order-total {
  font-weight: bold;
  font-size: 24px;
  text-align: right;
  margin-top: 20px;
  color: #333;
}
</style>
