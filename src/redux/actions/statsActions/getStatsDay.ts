import { ActionCreator } from 'redux';
import storageApi from '../../../db/storageApi';
import EActionTypes from '../../../types/EActionTypes';
import { IdayStats } from '../../reducers/statsReducer';

export interface IgetStatsDay {
	type: EActionTypes.STATS_GET_DAY;
	dayStats: IdayStats;
}

const getStatsDay: ActionCreator<IgetStatsDay> = (week: number, day: 1 | 2 | 3 | 4 | 5 | 6 | 7) => {
	const dayStats = storageApi().getStatsByDay(week, day);
	return {
		type: EActionTypes.STATS_GET_DAY,
		dayStats,
	};
};

export default getStatsDay;
