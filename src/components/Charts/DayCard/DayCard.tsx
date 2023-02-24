import getHourMinFromMin from '../../../utils/getHourMinFromMIn';
import inflectNounNumber from '../../../utils/inflectNounNumber';
import css from './DayCard.module.css';

interface IDayCard {
	seconds: number;
	day: number;
}

const DayCard = ({ day, seconds }: IDayCard) => {
	const currentDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'][day - 1];
	const minuts = Math.ceil(seconds / 60);
    const minutsWord = inflectNounNumber(minuts, ['минуты', 'минут', 'минут'])
    const hourWord = inflectNounNumber(minuts/60, ['час', 'часa', 'часов'])
	return (
		<div className={css.wrapper}>
			<h3 className={css.title}>{currentDay}</h3>
			{seconds > 0 ? (
				<p className={css.text}>
					Вы работали над задачами в течение{' '}
					<span className={css.time}>{getHourMinFromMin(minuts, ` ${hourWord}`, ` ${minutsWord}`, ' ')}</span>
				</p>
			) : (
				<p>Нет данных</p>
			)}
		</div>
	);
};

export default DayCard;
