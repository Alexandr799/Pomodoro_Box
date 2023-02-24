import { Middleware } from 'redux';
import storageApi from '../../db/storageApi';
import EActionTypes from '../../types/EActionTypes';
import now from '../../utils/now';

const pushStatictic: Middleware = (store) => (next) => (action) => {
	switch (action.type) {
		case EActionTypes.EDIT_TO_DO:
			if (action.change.includes('tomatoCounter'))
				storageApi().pushDBStat({ type: 'pomodoro', datetime: now(), value: 1 });
			if (action.change.includes('breakCounter'))
				storageApi().pushDBStat({ type: 'break', datetime: now(), value: 1 });
			next(action);
			break;
		case EActionTypes.MARK_TIME:
			const timerType = store.getState().timer.timerType;
			if (timerType === 'WorkTimer')
				storageApi().pushDBStat({ type: 'workTime', datetime: now(), value: action.time });
			if (timerType === 'PauseTimer')
				storageApi().pushDBStat({ type: 'breakTime', datetime: now(), value: action.time });
			next(action);
			break;
		default:
			next(action);
	}
};

export default pushStatictic;
