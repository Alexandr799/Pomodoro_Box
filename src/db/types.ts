interface IStatsDBItem {
	type: string;
	datetime: number;
	value: any;
}

export interface IPomidor extends IStatsDBItem {
	type: 'pomodoro';
	datetime: number;
	value: number;
}

export interface IBreak extends IStatsDBItem {
	type: 'break';
	datetime: number;
	value: number;
}

export interface IBreakTime extends IStatsDBItem {
	type: 'breakTime';
	datetime: number;
	value: number;
}

export interface IWorkTime extends IStatsDBItem {
	type: 'workTime';
	datetime: number;
	value: number;
}

export type LocalStorageStatDB<T extends IStatsDBItem> = T[];

export type CurretnItemStats = IPomidor | IWorkTime | IBreakTime | IBreak;

export interface IToDo {
	leftoverTomatoes: number;
	title: string;
	id: string;
	tomatoCounter: number;
	breakCounter: number;
}




