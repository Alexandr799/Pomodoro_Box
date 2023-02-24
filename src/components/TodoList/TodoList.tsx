import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/rootReducer';
import css from './ToDoList.module.css';
import ToDoItem from '../ToDoItem';
import { IToDo } from '../../db/types';
import getHourMinFromMin from '../../utils/getHourMinFromMIn';
import inflectNounNumber from '../../utils/inflectNounNumber';
import { useEffect } from 'react';
import initToDoList from '../../redux/actions/toDoActionts/initToDoList';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ToDoList = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initToDoList());
	}, [dispatch]);
	const list = useSelector<IRootState, IToDo[]>((state) => state.toDo.toDoList);
	const isToDoReadOnly = useSelector<IRootState, boolean>((state) => state.toDo.isToDoReadOnly);
	const totalTime = list.reduce((acc, curr) => acc + curr.leftoverTomatoes * 25, 0);
	return (
		<>
			<TransitionGroup className={isToDoReadOnly ? css.disabledList : ''} component="ul">
				{list.map((d) => (
					<CSSTransition
						key={d.id}
						classNames={{
							enterActive: css.itemEnterActive,
							enterDone: css.itemEnterDone,
							exitActive: css.itemExit,
							exitDone: css.itemExitActive,
						}}
						timeout={300}>
						<li className={css.item} key={d.id}>
							<ToDoItem {...d} />
						</li>
					</CSSTransition>
				))}
			</TransitionGroup>
			{totalTime > 0 && (
				<div className={css.totalTime}>
					{getHourMinFromMin(totalTime, ` ${inflectNounNumber(totalTime / 60, ['час', 'часa', 'часов'])}`, ' мин', ' ')}
				</div>
			)}
		</>
	);
};

export default ToDoList;
