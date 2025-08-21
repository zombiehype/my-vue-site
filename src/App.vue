<template>
  <section v-if="page">
    <h1>{{ page.title }}</h1>
    <h2 v-if="page.subtitle">{{ page.subtitle }}</h2>
    <img v-if="page.image" :src="page.image" alt="" />
    <p v-if="page.microcopy">{{ page.microcopy }}</p>

    <div v-for="employee in page.employees">
      <h3>{{ employee.name }}</h3>
      <div>{{ employee.role }}</div>
    </div>
  </section>
</template>

<script>
import { loadPage } from "@/utils/loadPage";

export default {
  data() {
    return { page: null };
  },
  async created() {
    this.page = await loadPage("about");
  },
};
</script>

<style>
h1,h2,h3,h4 { font-weight: bold;}
</style>