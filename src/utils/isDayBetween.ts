import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';


const getDateByWeek = (needbaleday:number, firstDay:number, lastday:number) => {
    dayjs.extend(isBetween)
    return dayjs.unix(needbaleday).isBetween(dayjs.unix(firstDay), dayjs.unix(lastday), 'day', '[]')
};

export default getDateByWeek
