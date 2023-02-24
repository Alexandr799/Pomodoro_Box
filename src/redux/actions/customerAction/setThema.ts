import { ActionCreator } from 'redux';
import storageApi from '../../../db/storageApi';
import EActionTypes from '../../../types/EActionTypes';

export interface IsetThema {
	type: EActionTypes.SET_THEMA;
	thema: 'dark' | 'light';
}

const setThema: ActionCreator<IsetThema> = (thema: 'dark' | 'light') => {
	storageApi().setThema(thema);
	return {
		type: EActionTypes.SET_THEMA,
		thema,
	};
};

export default setThema;
