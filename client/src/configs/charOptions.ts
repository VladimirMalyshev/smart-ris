import type { Context } from "chartjs-plugin-datalabels";

const colors = {
	grid: "#24242c",
	ticksText: "#95959f",
};

export const BarOptions = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
		},
	},
	scales: {
		x: {
			grid: {
				color: colors.grid,
			},
			ticks: {
				color: colors.ticksText,
			},
		},
		y: {
			grid: {
				color: colors.grid,
			},
			ticks: {
				color: colors.ticksText,
			},
		},
	},
};
export const PieOptions = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false, // Легенду отключаем, если нужны подписи прямо на сегментах
		},
		tooltip: {
			enabled: true, // Включить всплывающие подсказки (опционально)
		},
		// Добавляем плагин для подписей на сегментах
		datalabels: {
			color: "#ffffff", // Цвет текста
			font: {
				weight: "bold",
				size: 14,
			},
			formatter: (value: number, context: Context): string => {
				const label = context.chart.data.labels?.[context.dataIndex] || "";
				return `${label}\n${value}%`;
			},
		},
	},
	// Отключаем ВСЕ оси и сетки (они не нужны для круговой диаграммы)
	scales: {},
};
