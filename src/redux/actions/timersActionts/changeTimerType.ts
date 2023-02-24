import { ActionCreator } from 'redux';
import EActionTypes from '../../../types/EActionTypes';

export interface IChangeTimerType {
	type: EActionTypes.TIMER_TYPE_CHANGE;
	status: 'PauseTimer' | 'WorkTimer';
}

const changeTimerType: ActionCreator<IChangeTimerType> = (status: 'PauseTimer' | 'WorkTimer') => {
	return {
        type:EActionTypes.TIMER_TYPE_CHANGE,
        status
    };
};

export default changeTimerType;
