import { classNameJoiner } from '../../utils/classNameJoiner';
import css from './Header.module.css';
import { Link } from 'react-router-dom';
import Tomato from '../Icons/Tomato';
import Stat from '../Icons/Stat';
import Switcher from '../Switcher';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/rootReducer';
import setThema from '../../redux/actions/customerAction/setThema';
import { useEffect } from 'react';
import getThema from '../../redux/actions/customerAction/getThema';

const Header = () => {
	const thema = useSelector<IRootState, 'dark' | 'light'>((state) => state.customer.thema);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getThema());
	}, [dispatch]);
	useEffect(() => {
		thema === 'dark'
			? document.querySelector('html')?.setAttribute('data-thema', 'dark')
			: document.querySelector('html')?.removeAttribute('data-thema');
	}, [thema]);
	const changeThema = () => {
		dispatch(setThema(thema === 'light' ? 'dark' : 'light'));
	};
	return (
		<header className={css.header}>
			<nav className={classNameJoiner('container', css.container)}>
				<Link to="/" className={css.logo}>
					<Tomato className={css.tomato} />
					<div className={css.title}>pomodoro_box</div>
				</Link>
				<div className={css.switch}>
					<div>Темная тема</div>
					<Switcher checked={thema === 'dark' ? true : false} actionOnChange={changeThema} />
				</div>
				<Link to={'/stat'} className={css.linkStat}>
					<Stat className={css.stat} />
					<div className={css.linkText}>Статистика</div>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
