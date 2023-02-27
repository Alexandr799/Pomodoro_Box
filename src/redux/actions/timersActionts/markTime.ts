import { ActionCreator } from 'redux';
import EActionTypes from '../../../types/EActionTypes';

export interface ImarkTime {
	type: EActionTypes.MARK_TIME;
	time: number;
    typeTime:'break' | 'work'
}

const markTime: ActionCreator<ImarkTime> = (time: number, typeTime: 'break' | 'work') => {
	return {
		type: EActionTypes.MARK_TIME,
		time,
        typeTime
	};
};

export default markTime;
