const getHourMinFromMin = (
	arg: number,
	hour: string,
	minutes: string,
	between: string = '',
	nullMinutesPrint = false
) => {
	if (arg / 60 < 1) {
		return `${arg}${minutes}`;
	}
	const printMinutes = arg % 60 === 0 && !nullMinutesPrint ? '' : `${arg % 60}${minutes}`;
	return `${Math.floor(arg / 60)}${hour}${between}${printMinutes}`;
};

export default getHourMinFromMin;
