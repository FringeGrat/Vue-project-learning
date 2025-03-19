<template>
  <div class="login-main">
    <div class="login-container">
      <h2>用户注册</h2>
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
        <div></div>
        <button type="submit" class="btn btn-primary">注册</button>
      </form>
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

        alert('注册成功');
        localStorage.setItem('key', 'user');
        router.push({ name: 'ProductList' }); // 跳转到商品浏览页面

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
.login-container {
  width: 100%;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.login-main {

  background-image: url('../assets/images/mall-background.jpg'); /* 设置背景图像 */
  background-size: cover; /* 背景图像尺寸设置为 cover */
  background-position: center; /* 背景图像居中显示 */
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
