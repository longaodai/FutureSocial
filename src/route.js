import { createWebHistory, createRouter } from "vue-router";
import Home from './components/pages/home.vue';
import Product from './components/pages/product.vue';
import ProductDetail from './components/pages/product-detail.vue';
import RegisterPage from './components/pages/auth/register.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/product/:id',
        name: 'product-detail',
        component: ProductDetail
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router