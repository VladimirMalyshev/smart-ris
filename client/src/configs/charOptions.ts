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
