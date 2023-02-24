import Header from '../Header';
import useDocumentTitle from '../../hooks/useTitle';
import StatSection from '../Sections/StatSection';

const StatPage = () => {
	useDocumentTitle('Помидоро | Статистика');
	return (
		<>
			<Header />
			<main>
				<StatSection />
			</main>
		</>
	);
};

export default StatPage;
