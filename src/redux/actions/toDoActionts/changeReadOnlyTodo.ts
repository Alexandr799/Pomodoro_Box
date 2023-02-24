import { ActionCreator } from 'redux';
import EActionTypes from '../../../types/EActionTypes';

export interface IchangeReadOnlyTodo{
	type: EActionTypes.CHANGE_READ_ONLY;
	mode: boolean;
}

const changeReadOnlyTodo: ActionCreator<IchangeReadOnlyTodo> = (mode: boolean) => {
	return {
		type: EActionTypes.CHANGE_READ_ONLY,
		mode
	};
};

export default changeReadOnlyTodo;
