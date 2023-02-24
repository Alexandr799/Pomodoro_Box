import Focus from '../../Icons/Focus';
import CardStat from '../../Layouts/CardStat';
import css from './FocusCard.module.css';

interface IFocusCard {
	tail: number;
	total: number;
}

const FocusCard = ({ tail, total }: IFocusCard) => {
	const content = tail && total ? Math.floor((tail / total) * 100) : 0;
	const color = !total ? 'var(--white1)' : 'var(--light-orange)';
	const className = !total ? css.inActiveIcon : css.focusActive;
	return <CardStat title={'Фокус'} content={`${content}%`} color={color} Icon={<Focus className={className} />} />;
};

export default FocusCard;
