import React from 'react';
import DropDown from '../DropDown';
import More from '../Icons/More';
import css from './ActionsDropDown.module.css';
import { IActionsDropDown } from './types';

const ActionsDropDown = ({ onCloseCallback = () => {}, buttonsList, closeAfterClick }: IActionsDropDown) => {
	return (
		<DropDown
			buttonContent={<More />}
			isOpen={false}
			closeDropDownAfterClick={closeAfterClick}
			onCloseCallback={onCloseCallback}>
			<ul className={css.buttonList}>
				{buttonsList.map((el) => (
					<li key={el.id}>
						<button className={css.buttonMenu} onClick={el.action}>
							{el.icon && <span className={css.buttonIcon}>{el.icon}</span>}

							<span className={css.buttonText}>{el.text}</span>
						</button>
					</li>
				))}
			</ul>
		</DropDown>
	);
};

export default ActionsDropDown;
