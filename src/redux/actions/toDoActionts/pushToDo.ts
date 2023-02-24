import { ActionCreator } from 'redux';
import { IToDo } from '../../../db/types';
import EActionTypes from '../../../types/EActionTypes';
import Store from '../../Store';

export interface IChange {
	type: EActionTypes.PUSH_TO_DO_LIST;
	list: IToDo[];
}

const pushToDo: ActionCreator<IChange> = (item: IToDo) => {
	const list = Store.getState().toDo.toDoList;
    const newList = list.slice(0);
	newList.push(item);
	return {
		type: EActionTypes.PUSH_TO_DO_LIST,
		list: newList,
	};
};

export default pushToDo;
