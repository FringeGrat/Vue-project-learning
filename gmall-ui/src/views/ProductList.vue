<template>
  <div class="product-list">
    <h2>商品列表</h2>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="require('@/assets/images/' + product.image)" alt="Product Image" class="product-image">
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="price">价格: {{ product.price }} 元</p>
          <p class="stock">库存: {{ product.stock }} 件</p>
          <p class="description">{{ product.description }}</p>
          <router-link
              :to="{ name: 'ProductDetail', params: { id: product.id, name: product.name,image:product.image,price:product.price,stock:product.stock,description:product.description } }">
            查看详情
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        {
          id: 1,
          name: '生椰拿铁',
          price: 299,
          stock: 10,
          description: '生椰拿铁咖啡奶油椰奶冻薄脆夹心生日蛋糕同城配送\n。',
          image: 'img.png' // 示例图片地址
        },
        {
          id: 2,
          name: '榴莲千层',
          price: 299,
          stock: 5,
          description: '榴莲千层雪糯米千层生日蛋糕动物奶油同城配送',
          image: 'img_1.png' // 示例图片地址
         },
        {
          id: 3,
          name: '芳华岁月',
          price: 299,
          stock: 8,
          description: '芳华岁月手绘小花朵母亲节送妈妈生日蛋糕同城配送',
          image: 'img_2.png' // 示例图片地址
        },
        {
          id: 4,
          name: '玫瑰乳酪',
          price: 299,
          stock: 8,
          description: '玫瑰乳酪奶油荔枝蜜桃果肉夹心水果生日蛋糕同城配送',
          image: 'img_3.png' // 示例图片地址
        },
        {
          id: 5,
          name: '杨梅荔枝',
          price: 299,
          stock: 8,
          description: '杨梅荔枝夹心杨梅动物奶油水果生日蛋糕同城配送',
          image: 'img_4.png' // 示例图片地址
        },
        {
          id: 6,
          name: '冬日恋歌',
          price: 299,
          stock: 8,
          description: '冬日恋歌圆形动物奶油草莓水果生日蛋糕同城配送\n',
          image: 'img_5.png' // 示例图片地址
        },
        {
          id: 7,
          name: '共赴青春',
          price: 299,
          stock: 8,
          description: '共赴一场青春春游蛋糕卡通聚会生日蛋糕同城配送',
          image: 'img_6.png' // 示例图片地址
        },
        {
          id: 8,
          name: '百香芒芒',
          price: 299,
          stock: 8,
          description: '百香芒芒香蕉芒果百香果动物奶油生日蛋糕同城配送',
          image: 'img_7.png' // 示例图片地址
        }
        // 可以根据需要添加更多商品数据
      ]
    };
  }
};
</script>

<style scoped>
.product-list {
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 1.2rem;
}

.price {
  color: #f40;
  font-weight: bold;
}

.stock {
  margin-bottom: 8px;
}

.description {
  margin-bottom: 20px;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  background-color: #f40;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #d30;
}
</style>
