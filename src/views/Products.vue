<script setup>
import { ALL_PRODUCTS_API_URL } from '../utils';
import { RouterLink } from 'vue-router';
import { useFetch } from "@vueuse/core";

// Fetch 数据
const { data } = await useFetch(ALL_PRODUCTS_API_URL, {
  fetchOptions: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
}).json();

// 确定图片根路径
const BASE_URL = "https://mtm6407-week13-p02m.onrender.com";
const products = data.value.data.map(product => ({
  ...product,
  image: {
    ...product.image,
    url: product.image?.url?.startsWith("http")
      ? product.image.url
      : `${BASE_URL}${product.image.url}`,
  },
}));
</script>

<template>
  <h1>Products</h1>
  <ul class="products">
    <li v-for="product in products" :key="product.documentId">
      <RouterLink :to="`/product/${product.documentId}`">
        <!-- 容错逻辑：确保 image.url 存在 -->
        <img
          v-if="product.image && product.image.url"
          :src="product.image.url"
          alt="Product Image"
          width="360"
          height="360"
        />
        <p v-else>Image not available</p>
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <h3>${{ product.price }}</h3>
        <h4 v-if="product.size">SIZE: {{ product.size }}</h4>
        <div class="buy-section" v-if="product.stock > 0">
          <button>Add to cart</button>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style>
.products {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 30px;
}
.products li a,
h1 {
  text-decoration: none;
  color: green;
}
</style>
