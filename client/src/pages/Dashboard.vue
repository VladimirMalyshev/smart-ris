<script setup lang="ts">
import {
	ArcElement,
	BarElement,
	CategoryScale,
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
import { BarOptions } from "../configs/charOptions";

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

// const docsChartData = ref(null);
// const usersChartData = ref(null);
// const procTimeChartData = ref(null);

onMounted(async () => {
	// Тут запрос делаем
	// const resp = await Promise.allSettled([
	// 	getDocuments(),
	// 	getUsers(),
	// 	getProcessingTime(),
	// ]);
	// Проходимся по всем, парсим то что пришло пока что не дописано
	// resp.forEach((res, ind) => {
	//   if (res.status === "fulfilled") {
	//     switch (ind) {
	//       case 0 :
	//         docsChartData.value = res.value
	//     }
	//   }
	// })
});

const data = ref({
	labels: ["January", "February", "March"],
	datasets: [
		{
			borderRadius: 4,
			borderWidth: 3,
			borderColor: "rgba(54, 162, 235, 1)",
			data: [40, 20, 12],
			backgroundColor: "rgba(54, 162, 235, 0.4)",
		},
	],
});

const options = ref(BarOptions);
</script>

<template>

<div class="
  grid w-full h-full
  grid-cols-[max-content_1fr]
  grid-rows-[min(500px,100%)_1fr]
  gap-4 p-[100px]
">    
    <Card title="Статистика документов">
      <div class="bg-[#0c1008] p-2 w-full h-full rounded-xl">
        <Pie :options :data/>
      </div>
    </Card>


    <div class=" w-full h-full col-span-2">
      <Card title="Активность пользователей">
        <Bar :options :data/>
      </Card>
    </div>

    <div class=" col-span-3">
      <Card title="Среднее время обработки">
        <Line :options :data/>

      </Card>
    </div>


  </div>
</template>
