import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { classNameJoiner } from '../../../utils/classNameJoiner';
import css from './TodoForm.module.css';
import { nanoid } from 'nanoid';
import preventDefault from '../../../utils/preventDefault';
import pushToDo from '../../../redux/actions/toDoActionts/pushToDo';

const ToDoForm = () => {
	const dispatch = useDispatch();
	const [textDo, setTextDo] = useState('');
	const submitHandler = () => {
		if (!textDo) return;
		dispatch(pushToDo({ title: textDo, id: nanoid(), leftoverTomatoes: 1, tomatoCounter: 0, breakCounter: 0 }));
		setTextDo('');
	};
	return (
		<form className={css.form} onSubmit={preventDefault(submitHandler)}>
			<input
				type="text"
				placeholder="Название задачи"
				className={css.input}
				value={textDo}
				onChange={(e) => setTextDo(e.currentTarget.value)}
			/>
			<button className={classNameJoiner('primary-button', css.formButton)}>Добавить</button>
		</form>
	);
};

export default ToDoForm;
