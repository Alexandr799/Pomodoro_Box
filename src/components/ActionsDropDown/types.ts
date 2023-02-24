export interface IButton {
	id: string;
	text: string;
	action: () => void;
	icon?: JSX.Element;
}

export interface IActionsDropDown {
	onCloseCallback?: () => void;
	buttonsList: IButton[];
	closeAfterClick: boolean;
}