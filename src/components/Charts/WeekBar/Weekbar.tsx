import { MouseEvent as ReactMouseEvent, useRef } from 'react';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import getHourMinFromMin from '../../../utils/getHourMinFromMIn';

interface IWeekBar {
	onBarClick?: (day: 1 | 2 | 3 | 4 | 5 | 6 | 7) => void;
	active: number;
	dataset: [number, number, number, number, number, number, number];
}

const WeekBar = ({ onBarClick, active, dataset }: IWeekBar) => {
	const refPlot = useRef(null);
	const onClickPlot = (event: ReactMouseEvent<HTMLCanvasElement, MouseEvent>) => {
		if (!refPlot.current) return;
		const element = getElementAtEvent(refPlot.current, event)[0];
		if (!element) return;
		const dayNumber = (element.index + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7;
		if (onBarClick) onBarClick(dayNumber);
	};

	let colorsBars = ['#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79'].map((el, index) =>
		!dataset[index] ? '#C4C4C4' : el
	);

	const colorsXlabels = ['#999999', '#999999', '#999999', '#999999', '#999999', '#999999', '#999999'];

	if (colorsBars[active] && dataset[active]) colorsBars[active] = '#DC3E22';

	if (colorsXlabels[active]) colorsXlabels[active] = '#DC3E22';

	const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
	const data = {
		labels,
		datasets: [
			{
				backgroundColor: colorsBars,
				data: dataset.map(el=>Math.ceil(el/60)),
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		minBarLength: 9,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: { enabled: false },
			title: {
				display: false,
			},
		},
		scales: {
			y: {
				position: 'right' as const,
				color: 'red',
				ticks: {
					callback: function (value: any) {
						return getHourMinFromMin(value as number, ' ч', ' мин', ' ');
					},
					stepSize: 25,
					font: {
						size: 12,
					},
					color: '#333333',
				},
			},
			x: {
				grid: {
					display: false,
				},
				ticks: {
					font: {
						size: 24,
					},
					color: colorsXlabels,
				},
			},
		},
	};
	return <Bar data={data} options={options} ref={refPlot} onClick={onClickPlot} />;
};

export default WeekBar;
