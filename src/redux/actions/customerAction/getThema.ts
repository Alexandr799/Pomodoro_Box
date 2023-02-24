import { ActionCreator } from 'redux';
import storageApi from '../../../db/storageApi';
import EActionTypes from '../../../types/EActionTypes';

export interface IgetThema {
	type: EActionTypes.GET_THEMA;
	thema: 'dark' | 'light';
}

const getThema: ActionCreator<IgetThema> = () => {
	const thema = storageApi().getThema();
	return {
		type: EActionTypes.GET_THEMA,
		thema,
	};
};

export default getThema;
