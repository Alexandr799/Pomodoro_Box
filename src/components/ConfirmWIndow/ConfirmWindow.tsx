import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { classNameJoiner } from '../../utils/classNameJoiner';
import Close from '../Icons/Close';
import css from './ConfirmWindow.module.css';

interface IConfirmWindow {
	minWidth?: number | 'auto';
	minHeight?: number | 'auto';
	title: string;
	action: () => void;
	closeAction: () => void;
	cancelButtonText: string;
	actionButtonText: string;
}

const ConfirmWindow = ({
	minWidth = 'auto',
	minHeight = 'auto',
	title,
	cancelButtonText,
	actionButtonText,
	action,
	closeAction,
}: IConfirmWindow) => {
	const ref = useRef<HTMLDivElement>(null);
	const refWrapper = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const closeFunc = (e: MouseEvent) => {
            if (!ref.current) return;
			if (e.composedPath().includes(ref.current)) return;
			closeAction();
		};
        if (!refWrapper.current) return;
		refWrapper.current.addEventListener('click', closeFunc);
		return () => window.removeEventListener('click', closeFunc);
	}, [closeAction, ref]);
	return createPortal(
		<div className={css.wrapper} ref={refWrapper}>
			<div style={{ minWidth, minHeight }} className={css.window} ref={ref}>
				<button className={css.close} onClick={closeAction}>
					<Close />
				</button>
				<div className={css.title}>{title}</div>
				<button
					className={classNameJoiner('dangerous-button', css.actionButton)}
					onClick={() => {
						action();
						closeAction();
					}}>
					{actionButtonText}
				</button>
				<button className={css.cancel} onClick={closeAction}>
					{cancelButtonText}
				</button>
			</div>
		</div>,
		document.getElementById('modal') as HTMLElement
	);
};

export default ConfirmWindow;
