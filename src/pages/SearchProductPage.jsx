import MyBreadcrumbs from '$components/MyBreadcrumbs';
import ProductCard from '$components/ProductCard';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Container, Grid, styled, TextField } from '@mui/material';

const MyButtonSearch = styled(Button)(({ theme }) => ({
	color: theme.palette.primary.main,
	position: 'absolute',
	right: 0,
	top: 0,
	bottom: 0
}));
const SearchProductPage = () => {
	const breadcrumb = {
		title: 'Search',
		currentLink: Route.SearchPage,
		prevLink: Route.HomePage
	};
	return (
		<Box>
			<MyBreadcrumbs breadcrumb={breadcrumb} />
			<Container
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Box
					sx={{
						position: 'relative',
						marginBottom: 'calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320)))'
					}}
				>
					<TextField
						fullWidth
						placeholder="Search here"
						sx={{
							margin: '0 auto',
							fontSize: 'calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)))',
							position: 'relative',
							'& fieldset': {
								border: '1px solid rgba(221,221,221,0.5)',
								borderRadius: '100px !important'
							},
							'&:hover fieldset': {
								borderColor: 'none'
							},
							'& .MuiOutlinedInput-root': {
								'& > fieldset': { borderColor: 'none' }
							}
						}}
					/>
					<MyButtonSearch>
						<SearchIcon sx={{ fill: '#0f8fac' }} />
					</MyButtonSearch>
				</Box>
				<Grid container spacing={2}>
					<Grid item={12} md={2} sm={3} lg={3}>
						<ProductCard />
					</Grid>
					<Grid item={12} md={2} sm={3} lg={3}>
						<ProductCard />
					</Grid>
					<Grid item={12} md={2} sm={3} lg={3}>
						<ProductCard />
					</Grid>
					<Grid item={12} md={2} sm={3} lg={3}>
						<ProductCard />
					</Grid>
					<Grid item={12} md={2} sm={3} lg={3}>
						<ProductCard />
					</Grid>
					<Grid item={12} md={2} sm={3} lg={3}>
						<ProductCard />
					</Grid>
					<Grid item={12} md={2} sm={3} lg={3}>
						<ProductCard />
					</Grid>
					<Grid item={12} md={2} sm={3} lg={3}>
						<ProductCard />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default withLayout(SearchProductPage);
