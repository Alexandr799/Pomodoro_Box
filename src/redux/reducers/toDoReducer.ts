import { Reducer } from 'redux';
import { IToDo } from '../../db/types';
import EActionTypes from '../../types/EActionTypes';
import { IchangeReadOnlyTodo } from '../actions/toDoActionts/changeReadOnlyTodo';
import { IDelete } from '../actions/toDoActionts/deleteToDo';
import { IEdit } from '../actions/toDoActionts/editTodo';
import { IInit } from '../actions/toDoActionts/initToDoList';
import { IPick } from '../actions/toDoActionts/pickTodo';
import { IChange } from '../actions/toDoActionts/pushToDo';

export interface IToDoState {
	toDoList: IToDo[];
	isToDoReadOnly: boolean;
}

export type TTodoReducerAction = IDelete | IChange | IPick | IEdit | IchangeReadOnlyTodo | IInit;

export const initialToDoState = {
	isToDoReadOnly: false,
	toDoList: [],
};

export const toDoReducer: Reducer<IToDoState, TTodoReducerAction> = (state = initialToDoState, action) => {
	switch (action.type) {
		case EActionTypes.PUSH_TO_DO_LIST:
		case EActionTypes.DELETE_TO_DO:
		case EActionTypes.EDIT_TO_DO:
		case EActionTypes.PICK_TO_DO:
		case EActionTypes.INIT_TO_DO_LIST:
			return {
				...state,
				toDoList: action.list,
			};
		case EActionTypes.CHANGE_READ_ONLY:
			return {
				...state,
				isToDoReadOnly: action.mode,
			};
		default:
			return state;
	}
};

export default toDoReducer;
