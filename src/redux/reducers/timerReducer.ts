import { Reducer } from 'redux';
import EActionTypes from '../../types/EActionTypes';
import { IChangeTimerType } from '../actions/timersActionts/changeTimerType';
import { ImarkTime } from '../actions/timersActionts/markTime';

export interface ITimerState {
	timerType: 'PauseTimer' | 'WorkTimer';
}

export const initialTimerState = {
	timerType: 'WorkTimer' as const,
};

export type TtimerReducerAction = IChangeTimerType | ImarkTime;
export const timerReducer: Reducer<ITimerState, TtimerReducerAction> = (state = initialTimerState, action) => {
	switch (action.type) {
		case EActionTypes.TIMER_TYPE_CHANGE:
			return {
				...state,
				timerType: action.status,
			};
		case EActionTypes.MARK_TIME:
			return {
				...state,
			};
	}
};

export default timerReducer;
