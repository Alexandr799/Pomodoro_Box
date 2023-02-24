import { ActionCreator } from 'redux';
import storageApi from '../../../db/storageApi';
import EActionTypes from '../../../types/EActionTypes';

export interface IupdateStatsAction {
	type: EActionTypes.STATS_UPDATE;
}

const updateStats: ActionCreator<IupdateStatsAction> = () => {
    storageApi().updateStats()
	return {
		type: EActionTypes.STATS_UPDATE
	};
};

export default updateStats;
