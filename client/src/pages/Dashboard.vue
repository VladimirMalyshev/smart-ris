<script setup lang="ts">
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import Card from "../components/Card.vue";

const options = ref({});

const data = ref({});
</script>

<template>
  <div class="grid w-full h-full grid-cols-[300px_auto] gap-4 grid-rows-[300px_auto] p-[100px]">
    
    <Card>
    <!-- <Bar :options :data/> -->
  </Card>


    <div class=" w-full h-full col-span-2">
      <Card>
      </Card>
    </div>

    <div class=" col-span-3">
      <Card>
        
      </Card>
    </div>


  </div>
</template>
