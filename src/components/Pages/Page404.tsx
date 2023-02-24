import { Link } from 'react-router-dom';
import tomato from '../../assets/img/tomato-sad.png';

const Page404 = () => {
	return (
		<div style={{ padding: '30px' }}>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<img src={tomato} alt="" />
				<h1
					style={{ textAlign: 'center', fontSize: '24px', lineHeight: '33px', fontWeight: 700, marginBottom: '30px' }}>
					Такой страницы не существует, предлагаем вернуться к работе!
				</h1>
				<p>
					<Link to={'/'} style={{ textAlign: 'center', fontSize: '18px', lineHeight: '24px', fontWeight: 500 , color:'var(--red)'}}>Вернуться к задачам</Link>
				</p>
			</div>
		</div>
	);
};

export default Page404;
