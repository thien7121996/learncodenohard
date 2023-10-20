import { ReactElement } from 'react';
import { Layout } from '@/components/layouts/Layouts';

const HomePage = () => {
	return <div>Home Page</div>;
};
HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default HomePage;
