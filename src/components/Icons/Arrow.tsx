import IIcon from './types/icontypes';




const Arrow = ({className}:IIcon) => {
	return (
		<svg className={className} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 9L8 2L15 9" stroke="#B7280F" strokeWidth="2" />
		</svg>
	);
};

export default Arrow;
