import dayjs from 'dayjs';

const todayWeekDay = () => {
	const today = dayjs().day() === 0 ? 7 : dayjs().day();
	return today as 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export default todayWeekDay;
