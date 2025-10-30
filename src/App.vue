<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialias">
    <SpeedInsights />

    <header>
      <h1 class="text-2xl font-bold my-4">Deployed with Vercel</h1>
      <div class="wrapper">
        <nav class="py-6">
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" to="/">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" to="/about">About</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" to="/students">Students</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
h2 {
  font-size: 20px;
}
</style>
