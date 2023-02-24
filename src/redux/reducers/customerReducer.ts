import { Reducer } from 'redux';
import EActionTypes from '../../types/EActionTypes';
import { IgetThema } from '../actions/customerAction/getThema';
import { IsetThema } from '../actions/customerAction/setThema';

export type TstatsAction = IsetThema | IgetThema;

export interface ICustomerState {
	thema: 'light' | 'dark';
}

export const initialStatsState: ICustomerState = {
	thema: 'light',
};

export const customerReducer: Reducer<ICustomerState, TstatsAction> = (state = initialStatsState, action) => {
	switch (action.type) {
		case EActionTypes.GET_THEMA:
		case EActionTypes.SET_THEMA:
			return {
				...state,
				thema: action.thema,
			};
	}
};

export default customerReducer;
