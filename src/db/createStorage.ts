import { IDBService } from './service/types';


export default function createStorage<A extends IDBService>(c: new () => A): () => A {
	return () => new c();
}