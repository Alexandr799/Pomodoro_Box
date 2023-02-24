import { Middleware } from 'redux';
import storageApi from '../../db/storageApi';
import { IToDo } from '../../db/types';
import EActionTypes from '../../types/EActionTypes';

const saveInLocalStorage: Middleware = (store) => (next) => (action) => {
	switch (action.type) {
		case EActionTypes.EDIT_TO_DO:
		case EActionTypes.DELETE_TO_DO:
		case EActionTypes.PICK_TO_DO:
		case EActionTypes.PUSH_TO_DO_LIST:
			const list = action.list;
            storageApi().updateToDoList(list as IToDo[])
			next(action);
			break;
		default:
			next(action);
	}
};

export default saveInLocalStorage;
