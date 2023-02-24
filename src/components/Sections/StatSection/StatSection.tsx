import { classNameJoiner } from '../../../utils/classNameJoiner';
import DashBoard from '../../DashBoard';
import css from './StatSection.module.css';

const StatSection = () => {
	return (
		<section>
			<div className={classNameJoiner('container', css.container)}>
                <DashBoard/>
			</div>
		</section>
	);
};

export default StatSection;
