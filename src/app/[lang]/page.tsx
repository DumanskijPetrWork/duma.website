import Tmp from '@/shared/ui/Tmp';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { Link } from '@/features/i18n';
import styles from './page.module.scss';

interface Props {
	params: { lang: string };
}

export default function Home({ params: { lang } }: Props) {
	setRequestLocale(lang);
	const t = useTranslations('navbar');

	return (
		<main className={styles.main}>
			<div>
				<h1>{t('navlinks.Home')}</h1>
				<Link href='/about'>{t('navlinks.About')}</Link>
			</div>
			<Tmp />
		</main>
	);
}
