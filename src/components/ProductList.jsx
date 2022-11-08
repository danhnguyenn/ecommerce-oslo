import useProduct from '$hooks/useProduct';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Grid, Pagination, PaginationItem } from '@mui/material';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';

const ProductList = () => {
	const { products, fetchProductAll, isLoading, pagination, handlePaginationChange, filter } = useProduct();

	const handlePageChange = (_, page) => {
		handlePaginationChange({ ...pagination, page });
	};

	useEffect(() => {
		fetchProductAll();
	}, [fetchProductAll, pagination.page, filter]);

	return (
		<Box>
			{isLoading ? (
				<Grid container spacing={2} sx={{ marginTop: '15px' }}>
					<ProductSkeleton count={pagination.limit} />
				</Grid>
			) : (
				<Grid container spacing={2} sx={{ marginTop: '15px' }}>
					{products.map(product => (
						<Grid item xs={6} md={3} sm={3} key={product._id}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>
			)}
			<Pagination
				sx={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: 'calc(20px + (42 - 20) * ((100vw - 320px) / (1920 - 320)))',
					borderRadius: 'none',
					'& .Mui-selected': {
						background: '#0f8fac',
						color: '#fff'
					}
				}}
				color="primary"
				count={Math.ceil(pagination.total / pagination.limit)}
				page={pagination.page}
				onChange={handlePageChange}
				renderItem={item => (
					<PaginationItem components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
				)}
			/>
		</Box>
	);
};

export default ProductList;
