import { classNameJoiner } from '../../../utils/classNameJoiner';
import Plus from '../../Icons/Plus';
import { ITimerLayout } from '../../Timers/TimerDefault/types';
import css from './TimerLayout.module.css';

const TimerLayout = ({
	title,
	subtitle,
	timerStatus,
	color,
	taskName,
	decrementTime,
	timerTable,
	startCallBack,
	resetOnDuringCallback,
	resetOnPauseCallback,
	resumeCallBack,
	pauseCallBack,
    secondButtonText
}: ITimerLayout) => {
	return (
		<div className={css.timer}>
			<div className={css.header} style={{ backgroundColor: timerStatus !== 'default' ? color : 'var(--grayC4)' }}>
				<div className={css.titleTodo}>{title}</div>
				<div className={css.infoTodo}>{subtitle}</div>
			</div>
			<div className={css.workPlace}>
				<div className={css.clock}>
					<span className={css.table} style={{ color: timerStatus === 'onpause' ? color : 'var(--black)' }}>
						{timerTable}
					</span>
					<button className={css.plusButtonTime} onClick={decrementTime}>
						<Plus />
					</button>
				</div>
				{taskName && (
					<div className={css.task}>
						Задача - <span className={css.titleTask}>{taskName}</span>
					</div>
				)}
				<div>
					{timerStatus === 'default' && (
						<>
							<button onClick={startCallBack} className={classNameJoiner('primary-button', css.buttonStart)}>
								Старт
							</button>
							<button disabled={true} className={classNameJoiner('secondary-button', css.buttonStop)}>
								Стоп
							</button>
						</>
					)}

					{timerStatus === 'onpause' && (
						<>
							<button onClick={resumeCallBack} className={classNameJoiner('primary-button', css.buttonStart)}>
								Продолжить
							</button>
							<button onClick={resetOnPauseCallback} className={classNameJoiner('secondary-button', css.buttonStop)}>
								{secondButtonText || 'Стоп'}
							</button>
						</>
					)}

					{timerStatus === 'during' && (
						<>
							<button onClick={pauseCallBack} className={classNameJoiner('primary-button', css.buttonStart)}>
								Пауза
							</button>
							<button onClick={resetOnDuringCallback} className={classNameJoiner('secondary-button', css.buttonStop)}>
                                {secondButtonText || 'Сделано'}
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default TimerLayout;
