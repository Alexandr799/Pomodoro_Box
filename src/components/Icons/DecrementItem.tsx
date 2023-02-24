import IIcon from './types/icontypes';

const DecrementIcon = ({ className }: IIcon) => {
	return (
		<svg
			className={className}
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_35_103)">
				<path
					d="M9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z"
					fill="#A8B64F"
				/>
				<path d="M5.25 8.25H8.25H9.75H12.75V9.75H9.75H8.25H5.25V8.25Z" fill="#A8B64F" />
			</g>
			<defs>
				<clipPath id="clip0_35_103">
					<rect width="18" height="18" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default DecrementIcon;
