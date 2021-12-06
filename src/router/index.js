import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/views/login/main.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/main.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/main.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/main.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/main.vue')
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('@/views/users/main.vue')
    }
];

const router = createRouter ({
    history : createWebHistory(),
    routes
});
export default router; 