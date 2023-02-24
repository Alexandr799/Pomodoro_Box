import createStorage from './createStorage';
import DBService from './service/DBSevice';

const storageApi = createStorage(DBService)

export default storageApi


