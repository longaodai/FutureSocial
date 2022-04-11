import { createWebHistory, createRouter } from "vue-router";
import Product from './components/pages/product.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Product
    }
]

const router = createRouter({
    history: createWebHistory('/configure-admin/'),
    routes,
})

export default router