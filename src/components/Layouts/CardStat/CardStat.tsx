import css from './CardStat.module.css';

import React, { ReactNode } from 'react';
interface ICardstate {
	title: string;
	color: string;
	Icon: ReactNode;
	content: string;
}

const CardStat = ({ Icon, title, content, color }: ICardstate) => {
	return (
		<div className={css.cardList} style={{ backgroundColor: color }}>
			<div>
				<div className={css.title}>{title}</div>
				<div className={css.content}>{content}</div>
			</div>
			{Icon}
		</div>
	);
};

export default CardStat;
