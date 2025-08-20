<script setup>
import { ref, onMounted } from 'vue'

const page = ref(null)

onMounted(async () => {
  const res = await fetch('/public/content/pages/home.md')
  page.value = await res.text()
})
</script>

<template>
  <main>
    <h1>Home Page</h1>
    <div v-if="page">
      <pre>{{ page }}</pre>
    </div>
  </main>
</template>