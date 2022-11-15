import MyBreadcrumbs from '$components/MyBreadcrumbs';
import ShopList from '$components/ShopList';
import SlideCategories from '$components/SlideCategories';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import { Box } from '@mui/material';

const ProductPage = () => {
	window.scrollTo(0, 0);
	const breadcrumb = {
		title: 'Shop',
		currentLink: Route.ProductPage,
		prevLink: Route.HomePage
	};
	return (
		<Box>
			<MyBreadcrumbs breadcrumb={breadcrumb} />
			<Box
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<SlideCategories />
				<ShopList />
			</Box>
		</Box>
	);
};

export default withLayout(ProductPage);
