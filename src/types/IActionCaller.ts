import { AnyAction, Dispatch } from 'redux';

export interface IActionCaller {
	dispatch: Dispatch<AnyAction>;
}