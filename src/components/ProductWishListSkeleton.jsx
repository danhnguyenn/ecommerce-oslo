import { Box, Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

const ProductWishListSkeleton = ({ count }) => {
	return (
		<Grid container spacing={2} sx={{ marginTop: '15px' }}>
			{Array.from(new Array(count)).map((_, index) => (
				<Grid item key={index} xs={6} md={2} sm={4} lg={2}>
					<Box p={1}>
						<Skeleton variant="rectangular" width="100%" height="200px" />
						<Skeleton />
						<Skeleton />
						<Skeleton width="60%" />
						<Skeleton height="50px" />
					</Box>
				</Grid>
			))}
		</Grid>
	);
};

export default ProductWishListSkeleton;

ProductWishListSkeleton.propTypes = {
	count: PropTypes.number.isRequired
};
