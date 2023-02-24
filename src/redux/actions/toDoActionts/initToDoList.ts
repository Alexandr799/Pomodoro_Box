import { ActionCreator } from 'redux';
import storageApi from '../../../db/storageApi';
import { IToDo } from '../../../db/types';
import EActionTypes from '../../../types/EActionTypes';

export interface IInit {
	type: EActionTypes.INIT_TO_DO_LIST;
	list: IToDo[];
}

const initToDoList: ActionCreator<IInit> = () => {
    const list = storageApi().getToDoList()
	return {
		type: EActionTypes.INIT_TO_DO_LIST,
		list,
	};
};

export default initToDoList;
