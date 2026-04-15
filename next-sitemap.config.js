/** @type {import('next-sitemap').IConfig} */

export default {
	siteUrl: 'https://figma-extractify-website.vercel.app',
	generateRobotsTxt: true,
	exclude: ['/404', '/500'],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/404', '/500']
			}
		]
	}
}