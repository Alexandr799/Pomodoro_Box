import React from 'react';
import AppRouter from './components/Routers/AppRouter';
import { Provider } from 'react-redux';
import Store from './redux/Store';

function App() {
	return (
		<Provider store={Store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
