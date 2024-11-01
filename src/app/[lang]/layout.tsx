import { Locale, routing } from '@/features/i18n';
import { Cursor } from '@/shared/ui/Cursor';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	params: { lang: Locale };
}

export const metadata: Metadata = {
	title: { absolute: 'DUMA WEB', template: '%s | DUMA WEB' },
	description: '', // TODO add: metadata
};

export function generateStaticParams() {
	return routing.locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
	children,
	params: { lang },
}: Props) {
	if (!routing.locales.includes(lang)) notFound();
	setRequestLocale(lang);
	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			<html lang={lang}>
				<body>
					{children}
					<Cursor />
				</body>
			</html>
		</NextIntlClientProvider>
	);
}
