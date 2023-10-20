/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	productionBrowserSourceMaps: process.env.NEXT_PUBLIC_ENV !== 'prod',
	compiler: {
		styledComponents: true,
	},
	images: {
		formats: ['image/webp'],
	},
};

module.exports = nextConfig;
