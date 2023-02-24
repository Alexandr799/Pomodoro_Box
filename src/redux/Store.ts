import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import saveInLocalStorage from './middlewares/saveListInLocalStorage';
import pushStatictic from './middlewares/pushStatictic';

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saveInLocalStorage, pushStatictic)));

export const dispatch = Store.dispatch;
export default Store;
