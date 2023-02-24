import tomato from '../assets/img/tomato.svg';

export default function notifyMe(text: string, showCallback: () => void, closeCallback: () => void) {
	if (!('Notification' in window)) {
		alert('This browser does not support desktop notification');
	} else if (Notification.permission === 'granted') {
		const notify = new Notification(text, { icon: tomato });
		notify.addEventListener('show', showCallback);
		notify.addEventListener('close', closeCallback);
        notify.addEventListener('error', closeCallback);
	} else if (Notification.permission !== 'denied') {
		Notification.requestPermission().then((permission) => {
			if (permission === 'granted') {
				const notify = new Notification(text, { icon: tomato });
				notify.addEventListener('show', showCallback);
				notify.addEventListener('close', closeCallback);
                notify.addEventListener('error', closeCallback);
			}
		});
	}
}
