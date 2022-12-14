import MyBreadcrumbs from '$components/MyBreadcrumbs';
import ProductWishList from '$components/ProductWishList';
import ProductWishListSkeleton from '$components/ProductWishListSkeleton';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import useAuth from '$hooks/useAuth';
import useWishList from '$hooks/useWishList';
import { Box, Button, Container, Grid, styled, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const MyButtonCustom = styled(Button)(({ theme }) => ({
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '23px',
	gap: '10px',
	borderRadius: 0,
	width: '100%',
	'&:after': {
		content: '""',
		position: 'absolute',
		width: '100%',
		height: '2.5px',
		backgroundColor: 'inherit',
		left: '50%',
		transform: 'translateX(-50%)',
		bottom: '-6px'
	},
	'&:hover': {
		backgroundColor: theme.palette.secondary.light
	}
}));

const MyWishListPage = () => {
	const breadcrumb = {
		title: 'Wish List',
		currentLink: Route.MyLikeProductPage,
		prevLink: Route.HomePage
	};
	const { user } = useAuth();
	const { fetchWishList, likeList, isLoading } = useWishList();

	useEffect(() => {
		if (user) {
			fetchWishList(user._id);
		}
	}, [user]);

	if (!user) {
		return <Navigate to={Route.ErrorLoginPage} replace />;
	}

	return (
		<Box>
			<MyBreadcrumbs breadcrumb={breadcrumb} />
			<Container
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				{likeList.length === 0 ? (
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column'
						}}
					>
						<Typography variant="body1">Your wish list is currently empty</Typography>
						<Link to={Route.ProductPage} style={{ textDecoration: 'none', marginTop: '10px' }}>
							<MyButtonCustom>Back to shop</MyButtonCustom>
						</Link>
					</Box>
				) : (
					<Grid container spacing={2}>
						{isLoading ? (
							<ProductWishListSkeleton count={likeList.length} />
						) : (
							likeList.map(product => (
								<Grid item xs={6} sm={4} md={3} lg={2} key={product._id}>
									<ProductWishList product={product} />
								</Grid>
							))
						)}
					</Grid>
				)}
			</Container>
		</Box>
	);
};

export default withLayout(MyWishListPage);
