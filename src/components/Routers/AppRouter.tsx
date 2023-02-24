import { Route, BrowserRouter, Routes } from 'react-router-dom';
import IndexPage from '../Pages/IndexPage';
import Page404 from '../Pages/Page404';
import StatPage from '../Pages/StatPage';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
                <Route path='/' element={<IndexPage/>}/>
                <Route path='/stat' element={<StatPage/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
