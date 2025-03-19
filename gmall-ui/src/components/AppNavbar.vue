<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <router-link :to="{path:'/'}">一个糕手</router-link>
      </div>
      <div class="navbar-links">
        <span :class="{ active: $route.path === '/' }"><router-link :to="{path:'/'}">首页</router-link></span>
          <span   :class="{ active: $route.path === '/productList' }"><router-link :to="{path:'/productList'}">商品</router-link></span>
            <span :class="{ active: $route.path === '/cart' }"><router-link :to="{path:'/cart'}">购物车</router-link></span>
        <span :class="{ active: $route.path === '/orderList' }"><router-link :to="{path:'/orderList'}">订单</router-link></span>

        <span v-if="xx == undefined" :class="{ active: $route.path === '/login' }"><router-link :to="{path:'/login'}">登录</router-link></span>
        <span v-if="xx != undefined"   @click="tc"  :class="{ active: $route.path === '/login' }"><router-link :to="{path:'/login'}">退出登陆</router-link></span>

      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'AppNavbar',
  data(){
    return{
      xx:undefined
    }
  },

  created() {
    this.xx = localStorage.getItem('key');
  },
  methods:{
    tc(){
      localStorage.removeItem('key');
      this.xx = undefined;
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-logo a {
  color: white;
  font-size: 24px;
  text-decoration: none;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-size: 16px;
}

.navbar-links a:hover {
  text-decoration: underline;
}
nav .active a {
  color: #ffd700;
  font-weight: bold;
}
</style>
