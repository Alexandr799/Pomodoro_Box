import Focus from '../../Icons/Focus';
import CardStat from '../../Layouts/CardStat';
import css from './FocusCard.module.css';

interface IFocusCard {
	tail: number;
	secondTail: number;
}

const FocusCard = ({ tail, secondTail }: IFocusCard) => {
    const total = tail+ secondTail
	const content =
		tail && secondTail + tail
			? Math.floor((Math.ceil(tail / 60) / (Math.ceil(tail / 60) + Math.ceil(secondTail / 60))) * 100)
			: 0;
	const color = !total ? 'var(--white1)' : 'var(--light-orange)';
	const className = !total ? css.inActiveIcon : css.focusActive;
	return <CardStat title={'Фокус'} content={`${content}%`} color={color} Icon={<Focus className={className} />} />;
};

export default FocusCard;
