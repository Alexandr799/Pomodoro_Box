import { useState } from 'react';
import getTimeTableFromSeconds from '../utils/getTimeTableFromSeconds';

const useTimerTable = (minutes: number, lastSecond:number) => {
	const [time, setTime] = useState(minutes * 60);
	const timerTable = getTimeTableFromSeconds(time);

	const setSecond = (second: number, timerEndCallback: () => void) => {
		if (time - second <= lastSecond) {
			timerEndCallback();
			return;
		}
		setTime(time + second);
	};

	const updateTimer = (minutes: number) => {
		setTime(minutes * 60);
	};

	return [timerTable, time / 60, updateTimer, setSecond] as const;
};

export default useTimerTable;
