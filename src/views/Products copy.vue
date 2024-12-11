<script setup>
import { SINGLE_PRODUCT_API_URL } from "../utils";
import { useRoute } from "vue-router";
import { useFetch } from "@vueuse/core";

const route = useRoute();
const productId = route.params.id;

const { isFetching, data } = await useFetch(SINGLE_PRODUCT_API_URL(productId), {
  fetchOptions: {
    mode: "no-cors",
  },
}).json();

const product = data.value.data;
</script>

<template>
  <h1>Products</h1>

  <ul class="products">
    <li v-for="product in products">
      <RouterLink :to="`/product/${product.documentId}`">
        <img :src="product.image.url" width="360" height="360" />
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
