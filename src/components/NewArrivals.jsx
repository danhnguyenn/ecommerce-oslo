import useProduct from '$hooks/useProduct';
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import HeadingText from './HeadingText';
import ProductCard from './ProductCard';
import ProductSkeletonHome from './ProductSkeletonHome';

const NewArrivals = () => {
	const headingText = {
		title: 'NEW ARRIVALS',
		desc: 'The best ways to change your summer wardrobe into autumn wardrobe.'
	};

	const { fetchProductAll, products, categories, isLoading, pagination } = useProduct();

	useEffect(() => {
		fetchProductAll();
	}, [fetchProductAll, categories]);
	return (
		<>
			<Container
				sx={{
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<HeadingText heading={headingText} />
				{isLoading ? (
					<Grid container spacing={2} sx={{ marginTop: '15px' }}>
						<ProductSkeletonHome count={pagination.limit} />
					</Grid>
				) : (
					<Grid container spacing={2} sx={{ marginTop: '15px' }}>
						{products.map(product => (
							<Grid item xs={6} md={3} sm={6} key={product._id}>
								<ProductCard product={product} />
							</Grid>
						))}
					</Grid>
				)}
			</Container>
			<Box
				sx={{
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					position: 'relative'
				}}
			>
				<CardMedia
					component="img"
					image="https://themes.pixelstrap.com/oslo/assets/images/fashion/banner/banner2.jpg"
					alt="Background"
					sx={{
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						height: { xs: '200px', lg: 'auto' }
					}}
				/>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%,-50%)'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '10px',
							alignItems: 'center'
						}}
					>
						<Typography
							variant="body1"
							sx={{
								fontWeight: 'normal',
								fontSize: {
									lg: 'calc(14px + (30 - 14) * ((100vw - 320px) / (1920 - 320)))'
								},
								lineHeight: 'calc(27px + (46 - 27) * ((100vw - 320px) / (1920 - 320)))',
								color: '#262834',
								textTransform: 'uppercase',
								letterSpacing: '0.25em',
								marginBottom: '-24px'
							}}
						>
							New Arrivals
						</Typography>
						<Typography
							variant="body1"
							component="span"
							sx={{
								fontWeight: 800,
								fontSize: {
									lg: "'56px'"
								},
								color: '#262834',
								textTransform: 'uppercase',
								letterSpacing: '0.25em',
								marginBottom: '-32px',
								fontFamily: '"Montserrat","san-self"'
							}}
						>
							JUST
						</Typography>
						<Typography
							variant="body1"
							component="span"
							sx={{
								fontWeight: 800,
								fontSize: {
									lg: '56px'
								},
								color: '#262834',
								textTransform: 'uppercase',
								letterSpacing: '0.25em',
								marginBottom: '-32px',
								fontFamily: '"Montserrat","san-self"'
							}}
						>
							FOR
						</Typography>
						<Typography
							variant="body1"
							component="span"
							sx={{
								fontWeight: 'normal',
								fontSize: 'calc(0px + (119 - 0) * ((100vw - 320px) / (1920 - 320)))',
								lineHeight: 'calc(45px + (130 - 45) * ((100vw - 320px) / (1920 - 320)))',
								color: '#0f8fac',
								transform: 'rotate(-22.89deg)',
								transformOrigin: 'center',
								marginTop: '-0.3em',
								position: 'relative',
								right: '8%',
								fontFamily: '"Leckerli One","cursive"'
							}}
						>
							You
						</Typography>
					</Box>
					<Button
						sx={{
							width: '100%',
							background: '#000',
							color: '#fff',
							marginTop: '20px',
							position: 'absolute',
							bottom: {
								xs: '-65%',
								lg: '-30%'
							},
							'&:hover': {
								background: '#FFBA00'
							}
						}}
					>
						www.osl.com
					</Button>
				</Box>
				<CardMedia
					component="img"
					sx={{
						width: 'calc(16px + (37 - 16) * ((100vw - 320px) / (1920 - 320)))',
						position: 'absolute',
						left: '55%',
						bottom: '24px'
					}}
					image="https://themes.pixelstrap.com/oslo/assets/icons/svg/pointer.svg"
					alt="Picture"
				/>
			</Box>
		</>
	);
};

export default NewArrivals;
