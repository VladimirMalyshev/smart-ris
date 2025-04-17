import type { ChartData } from "chart.js";
import type {
	DocumentsApiResponseType,
	ProcessingTimeApiResponseType,
	UsersApiResponseType,
} from "./types";

// const data = ref({
// 	labels: ["January", "February", "March"],
// 	datasets: [
// 		{
// 			borderRadius: 4,
// 			borderWidth: 3,
// 			borderColor: "rgba(54, 162, 235, 1)",
// 			data: [40, 20, 12],
// 			backgroundColor: "rgba(54, 162, 235, 0.4)",
// 		},
// 	],
// });

const DEFAULT_DATA = {
	borderRadius: 4,
	borderWidth: 3,
	borderColor: "rgba(54, 162, 235, 1)",
	backgroundColor: "rgba(54, 162, 235, 0.4)",
};

export function documentsTransformer(
	resp: DocumentsApiResponseType,
): ChartData<"pie"> {
	return {
		labels: Object.keys(resp.statuses),
		datasets: [
			{
				data: Object.values(resp.statuses),
				...DEFAULT_DATA,
			},
		],
	};
}

export function usersTransformer(resp: UsersApiResponseType): ChartData<"bar"> {
	// Собираем массивы из данных которые пришли
	const labels = [];
	const data = [];

	for (const element of resp) {
		labels.push(element.name);
		data.push(element.documents);
	}

	return {
		labels,
		datasets: [
			{
				data,
				...DEFAULT_DATA,
			},
		],
	};
}

export function processingTimeTransformer(
	resp: ProcessingTimeApiResponseType,
): ChartData<"line"> {
	const labels = [];
	const data = [];

	for (const element of resp) {
		labels.push(element.date);
		data.push(element.hours);
	}

	return {
		labels,
		datasets: [
			{
				data,
				...DEFAULT_DATA,
			},
		],
	};
}
