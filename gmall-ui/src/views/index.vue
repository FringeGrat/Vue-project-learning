<template>
  <div id="app">
    <header class="hero" id="home">

    </header>

    <section class="about" id="about">
      <h2>精品推荐</h2>
      <p>我们专注于提供最美味的甜品，用心为您制作每一道甜点。</p>
    </section>

    <section class="desserts" id="desserts">
      <h2>特色甜品</h2>
      <div class="dessert-list">
        <div class="dessert-card">
          <img src="@/assets/images/img_11.png" alt="巧克力蛋糕">
          <h3>巧克力蛋糕</h3>
          <p>浓郁的巧克力风味</p>
        </div>
        <div class="dessert-card">
          <img  src="@/assets/images/img_12.png" alt="草莓冰淇淋">
          <h3>草莓冰淇淋</h3>
          <p>清爽的草莓味道</p>
        </div>
        <div class="dessert-card">
          <img   src="@/assets/images/img_13.png" alt="蓝莓派">
          <h3>蓝莓派</h3>
          <p>香甜的蓝莓馅料</p>
        </div>
      </div>
    </section>

    <footer id="contact">
      <p>联系我们: contact@desserts.com | 电话: 123-456-7890</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

#app {
  text-align: center;
}

.hero {
  background-image: url('@/assets/images/bj.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.about, .desserts, footer {
  padding: 2rem;
}

.desserts {
  background: #f9f9f9;
}

.dessert-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

footer {
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

.dessert-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dessert-card img {
  width: 100%;
  border-radius: 8px;
}

.dessert-card h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.25rem;
}

.dessert-card p {
  color: #666;
}
</style>
