import { ActionCreator } from 'redux';
import { IToDo } from '../../../db/types';
import EActionTypes from '../../../types/EActionTypes';
import Store from '../../Store';

export interface IEdit {
	type: EActionTypes.EDIT_TO_DO;
	list: IToDo[];
    change:string[]
}

const editTodo: ActionCreator<IEdit> = (id: string, chandedFields: Partial<IToDo>) => {
	const list = Store.getState().toDo.toDoList;
	let itemToEdit = list.find((el) => el.id === id);
	if (!itemToEdit) {
		return {
			type: EActionTypes.EDIT_TO_DO,
			list: list,
            change:Object.keys(chandedFields)
		};
	}
	const editedItem = {
		...itemToEdit,
		...chandedFields,
	};

	const newList = list.map((el) => {
		return el.id === id ? editedItem : el;
	});

	return {
		type: EActionTypes.EDIT_TO_DO,
		list: newList,
        change:Object.keys(chandedFields)
	};
};

export default editTodo;
