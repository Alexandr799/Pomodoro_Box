import getPadtime from './getPadTime';

const getTimeTableFromSeconds = (timeLeft: number): string => {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = Math.floor(timeLeft - minutes * 60);
	return `${getPadtime(minutes)}:${getPadtime(seconds)}`;
};

export default getTimeTableFromSeconds;
