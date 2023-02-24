import useTimerTable from '../../../hooks/useTimerTable';
import { useEffect,  useState } from 'react';
import { ITimer } from './types';

export type TActive = 'onpause' | 'during' | 'default';

const TimerDefault = ({
	timerStatus = 'default',
	title,
	color = 'var(--grayC4)',
	subtitle,
	taskName,
	minutsDuration,
	startCallBack = () => {},
	endCallBack = () => {},
	resetOnDuringCallback = () => {},
	resetOnPauseCallback = () => {},
	pauseCallBack = () => {},
	Layout,
    resumeWord
}: ITimer) => {
	const [timerTable, minutCount, updateTimer, setSecond] = useTimerTable(minutsDuration, 1);
	const [active, setTimerStatus] = useState<TActive>(timerStatus);

	const start = () => {
		setTimerStatus('during');
	};

	const pause = () => {
		setTimerStatus('onpause');
	};

	const resetOnDuring = () => {
		setTimerStatus('default');
		updateTimer(minutsDuration);
		resetOnDuringCallback();
	};

	const resetOnPause = () => {
		setTimerStatus('default');
		updateTimer(minutsDuration);
		resetOnPauseCallback();
	};

	const resume = () => {
		setTimerStatus('during');
	};

	useEffect(() => {
		if (active === 'during') {
			startCallBack();
		}
		if (active === 'onpause') {
			pauseCallBack();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);

	useEffect(() => {
		if (active !== 'during') return;
		const interval = setInterval(() => {
			setSecond(-1, () => {
				endCallBack();
				clearInterval(interval);
				updateTimer(minutsDuration);
				setTimerStatus('default');
			});
		}, 1000);
		return () => clearInterval(interval);
	}, [active, endCallBack, minutsDuration, setSecond, updateTimer]);
	return (
		<Layout
			title={title}
			subtitle={subtitle}
			taskName={taskName}
			timerTable={timerTable}
			timerStatus={active}
			resetOnDuringCallback={resetOnDuring}
			resetOnPauseCallback={resetOnPause}
			pauseCallBack={pause}
			startCallBack={start}
			color={color}
			decrementTime={() => updateTimer(minutCount + 1)}
			resumeCallBack={resume}
            resumeWord={resumeWord}
		/>
	);
};

export default TimerDefault;
