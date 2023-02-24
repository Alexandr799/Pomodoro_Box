import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/rootReducer';
import PauseTimer from '../Timers/PauseTimer';
import WorkTimer from '../Timers/WorkTimer/WorkTimer';

interface ITimerWindow {
	className?: string;
}

const TimerWindow = ({ className }: ITimerWindow) => {
	const timer = useSelector<IRootState, 'PauseTimer' | 'WorkTimer'>((state) => state.timer.timerType);
	return (
		<div className={className}>
			{timer === 'WorkTimer' && <WorkTimer />}
			{timer === 'PauseTimer' && <PauseTimer />}
		</div>
	);
};

export default TimerWindow;
