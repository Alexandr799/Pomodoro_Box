import { Reducer } from 'redux';
import EActionTypes from '../types/EActionTypes';
import { IgetThema } from './actions/customerAction/getThema';
import { IsetThema } from './actions/customerAction/setThema';
import customerReducer, { ICustomerState } from './reducers/customerReducer';
import statsReducer, { initialStatsState, IStatsState, TstatsAction } from './reducers/statsReducer';
import timerReducer, { initialTimerState, ITimerState, TtimerReducerAction } from './reducers/timerReducer';
import toDoReducer, { initialToDoState, IToDoState, TTodoReducerAction } from './reducers/toDoReducer';

export interface IRootState {
	toDo: IToDoState;
	timer: ITimerState;
	stats: IStatsState;
	customer: ICustomerState;
}

type TRootAction = TTodoReducerAction | TtimerReducerAction | TstatsAction | IgetThema | IsetThema;

export const rootReducer: Reducer<IRootState, TRootAction> = (
	state = {
		toDo: {
			...initialToDoState,
		},
		timer: {
			...initialTimerState,
		},
		stats: {
			...initialStatsState,
		},
		customer: {
			thema: 'light',
		},
	},
	action
) => {
	switch (action.type) {
		case EActionTypes.PUSH_TO_DO_LIST:
		case EActionTypes.DELETE_TO_DO:
		case EActionTypes.EDIT_TO_DO:
		case EActionTypes.PICK_TO_DO:
		case EActionTypes.CHANGE_READ_ONLY:
		case EActionTypes.INIT_TO_DO_LIST:
			return {
				...state,
				toDo: toDoReducer(state.toDo, action),
			};
		case EActionTypes.TIMER_TYPE_CHANGE:
		case EActionTypes.MARK_TIME:
			return {
				...state,
				timer: timerReducer(state.timer, action),
			};
		case EActionTypes.STATS_UPDATE:
		case EActionTypes.STATS_GET_DAY:
		case EActionTypes.STATS_GET_WEEK:
			return {
				...state,
				stats: statsReducer(state.stats, action),
			};
		case EActionTypes.GET_THEMA:
		case EActionTypes.SET_THEMA:
			return {
				...state,
                customer:customerReducer(state.customer, action)
			};
		default:
			return state;
	}
};
