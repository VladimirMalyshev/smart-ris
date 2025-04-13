<script setup lang="ts">
const { title } = defineProps<{
	title?: string;
}>();
</script>

<template>

  <div class=" flex w-full h-full flex-col gap-5 p-5 bg-neutral-600 box-border rounded-4xl">
    <h3 class=" text-2xl font-semibold shrink-0">{{ title }}</h3>
    <div class="bg-[#0c1008] p-2 w-full h-full rounded-xl flex-1">
      <slot/>
    </div>
  </div>

</template>
