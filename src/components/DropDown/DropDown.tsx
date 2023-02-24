import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import css from './DropDown.module.css';

interface IDropDown {
	isOpen: boolean;
	children: ReactNode;
	buttonContent: ReactNode;
	buttonClassName?: string;
	onOpenCallback?: () => void;
	onCloseCallback?: () => void;
	closeDropDownAfterClick: boolean;
	widthChildren?: 'auto' | '100%';
    margin?:number
}

const nothingAction = () => {};

const DropDown = ({
	isOpen,
	children,
	buttonContent,
	buttonClassName,
	onCloseCallback = nothingAction,
	onOpenCallback = nothingAction,
	closeDropDownAfterClick,
	widthChildren = 'auto',
    margin=20
}: IDropDown) => {
	const [isDropDownOpen, setDropDownOpen] = useState(isOpen);

    
	const openCloseCallback = useCallback((open: boolean) => {
		!open ? onCloseCallback() : onOpenCallback();
		setDropDownOpen(open);
	}, [onCloseCallback, onOpenCallback]);

	const menuWrapperRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		function dropDownClose() {
			if (isDropDownOpen) {
				openCloseCallback(false);
			}
		}
		window.addEventListener('resize', dropDownClose);
		return () => window.removeEventListener('resize', dropDownClose);
	}, [isDropDownOpen, openCloseCallback]);

	useEffect(() => {
		function closeWhenResize(e: MouseEvent) {
			if (!menuWrapperRef.current) return;
			if (!buttonRef.current) return;
			const pathClick = e.composedPath();
			if (pathClick.includes(menuWrapperRef.current) || pathClick.includes(buttonRef.current)) return;
			if (isDropDownOpen) openCloseCallback(false);
		}
		window.addEventListener('click', closeWhenResize);
		return () => window.removeEventListener('click', closeWhenResize);
	}, [menuWrapperRef, buttonRef, openCloseCallback, isDropDownOpen]);

	return (
		<div className={css.container}>
			<button onClick={() => openCloseCallback(!isDropDownOpen)} className={buttonClassName} ref={buttonRef}>
				{buttonContent}
			</button>
			<div ref={menuWrapperRef} className={css.menuWrapperRef} style={{ width: widthChildren, top:`${100+margin}%` }}>
				{isDropDownOpen && (
					<div
						onClick={() => {
							if (closeDropDownAfterClick) {
								openCloseCallback(false);
							}
						}}>
						{children}
					</div>
				)}
			</div>
		</div>
	);
};

export default DropDown;
