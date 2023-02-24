import { Reducer } from 'redux';
import EActionTypes from '../../types/EActionTypes';
import { IgetStatsDay } from '../actions/statsActions/getStatsDay';
import { IgetStatsWeek } from '../actions/statsActions/getStatsWeek';
import { IupdateStatsAction } from '../actions/statsActions/updateStats';

export type workTimeAtDay = [number, number, number, number, number, number, number];

export interface IdayStats {
	tomatoCount: number;
	breakTime: number;
	breakCount: number;
	workTime: number;
}

export interface IweekState {
	workTimeAtDay: workTimeAtDay;
}

export interface IStatsState {
	dayStats: IdayStats;
	weekStats: IweekState;
}

export type TstatsAction = IupdateStatsAction | IgetStatsDay | IgetStatsWeek;

export const initialStatsState: IStatsState = {
	dayStats: {
		tomatoCount: 0,
		breakTime: 0,
		breakCount: 0,
		workTime: 0,
	},
	weekStats: {
		workTimeAtDay: [0, 0, 0, 0, 0, 0, 0],
	},
};

export const statsReducer: Reducer<IStatsState, TstatsAction> = (state = initialStatsState, action) => {
	switch (action.type) {
		case EActionTypes.STATS_UPDATE:
			return {
				...state,
			};
		case EActionTypes.STATS_GET_DAY:
			return {
				...state,
				dayStats: action.dayStats,
			};
		case EActionTypes.STATS_GET_WEEK:
			return {
				...state,
				weekStats: action.weekStats,
			};
	}
};

export default statsReducer;
