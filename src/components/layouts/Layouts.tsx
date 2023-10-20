import { FC, PropsWithChildren } from 'react';
import { Footer } from './footers';
import { Header } from './headers';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

Layout.displayName = 'Layout';
