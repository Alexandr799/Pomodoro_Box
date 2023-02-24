import getHourMinFromMin from '../../../utils/getHourMinFromMIn';
import Clock from '../../Icons/Clock';
import CardStat from '../../Layouts/CardStat';
import css from './TimePauseCard.module.css';

interface ITimePauseCard {
	time: number;
}

const TimePauseCard = ({ time }: ITimePauseCard) => {
	const timeMinuts = Math.ceil(time / 60);
	const tableTime = getHourMinFromMin(timeMinuts, 'ч', 'м', ' ');
	const className = !timeMinuts ? css.inActiveIcon : css.clockActive;
	const color = !timeMinuts ? 'var(--white1)' : 'var(--violet-hard)';
	return (
		<CardStat
			title={'Время на паузе'}
			content={`${tableTime}`}
			color={color}
			Icon={<Clock className={className} />}
		/>
	);
};

export default TimePauseCard;
