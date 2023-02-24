import TomatoBig from '../../Icons/TomatoBig';
import TomatoFace from '../../Icons/TomatoFace';
import css from './TomatoCounter.module.css';

interface ITomatoCounter {
	tomatoCount: number;
}

const TomatoCounter = ({ tomatoCount }: ITomatoCounter) => {
	return (
		<div className={css.tomatoCounter}>
			{!tomatoCount? (
				<div className={css.tomatofaceWrapper}>
					<TomatoFace className={css.tomatoFace} />
				</div>
			) : (
				<div >
					<div className={css.contentWrapper}>
						<div className={css.content}>
							<TomatoBig className={css.tomato} />
							<div className={css.count}>x {tomatoCount}</div>
						</div>
					</div>
					<div className={css.bottom}>Помидоров: {tomatoCount}</div>
				</div>
			)}
		</div>
	);
};

export default TomatoCounter;
