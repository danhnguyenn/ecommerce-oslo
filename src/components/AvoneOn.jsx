import useProduct from '$hooks/useProduct';
import { Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import HeadingText from './HeadingText';
import ProductCard from './ProductCard';
import ProductSkeletonHome from './ProductSkeletonHome';

const AvoneOn = () => {
	const headingText = {
		title: 'AVONE ON INSTAGRAM',
		desc: "Elegance isn't solely defined by what you wear. It's how you carry yourself, how you speak, what you read."
	};

	const { isLoading, products, fetchProductAll, pagination, categories } = useProduct();

	useEffect(() => {
		fetchProductAll();
	}, [fetchProductAll, categories]);
	return (
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
	);
};

export default AvoneOn;
