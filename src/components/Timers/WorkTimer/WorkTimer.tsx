import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../redux/rootReducer';
import TimerDefault from '../TimerDefault';
import TimerLayout from '../../Layouts/TimerLayout';
import changeReadOnlyTodo from '../../../redux/actions/toDoActionts/changeReadOnlyTodo';
import editTodo from '../../../redux/actions/toDoActionts/editTodo';
import changeTimerType from '../../../redux/actions/timersActionts/changeTimerType';
import deleteTodo from '../../../redux/actions/toDoActionts/deleteToDo';
import { useState } from 'react';
import markTime from '../../../redux/actions/timersActionts/markTime';
import { IToDo } from '../../../db/types';
import now from '../../../utils/now';
import notifyMe from '../../../utils/notifyMe';
import song from '../../../assets/music/song.mp3';
import useSound from 'use-sound';

const WorkTimer = () => {
	const [play, { stop }] = useSound(song);
	const toDolistCurrent = useSelector<IRootState, IToDo[]>((state) => state.toDo.toDoList)[0];
	const [startTime, setStartTime] = useState(0);
	const [breakTime, setbreakTime] = useState(0);
	const dispatch = useDispatch();

	const startCallBack = () => {
		setStartTime(now());
		dispatch(changeReadOnlyTodo(true));
	};

	const pauseCallback = () => {
		dispatch(markTime(now() - startTime, 'work'));
		setStartTime(0);
		setbreakTime(now());
	};

	const resetOnPauseCallback = () => {
		dispatch(markTime(now() - breakTime, 'break'));
		setbreakTime(0);
		dispatch(editTodo(toDolistCurrent.id, { tomatoCounter: toDolistCurrent.tomatoCounter + 1 }));
		dispatch(deleteTodo(toDolistCurrent.id));
		dispatch(changeReadOnlyTodo(false));
	};

	const endCallback = () => {
		if (startTime !== 0) {
			dispatch(markTime(now() - startTime, 'work'));
			setStartTime(0);
		}
		dispatch(editTodo(toDolistCurrent.id, { tomatoCounter: toDolistCurrent.tomatoCounter + 1 }));
		if (toDolistCurrent.tomatoCounter >= toDolistCurrent.leftoverTomatoes - 1) {
			dispatch(deleteTodo(toDolistCurrent.id));
			dispatch(changeReadOnlyTodo(false));
		} else {
			dispatch(changeTimerType('PauseTimer'));
		}
		notifyMe('Подмидор окончился время отдохнуть!',() => play(),() => stop()
		);
	};

	const resetOnDurringCallback = () => {
        dispatch(markTime(now() - startTime, 'work'));
        setStartTime(0);
		dispatch(editTodo(toDolistCurrent.id, { tomatoCounter: toDolistCurrent.tomatoCounter + 1 }));
        dispatch(deleteTodo(toDolistCurrent.id));
		dispatch(changeReadOnlyTodo(false));
	};

	const resumeCallBack = () => {
		dispatch(markTime(now() - breakTime, 'break'));
		setbreakTime(0);
		setStartTime(now());
	};

	return (
		<>
			{toDolistCurrent && (
				<TimerDefault
					color={'var(--red)'}
					timerStatus={'default'}
					title={toDolistCurrent.title}
					minutsDuration={0.1}
					subtitle={`Помидоров ${toDolistCurrent.tomatoCounter}`}
					taskName={toDolistCurrent.title}
					Layout={TimerLayout}
					startCallBack={startCallBack}
					endCallBack={endCallback}
					resetOnPauseCallback={resetOnPauseCallback}
					resetOnDuringCallback={resetOnDurringCallback}
					pauseCallBack={pauseCallback}
					resumeCallBack={resumeCallBack}
				/>
			)}
		</>
	);
};

export default WorkTimer;
