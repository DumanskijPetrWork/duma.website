import createMiddleware from 'next-intl/middleware';
import { routing } from './features/i18n/model/routing';

export default createMiddleware(routing);

export const config = {
	matcher: [
		// Enable a redirect to a matching locale at the root
		'/',

		// Set a cookie to remember the previous locale for
		// all requests that have a locale prefix
		'/(ru|en)/:path*',
	],
};