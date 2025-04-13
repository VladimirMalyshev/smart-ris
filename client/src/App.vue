<script setup lang="ts">
import { ref } from "vue";
import Dashboard from "./pages/Dashboard.vue";
const data = ref("Зачем ты ставишь виндовс");
</script>

<template>
  <div class=" bg-neutral-800 w-full h-full">
    <Dashboard/>
  </div>
</template>
