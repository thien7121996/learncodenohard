import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ReactNode, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/components/ui/GlobalStyle';
import { theme } from '@/configs/theme';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout || (page => page);

	return (
		<ThemeProvider theme={theme}>
			<NextNProgress
				color={theme.colors.primary}
				height={5}
				options={{ showSpinner: false }}
			/>
			<GlobalStyle />
			{getLayout(<Component {...pageProps} />)}
		</ThemeProvider>
	);
}

export default MyApp;
