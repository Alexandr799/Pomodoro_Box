import { IweekState } from '../../redux/reducers/statsReducer';
import getDateByWeek from '../../utils/getDateByWeek';
import isDayBetween from '../../utils/isDayBetween';
import isDaySame from '../../utils/isDaysSame';
import todayWeekDay from '../../utils/todayWeekDay';
import { IToDo } from '../types';
import { LocalStorageStatDB, CurretnItemStats } from '../types';
import { IDBService } from './types';

export default class DBService implements IDBService {
	updateStats() {
		const statList = JSON.parse(localStorage.getItem('stats') || '[]') as LocalStorageStatDB<CurretnItemStats>;
		const lastStatday = getDateByWeek(-2, 1);
		let cleanStats: LocalStorageStatDB<CurretnItemStats> = [];
		for (let i = 0; i < statList.length; i++) {
			if (statList[i].datetime >= lastStatday) {
				cleanStats = [...statList.slice(i, statList.length)];
				break;
			}
		}
		localStorage.setItem('stats', JSON.stringify(cleanStats));
	}

	getToDoList = () => JSON.parse(localStorage.getItem('toDoList') || '[]') as IToDo[];

	pushDBStat(item: CurretnItemStats) {
		const list = JSON.parse(localStorage.getItem('stats') || '[]') as LocalStorageStatDB<CurretnItemStats>;
		list.push(item);
		localStorage.setItem('stats', JSON.stringify(list));
	}

	updateToDoList(list: IToDo[]) {
		localStorage.setItem('toDoList', JSON.stringify(list));
	}

	getStatsByDay(week: number, day: 1 | 2 | 3 | 4 | 5 | 6 | 7) {
		const statList = JSON.parse(localStorage.getItem('stats') || '[]') as LocalStorageStatDB<CurretnItemStats>;
		const needbaleDay = getDateByWeek(week, day);
		const today = getDateByWeek(0, todayWeekDay());
		const firstDay = getDateByWeek(-2, 1);
		if (!isDayBetween(needbaleDay, firstDay, today)) {
			return {
				tomatoCount: 0,
				breakTime: 0,
				breakCount: 0,
				workTime: 0,
			};
		}

		const res = {
			tomatoCount: 0,
			breakTime: 0,
			breakCount: 0,
			workTime: 0,
		};

		for (let stat of statList) {
			if (isDaySame(stat.datetime, needbaleDay)) {
				if (stat.type === 'break') res.breakCount += stat.value;
				if (stat.type === 'breakTime') res.breakTime += stat.value;
				if (stat.type === 'pomodoro') res.tomatoCount += stat.value;
				if (stat.type === 'workTime') res.workTime += stat.value;
			}
		}

		return res;
	}

	getStatsByWeek(week: number) {
		const day1 = this.getStatsByDay(week, 1).workTime;
		const day2 = this.getStatsByDay(week, 2).workTime;
		const day3 = this.getStatsByDay(week, 3).workTime;
		const day4 = this.getStatsByDay(week, 4).workTime;
		const day5 = this.getStatsByDay(week, 5).workTime;
		const day6 = this.getStatsByDay(week, 6).workTime;
		const day7 = this.getStatsByDay(week, 7).workTime;
		const res: IweekState = {
			workTimeAtDay: [day1, day2, day3, day4, day5, day6, day7],
		};
		return res;
	}

	setThema(thema: 'dark' | 'light') {
		localStorage.setItem('thema', thema);
	}

	getThema() {
		return (localStorage.getItem('thema') as 'dark' | 'light') || 'light';
	}
}
