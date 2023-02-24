import { IdayStats, IweekState } from '../../redux/reducers/statsReducer';
import { CurretnItemStats, IToDo } from '../types';

export interface IDBService {
	updateStats: () => void;
	getToDoList: () => IToDo[];
	pushDBStat: (item: CurretnItemStats) => void;
	updateToDoList: (list: IToDo[]) => void;
	getStatsByDay: (week: number, day: 1 | 2 | 3 | 4 | 5 | 6 | 7) => IdayStats;
	getStatsByWeek: (week: number) => IweekState;
	setThema: (thema: 'dark' | 'light') => void;
	getThema: () => 'dark' | 'light';
}
