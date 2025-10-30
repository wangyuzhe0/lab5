<script setup lang="ts">
// 移除未使用的 props 参数
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <button @click="goHome" class="home-button">Go Home</button>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

.home-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.home-button:hover {
  background-color: #45a049;
}
</style>
