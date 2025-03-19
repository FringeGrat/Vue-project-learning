// store/index.js

import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cart: [
                { id: 1, name: '生椰拿铁', price: 299, quantity: 2,image:'img.png' },
                { id: 2, name: '榴莲千层', price: 299, quantity: 1,image:'img_1.png' }
            ]
        };
    },
    mutations: {
        addCart(state,id,image) {
            console.log(image,333)
            let itemInCart = state.cart.find(item => item.id === id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                let obj = {
                    id:3,
                    name: '芳华岁月',
                    image: 'img_2.png',
                    price: 299,
                };
                state.cart.push({ ...obj, quantity: 1 });
            }
            console.log(state.cart,555555)
        },
        removeFromCart(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
        },
        updateQuantity(state, payload) {
            const { productId, quantity } = payload;
            const item = state.cart.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
            }
        }
    },
    actions: {
        addToCart({ commit }, id,image,name,price) {
            console.log(image,77777)
            commit('addCart', id,image,name,price);
        },
        removeProductFromCart({ commit }, productId) {
            commit('removeFromCart', productId);
        },
        updateProductQuantity({ commit }, payload) {
            commit('updateQuantity', payload);
        },
    },
    getters: {
        cartItems: state => state.cart,
        cartTotal: state => {
            return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    }
});

export default store;
