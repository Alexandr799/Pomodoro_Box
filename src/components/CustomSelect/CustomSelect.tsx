import { useRef, useState } from 'react';
import DropDown from '../DropDown';
import Arrow from '../Icons/Arrow';
import css from './CustomSelect.module.css';

export interface IOptions {
	id: string;
	value: number;
    text:string
}

interface ICustomSelect {
	list: IOptions[];
	callbackOnSelect?: (value: IOptions) => void;
	currentSelect: IOptions;
}

const CustomSelect = ({ currentSelect, list, callbackOnSelect }: ICustomSelect) => {
	const [currentValue, setCurrentValue] = useState(currentSelect);
	const [currentList, setCurrentList] = useState(list);
	const ref = useRef<HTMLDivElement>(null);
	const setCurrentValueAction = (item: IOptions) => () => {
		setCurrentValue(item);
		const newlist = [currentValue, ...currentList.filter((el) => el.id !== item.id)];
		setCurrentList(newlist);
		if (ref.current) ref.current.classList.remove(css.open);
		if (callbackOnSelect) callbackOnSelect(item);
	};
	return (
		<DropDown
			isOpen={false}
			margin={0}
			buttonContent={
				<div
					ref={ref}
					className={css.select}
					onClick={(e) => {
						e.currentTarget.classList.toggle(css.open);
					}}>
					<span>{currentValue.text}</span>
					<Arrow />
				</div>
			}
			closeDropDownAfterClick={true}
			widthChildren={'100%'}>
			<ul className={css.test}>
				{currentList.map((el) => (
					<li key={el.id}>
						<button className={css.options}  onClick={setCurrentValueAction(el)}>
							{el.text}
						</button>
					</li>
				))}
			</ul>
		</DropDown>
	);
};

export default CustomSelect;
