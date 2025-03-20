<template>
  <div>
    <header class="navbar">
      <div class="logo">一个糕手</div>
      <nav>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/products">商品</router-link></li>
          <li><router-link to="/cart">购物车</router-link></li>
          <li><router-link to="/orders">订单</router-link></li>
          <li><router-link to="/login">登录</router-link></li>
        </ul>
      </nav>
    </header>
    <div class="login-background">
      <div class="login-main">
        <div class="login-container">
          <h2>用户登录</h2>
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="username">用户名:</label>
              <input
                id="username"
                v-model="username"
                type="text"
                placeholder="请输入用户名"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="password">密码:</label>
              <input
                id="password"
                v-model="password"
                type="password"
                placeholder="请输入密码"
                class="form-control"
              />
            </div>
            <button type="submit" class="btn btn-primary">登录</button>
          </form>
          <button @click="this.$router.push({ name: 'zc' });" class="btn btn-secondary">还没有账号，点击立即注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginForm',
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const onSubmit = () => {
      // 模拟登录成功
      if (username.value === 'user' && password.value === '111111') {
        alert('登录成功');
        localStorage.setItem('key', 'user');
        router.push({ name: 'ProductList' }); // 跳转到商品浏览页面
      } else {
        alert('用户名或密码错误');
      }
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.navbar {
  width: 100%;
  height: 60px;
  background: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar ul {
  list-style: none;
  display: flex;
}

.navbar ul li {
  margin: 0 15px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
}

.login-background {
  width: 100vw;
  height: calc(100vh - 60px);
  position: absolute;
  top: 60px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/images/mall-background.jpg');
  background-size: cover;
  background-position: center;
}

.login-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}