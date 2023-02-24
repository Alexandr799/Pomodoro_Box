import { SyntheticEvent } from 'react';

const preventDefault = (func: (e:SyntheticEvent) => void) => {
	return (e:SyntheticEvent) => {
		e.preventDefault();
		func(e);
	};
};

export default preventDefault;
