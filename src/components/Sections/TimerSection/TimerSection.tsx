import { classNameJoiner } from '../../../utils/classNameJoiner';
import css from './TimerSection.module.css';
import ToDoForm from '../../Forms/ToDoForm';
import ToDoList from '../../TodoList';
import TimerWindow from '../../TimerWindow';

const TimerSection = () => {
	return (
		<section>
			<div className={classNameJoiner('container', css.container)}>
				<div className={css.listBlock}>
					<h1 className={css.title}>Ура! Теперь можно начать работать:</h1>
					<ul className={css.routemap}>
						<li className={css.step}>Выберите категорию и напишите название текущей задачи</li>
						<li className={css.step}>Запустите таймер («помидор»)</li>
						<li className={css.step}>Работайте пока «помидор» не прозвонит</li>
						<li className={css.step}>Сделайте короткий перерыв (3-5 минут)</li>
						<li className={css.step}>
							Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте
							длинный перерыв (15-30 минут).
						</li>
					</ul>
					<div className={css.formWrapper}>
						<ToDoForm />
					</div>
					<ToDoList />
				</div>
				<TimerWindow className={css.timerWindows} />
			</div>
		</section>
	);
};

export default TimerSection;
