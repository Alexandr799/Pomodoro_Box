import useDocumentTitle from '../../hooks/useTitle';
import Header from '../Header';
import TimerSection from '../Sections/TimerSection';

const IndexPage = () => {
	useDocumentTitle('Помидоро | Трекер');
	return (
		<>
			<Header />
			<main>
				<TimerSection />
			</main>
		</>
	);
};

export default IndexPage;
