import { TActive } from './TimerDefault';

export interface ITimer {
	timerStatus?: TActive;
	title: string;
	color?: string;
	subtitle: string;
	taskName?: string;
	minutsDuration: number;
	startCallBack?: () => void;
	endCallBack?: () => void;
	pauseCallBack?: () => void;
	resetOnDuringCallback?: () => void;
	resetOnPauseCallback?: () => void;
    resumeCallBack?:()=>void;
	Layout: (props: ITimerLayout) => JSX.Element;
    secondButtonText?:string
}

export interface ITimerLayout  {
	title: string;
	subtitle: string;
	timerStatus: TActive;
	color?: string;
	taskName?: string;
	startCallBack: () => void;
	pauseCallBack: () => void;
	resetOnDuringCallback: () => void;
	resetOnPauseCallback: () => void;
	resumeCallBack: () => void;
	decrementTime: () => void;
	timerTable: string;
    secondButtonText?:string;
}
