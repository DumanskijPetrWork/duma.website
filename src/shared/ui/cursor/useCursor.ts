import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MouseFollower from 'mouse-follower';

MouseFollower.registerGSAP(gsap);

export function useCursor() {
	useGSAP(() => {
		const cursor = new MouseFollower({}); // TODO

		return cursor.destroy;
	});
}
