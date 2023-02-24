import { ActionCreator } from 'redux';
import { IToDo } from '../../../db/types';
import EActionTypes from '../../../types/EActionTypes';
import Store from '../../Store';

export interface IDelete {
	type: EActionTypes.DELETE_TO_DO;
	list: IToDo[];
}

const deleteTodo: ActionCreator<IDelete> = (id: string) => {
	const list = Store.getState().toDo.toDoList;
	const newList = list.filter((el) => el.id !== id);
	return {
		type: EActionTypes.DELETE_TO_DO,
		list: newList,
	};
};

export default deleteTodo;
