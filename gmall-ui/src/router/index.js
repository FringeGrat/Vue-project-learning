import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../views/ProductList.vue';
import ProductDetail from '../views/ProductDetail.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import Login from '../views/LoginForm.vue';
import Order from '../views/ShoppOrder.vue';
import OrderList from '../views/OrderList.vue';
import Index from '../views/index.vue';
import zc from '../views/zc.vue';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/productList',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/orderList',
        name: 'OrderList',
        component: OrderList
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        props: route => ({ id:route.params.id ,name:route.params.name,price:route.params.price,image:route.params.image,description:route.params.description}) // 传递 product 参数
    },
    {
        path: '/cart',
        name: 'ShoppingCart',
        component: ShoppingCart
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/zc',
        name: 'zc',
        component: zc
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
