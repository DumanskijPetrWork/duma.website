'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { MAGNETIC_CONFIG } from './magnetic.config';
import styles from './styles.module.scss';
import { useMagnetic } from './useMagnetic';

export function Magnetic({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const { ref, position, handleMouse, resetPosition } = useMagnetic();

	return (
		<motion.div
			className={`${styles.magnetic} ${className}`}
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={resetPosition}
			animate={position}
			transition={MAGNETIC_CONFIG.transition}
		>
			{children}
		</motion.div>
	);
}
