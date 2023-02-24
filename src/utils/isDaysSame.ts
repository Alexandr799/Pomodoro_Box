import dayjs from 'dayjs';

const isDaySame = (day1: number, day2: number) => dayjs.unix(day1).isSame(dayjs.unix(day2), 'day');

export default isDaySame