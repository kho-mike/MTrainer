<script setup>
import { RouterLink, RouterView } from "vue-router";
import Exercise from "./content/Exercise.vue";
</script>

<template>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.content {
  background-color: #ffffff;
  border-radius: 3vh;
  min-height: 90vh;
  padding: 1rem;
}
</style>
