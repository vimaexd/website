export function debounce(func: (...args: any[]) => any, timeout: number = 300) {
	let timer: number;
	return function (this: any, ...args: any[]) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}
