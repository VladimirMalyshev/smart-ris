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
			display: false,
		},
		tooltip: {
			enabled: true,
		},
		datalabels: {
			color: "#ffffff",
			font: {
				weight: "bold" as const, // Явно указываем тип
				size: 14,
			},
			formatter: (value: number, context: Context): string => {
				const label = context.chart.data.labels?.[context.dataIndex] || "";
				return `${label}\n${value}%`;
			},
		},
	},
	scales: {},
};
