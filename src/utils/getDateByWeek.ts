import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';

const getDateByWeek = (week: number, day: 1 | 2 | 3 | 4 | 5 | 6 | 7) => {
	dayjs.extend(weekday);
	const neededWeek = day === 7 ? week + 1 : week;
	const anglosaxDay = [1, 2, 3, 4, 5, 6, 0][day - 1];
	const ISODate = dayjs()
		.weekday(anglosaxDay + 7 * neededWeek)
		.set('hours', 0)
		.set('minutes', 0)
		.set('seconds', 0)
		.set('milliseconds', 0)
		.toISOString();
	return dayjs(ISODate).unix();
};

export default getDateByWeek;
