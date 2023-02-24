import { FormEvent, useEffect, useRef } from 'react';
import { classNameJoiner } from '../../../utils/classNameJoiner';
import css from './FormEditOneLine.module.css';

interface IFormEditOneLine {
	value: string;
	errorCallback?: () => void;
	onSubmitHandler: (e: FormEvent) => void;
	onSkippHandler: () => void;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

const FormEditOneLine = ({ value, onSubmitHandler, onSkippHandler, setValue }: IFormEditOneLine) => {
	const refInput = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (!refInput.current) return;
		refInput.current.focus();
	}, [refInput]);
	return (
		<form className={css.edittedForm} onSubmit={onSubmitHandler}>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className={css.inputForm}
				ref={refInput}
			/>
			<button type={'submit'} className={classNameJoiner('primary-button', css.submitbutton)}>
				Сохранить
			</button>
			<button onClick={onSkippHandler} type={'reset'} className={classNameJoiner('secondary-button', css.skipButton)}>
				Отмена
			</button>
		</form>
	);
};

export default FormEditOneLine;
