import Stop from '../../Icons/Stop';
import CardStat from '../../Layouts/CardStat';
import css from './CountPauseCard.module.css';

interface ICountPauseCard {
	pauseCount: number | null;
}

const CountPauseCard = ({ pauseCount }: ICountPauseCard) => {
    const color = !pauseCount ? 'var(--white)' : 'var(--sky-light)';
    const className = !pauseCount ? css.inActiveIcon : css.stopActive;
	return (
		<CardStat
			title={'Остановки'}
			content={`${pauseCount}`}
			color={color}
			Icon={<Stop className={className} />}
		/>
	);
};

export default CountPauseCard;
