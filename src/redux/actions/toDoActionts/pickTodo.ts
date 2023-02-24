import { ActionCreator } from 'redux';
import { IToDo } from '../../../db/types';
import EActionTypes from '../../../types/EActionTypes';
import Store from '../../Store';

export interface IPick {
	type: EActionTypes.PICK_TO_DO;
	list: IToDo[];
}

const pickTodo: ActionCreator<IPick> = (id: string, ) => {
	const list = Store.getState().toDo.toDoList;
	let itemPick = list.find((el) => el.id === id);
	if (!itemPick) {
		return {
			type: EActionTypes.PICK_TO_DO,
			list: list
		};
	}

	const newList = [itemPick, ...list.filter((el) => el.id !== id)];
	return {
		type: EActionTypes.PICK_TO_DO,
		list: newList,
	};
};

export default pickTodo;
