import css from './ToDoItem.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import FormEditOneLine from '../Forms/FormEditOneLine';
import preventDefault from '../../utils/preventDefault';
import ConfirmWindow from '../ConfirmWIndow';
import DecrementIcon from '../Icons/DecrementItem';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';
import IncremetIcon from '../Icons/IncrementIcon';
import { nanoid } from 'nanoid';
import ActionsDropDown from '../ActionsDropDown';
import deleteTodo from '../../redux/actions/toDoActionts/deleteToDo';
import editTodo from '../../redux/actions/toDoActionts/editTodo';
import pickTodo from '../../redux/actions/toDoActionts/pickTodo';
import { IToDo } from '../../db/types';


const ToDoItem = ({ leftoverTomatoes, id, title }: IToDo) => {
	const [isEditTitleMode, setEditTitleMode] = useState(false);
	const [tomatoCounter, setTomatoCounter] = useState(leftoverTomatoes);
	const [titleTochange, setTitleTochange] = useState(title);
	const [modalOpen, setModalOpen] = useState(false);
	const dispatch = useDispatch();
	const setEditMode = () => {
		dispatch(editTodo(id, { title: titleTochange }));
		setEditTitleMode(false);
	};
	const listButton = [
		{ action: () => setTomatoCounter(tomatoCounter + 1), text: 'Увеличить', id: nanoid(), icon: <IncremetIcon /> },
		{
			action: () => (tomatoCounter > 1 ? setTomatoCounter(tomatoCounter - 1) : undefined),
			text: 'Уменьшить',
			id: nanoid(),
			icon:  <DecrementIcon />,
		},
		{ action: () => setEditTitleMode(true), text: 'Редактировать', id: nanoid(), icon: <EditIcon /> },
		{ action: () => setModalOpen(true), text: 'Удалить', id: nanoid(), icon: <DeleteIcon /> },
	];
	return (
		<div className={css.wrapper}>
			{!isEditTitleMode && (
				<>
					<div className={css.counter}>{tomatoCounter}</div>
					<button className={css.headButton} onClick={() => dispatch(pickTodo(id))}>
						{title}
					</button>
					<div className={css.dropWrapper}>
						<ActionsDropDown
							buttonsList={listButton}
							onCloseCallback={() => dispatch(editTodo(id, { leftoverTomatoes: tomatoCounter }))}
							closeAfterClick={false}
						/>
					</div>
				</>
			)}
			{isEditTitleMode && (
				<FormEditOneLine
					onSkippHandler={() => setEditTitleMode(false)}
					onSubmitHandler={preventDefault(setEditMode)}
					value={titleTochange}
					setValue={setTitleTochange}
				/>
			)}
			{modalOpen && (
				<ConfirmWindow
					action={() => dispatch(deleteTodo(id))}
					closeAction={() => setModalOpen(false)}
					title={'Удалить задачу?'}
					cancelButtonText={'Отмена'}
					actionButtonText={'Удалить'}
				/>
			)}
		</div>
	);
};

export default ToDoItem;
