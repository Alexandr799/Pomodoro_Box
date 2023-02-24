import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'

export interface IUseStatistic {
    week:0 | 1 | 3
    day:1| 2 |3 |4 |5 |6 |7
}

const useStatisticByDay = ({week, day}:IUseStatistic) => {

    dayjs.extend(weekday)
    dayjs().weekday()
    return;
}
 
// export default useStatisticByDay;