import { nanoid } from 'nanoid';
import { useEffect, useMemo, useState } from 'react';
import CustomSelect from '../CustomSelect';
import { IOptions } from '../CustomSelect/CustomSelect';
import css from './DashBoard.module.css';
import 'chart.js/auto';
import WeekBar from '../Charts/WeekBar';
import FocusCard from '../Charts/FocusCard';
import TimePauseCard from '../Charts/TimePauseCard/TimePauseCard';
import CountPauseCard from '../Charts/CountPauseCard';
import TomatoCounter from '../Charts/TomatoCounter';
import DayCard from '../Charts/DayCard/DayCard';
import { useDispatch, useSelector } from 'react-redux';
import updateStats from '../../redux/actions/statsActions/updateStats';
import getStatsDay from '../../redux/actions/statsActions/getStatsDay';
import getStatsWeek from '../../redux/actions/statsActions/getStatsWeek';
import todayWeekDay from '../../utils/todayWeekDay';
import { IRootState } from '../../redux/rootReducer';
import { IdayStats, workTimeAtDay } from '../../redux/reducers/statsReducer';

const DashBoard = () => {
	const dispatch = useDispatch();
	const [currentWeek, setCurrentWeek] = useState(0);
	const [currentDay, setCurrentDay] = useState(todayWeekDay());
	const dataset = useSelector<IRootState, workTimeAtDay>((state) => state.stats.weekStats.workTimeAtDay);
	const { tomatoCount, breakCount, workTime, breakTime } = useSelector<IRootState, IdayStats>(
		(state) => state.stats.dayStats
	);

	useMemo(() => {
		dispatch(updateStats());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getStatsWeek(currentWeek));
		dispatch(getStatsDay(currentWeek, currentDay));
	}, [currentWeek, currentDay, dispatch]);

	const changeWeekCallBack = (opt: IOptions) => {
		setCurrentWeek(opt.value);
		setCurrentDay(1);
	};

	return (
		<div className={css.dashboard}>
			<div className={css.headerWrapper}>
				<h1 className={css.title}>Ваша активность</h1>
				<CustomSelect
					callbackOnSelect={changeWeekCallBack}
					list={[
						{ id: nanoid(), text: 'Прошедшая неделя', value: -1 },
						{ id: nanoid(), text: '2 недели назад', value: -2 },
					]}
					currentSelect={{ id: nanoid(), text: 'Эта неделя', value: 0 }}
				/>
			</div>
			<div className={css.grid}>
				<div className={css.dayinfo}>
					<DayCard day={currentDay} seconds={workTime} />
				</div>
				<div className={css.bar}>
					<WeekBar onBarClick={(d) => setCurrentDay(d)} active={currentDay - 1} dataset={dataset} />
				</div>
				<div className={css.tomatoCounter}>
					<TomatoCounter tomatoCount={tomatoCount} />
				</div>
				<div className={css.card}>
					<FocusCard tail={workTime} total={workTime + breakTime} />
				</div>
				<div className={css.card}>
					<TimePauseCard time={breakTime} />
				</div>
				<div className={css.card}>
					<CountPauseCard pauseCount={breakCount} />
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
