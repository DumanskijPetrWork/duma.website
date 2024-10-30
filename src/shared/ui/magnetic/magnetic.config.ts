import { Transition } from 'framer-motion';

export const MAGNETIC_CONFIG: {
	throttleTimeout: number;
	transition: Transition;
} = {
	throttleTimeout: 50,
	transition: {
		type: 'spring',
		stiffness: 350,
		damping: 5,
		mass: 0.5,
	},
};
