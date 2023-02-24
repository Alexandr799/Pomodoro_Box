import { ActionCreator } from 'redux';
import EActionTypes from '../../../types/EActionTypes';

export interface ImarkTime {
	type: EActionTypes.MARK_TIME;
	time: number;
}

const markTime: ActionCreator<ImarkTime> = (time: number) => {
	return {
		type: EActionTypes.MARK_TIME,
		time,
	};
};

export default markTime;
