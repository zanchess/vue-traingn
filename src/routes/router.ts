// router.js
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "../views/MainPage.vue";
import CardPage from "../views/CardPage.vue";
import FormPage from "../views/FormPage.vue";

const routes = [
    { path: '/', component: MainPage },
    { path: '/card', component: CardPage },
    { path: '/form', component: FormPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;