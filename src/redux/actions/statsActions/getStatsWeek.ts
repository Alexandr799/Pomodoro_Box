import { ActionCreator } from 'redux';
import storageApi from '../../../db/storageApi';
import EActionTypes from '../../../types/EActionTypes';
import { IweekState } from '../../reducers/statsReducer';

export interface IgetStatsWeek {
	type: EActionTypes.STATS_GET_WEEK;
	weekStats: IweekState;
}

const getStatsWeek: ActionCreator<IgetStatsWeek> = (week: number) => {
	const weekStats = storageApi().getStatsByWeek(week);
	return {
		type: EActionTypes.STATS_GET_WEEK,
		weekStats,
	};
};

export default getStatsWeek;
