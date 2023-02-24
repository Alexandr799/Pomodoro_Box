import { useEffect, useState } from 'react';
import css from './Switcher.module.css';

interface ISwitcher {
	checked: boolean;
	actionOnChange: () => void;
}

const Switcher = ({ actionOnChange, checked }: ISwitcher) => {
	const [check, setChecked] = useState(checked);
	const onChange = () => {
		setChecked(!check);
		actionOnChange();
	};
	useEffect(() => {
		setChecked(checked);
	}, [checked]);
	return (
		<div>
			<input checked={check} type="checkbox" className={css.switcher} onChange={onChange} />
		</div>
	);
};

export default Switcher;
