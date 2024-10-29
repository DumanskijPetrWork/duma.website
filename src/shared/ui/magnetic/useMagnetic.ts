import { MAGNETIC_CONFIG } from '@/shared/configs/magnetic.config';
import { throttle } from '@/shared/lib/utils';
import { MutableRefObject, useCallback, useRef, useState } from 'react';

export function useMagnetic() {
	const ref = useRef() as MutableRefObject<HTMLDivElement>;
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouse = useCallback(
		throttle((e: React.MouseEvent) => {
			const { clientX, clientY } = e;
			const { height, width, left, top } =
				ref.current.getBoundingClientRect();
			const middleX = clientX - (left + width / 2);
			const middleY = clientY - (top + height / 2);

			setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
		}, MAGNETIC_CONFIG.throttleTimeout),
		[ref]
	);

	const resetPosition = useCallback(() => {
		setPosition({ x: 0, y: 0 });
	}, []);

	return { ref, position, handleMouse, resetPosition };
}
