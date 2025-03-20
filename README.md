# 项目介绍

## 整体思路
本项目使用 **Vue Router** 实现导航链接的跳转，并利用 **localStorage** 存储登录状态，以动态显示不同的链接内容。同时，根据当前路由高亮显示选中的链接。此外，还使用了 Vue.js 的生命周期钩子 `created` 来在组件创建时检查用户的登录状态。

## 功能实现

### 1. 导航栏结构
在模板部分，定义了一个 `<nav>` 标签作为导航栏的容器，其中包括以下部分：

- **Logo 部分**：使用 `router-link` 组件实现跳转到首页。
- **导航链接部分**：包含 `首页`、`商品`、`购物车` 和 `订单`，每个链接都使用 `router-link` 组件，并根据 `$route.path` 判断当前路由是否匹配该链接。
- **登录/退出链接**：根据 `localStorage` 是否存储 `key` 值来判断用户登录状态，并动态显示 `登录` 或 `退出登录` 选项。

### 2. 代码示例

#### 导航栏模板代码：
```vue
<template>
  <nav>
    <!-- Logo部分 -->
    <router-link to="/">Logo</router-link>
    
    <!-- 导航链接部分 -->
    <ul>
      <li :class="{ active: $route.path === '/' }">
        <router-link to="/">首页</router-link>
      </li>
      <li :class="{ active: $route.path === '/products' }">
        <router-link to="/products">商品</router-link>
      </li>
      <li :class="{ active: $route.path === '/cart' }">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li :class="{ active: $route.path === '/orders' }">
        <router-link to="/orders">订单</router-link>
      </li>
    </ul>

    <!-- 登录/退出登录 -->
    <div>
      <span v-if="!isLoggedIn">
        <router-link to="/login">登录</router-link>
      </span>
      <span v-else @click="logout">退出登录</span>
    </div>
  </nav>
</template>
```

#### 登录状态管理：
```vue
<script>
export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  created() {
    this.isLoggedIn = !!localStorage.getItem('key');
  },
  methods: {
    logout() {
      localStorage.removeItem('key');
      this.isLoggedIn = false;
    }
  }
};
</script>
```

### 3. 样式示例（可选）
```css
nav ul {
  list-style: none;
  display: flex;
}
nav ul li {
  margin-right: 15px;
}
.active {
  font-weight: bold;
  color: red;
}
```

## 总结
1. 使用 Vue Router 实现页面跳转。
2. 通过 `localStorage` 存储用户登录状态，并根据状态动态渲染登录/退出选项。
3. 通过 `$route.path` 使当前选中的导航链接高亮。
4. 使用 `created` 钩子在组件加载时检查用户的登录状态。

这样，我们的导航栏就具备了基本的动态展示和登录控制功能！
