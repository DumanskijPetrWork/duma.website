export function throttle<R, T extends any[], C = unknown>(
	callback: (this: C, ...args: T) => R,
	timeout = 0,
	isTrailing = false
) {
	let timer: NodeJS.Timeout | null = null;
	let lastArgs: T | null = null;

	return function throttledCallback(this: C, ...args: T) {
		if (timer) {
			if (isTrailing) lastArgs = args;
			return;
		}

		callback.apply(this, args);

		timer = setTimeout(() => {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}

			if (isTrailing && lastArgs) {
				callback.apply(this, lastArgs);
				lastArgs = null;
			}
		}, timeout);
	};
}
