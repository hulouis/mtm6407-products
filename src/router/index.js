// src/router/index.js
import { createWebHistory, createRouter } from "vue-router";
import Products from "../views/Products.vue";

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
