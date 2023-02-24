import dayjs from 'dayjs';

const isWeekSame = (day1: number, day2: number) => dayjs.unix(day1).isSame(dayjs.unix(day2), 'week');

export default isWeekSame;
