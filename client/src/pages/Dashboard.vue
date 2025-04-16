<script setup lang="ts">
import {
	ArcElement,
	BarElement,
	CategoryScale,
	type ChartData,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from "chart.js";
import { onMounted, ref } from "vue";
import { Bar, Line, Pie } from "vue-chartjs";
import { getDocuments, getProcessingTime, getUsers } from "../api/analitics";
import Card from "../components/Card.vue";
import { BarOptions, PieOptions } from "../configs/charOptions";
import {
	documentsTransformer,
	processingTimeTransformer,
	usersTransformer,
} from "../utils/transformers/transformers";

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	ArcElement,
);

const docsChartData = ref<ChartData<"pie"> | null>(null);

const usersChartData = ref<ChartData<"bar"> | null>(null);

const procTimeChartData = ref<ChartData<"line"> | null>(null);

onMounted(async () => {
	// Тут запрос делаем
	const resp = await Promise.allSettled([
		getDocuments(),
		getUsers(),
		getProcessingTime(),
	]);
	// Проходимся по всем, парсим то что пришло пока что не дописано
	resp.forEach((res, ind) => {
		if (res.status === "fulfilled") {
			switch (ind) {
				case 0:
					console.log(res.value.data, ind);
					docsChartData.value = documentsTransformer(res.value.data);
					break;
				case 1:
					console.log(res.value.data, ind);
					console.log(usersTransformer(res.value.data));
					usersChartData.value = usersTransformer(res.value.data);
					break;
				case 2:
					console.log(res.value.data, ind);
					procTimeChartData.value = processingTimeTransformer(res.value.data);
					break;
			}
		}
	});
});

const barOptions = ref(BarOptions);
const pieOptions = ref(PieOptions);
const lineOptions = ref(BarOptions);
</script>

<template>

<div class="
  grid w-full h-full
  grid-cols-[max-content_1fr]
  gap-4 p-[100px]
">


    <Card title="Статистика документов">
      <template v-if="docsChartData">
        <Pie 
          :data="docsChartData" 
          :options="pieOptions" 
        />
      </template>
      <template v-else>
        <div class="text-gray-500">Данные загружаются...</div>
      </template>
    </Card>


    <div class=" w-full h-full col-span-2">
      <Card title="Активность пользователей">
			<template v-if="usersChartData">
				<Bar :options="barOptions" :data="usersChartData"/>
      </template>
    
			<template v-else>
        <div class="text-gray-500">Данные загружаются...</div>
      </template>
      </Card>
    </div>

    <div class=" col-span-3 h-full w-full">
      <Card title="Среднее время обработки">
				<template v-if="procTimeChartData">
        <Line :options="lineOptions" :data="procTimeChartData"/>
				</template>

      </Card>
    </div>


  </div>
</template>
