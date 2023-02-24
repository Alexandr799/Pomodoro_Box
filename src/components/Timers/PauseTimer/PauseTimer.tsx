import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../redux/rootReducer';
import TimerDefault from '../TimerDefault';
import TimerLayout from '../../Layouts/TimerLayout';
import changeReadOnlyTodo from '../../../redux/actions/toDoActionts/changeReadOnlyTodo';
import changeTimerType from '../../../redux/actions/timersActionts/changeTimerType';
import editTodo from '../../../redux/actions/toDoActionts/editTodo';
import markTime from '../../../redux/actions/timersActionts/markTime';
import {  useState } from 'react';
import { IToDo } from '../../../db/types';
import now from '../../../utils/now';
import notifyMe from '../../../utils/notifyMe';
import song from '../../../assets/music/song.mp3';
import useSound from 'use-sound';

const PauseTimer = () => {
	const [play, { stop }] = useSound(song);
	const toDolistCurrent = useSelector<IRootState, IToDo[]>((state) => state.toDo.toDoList)[0];
	const [cleanWorkingTime, setCleanWorkingTime] = useState(0);
	const [startTime, setStartTime] = useState(0);

	const startCallBack = () => setStartTime(now());

	const pauseCallback = () => setCleanWorkingTime(cleanWorkingTime + (now() - startTime));

	const dispatch = useDispatch();
	const endCallback = () => {
		dispatch(markTime(cleanWorkingTime + (now() - startTime)));
		setCleanWorkingTime(0);
		dispatch(editTodo(toDolistCurrent.id, { breakCounter: toDolistCurrent.breakCounter + 1 }));
		dispatch(changeTimerType('WorkTimer'));
		dispatch(changeReadOnlyTodo(false));
		notifyMe('Подмидор закончился время отдохнуть!', ()=>play(), ()=>stop());
	};
	const resetOnPauseCallback = () => {
		dispatch(markTime(cleanWorkingTime));
		setCleanWorkingTime(0);
		dispatch(editTodo(toDolistCurrent.id, { breakCounter: toDolistCurrent.breakCounter + 1 }));
		dispatch(changeTimerType('WorkTimer'));
		dispatch(changeReadOnlyTodo(false));
	};

	const resetOnDurringCallback = endCallback;

	return (
		<>
			{toDolistCurrent && (
				<TimerDefault
					color={'var(--green-middle)'}
					timerStatus={'during'}
					title={toDolistCurrent.title}
					minutsDuration={5}
					subtitle={`Перерывов ${toDolistCurrent.breakCounter}`}
					taskName={toDolistCurrent.title}
					Layout={TimerLayout}
					resetOnDuringCallback={resetOnDurringCallback}
					resetOnPauseCallback={resetOnPauseCallback}
					endCallBack={endCallback}
					startCallBack={startCallBack}
					pauseCallBack={pauseCallback}
                    resumeWord={'Пропустить'}
				/>
			)}
		</>
	);
};

export default PauseTimer;
