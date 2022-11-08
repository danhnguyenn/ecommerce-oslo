import { Box, Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

const ProductSkeletonHome = ({ count }) => {
	return (
		<Grid container spacing={2} sx={{ marginTop: '15px' }}>
			{Array.from(new Array(count)).map((_, index) => (
				<Grid item key={index} xs={6} md={3} sm={4}>
					<Box p={1}>
						<Skeleton variant="rectangular" width="100%" height="300px" />
						<Skeleton />
						<Skeleton />
						<Skeleton width="60%" />
					</Box>
				</Grid>
			))}
		</Grid>
	);
};

export default ProductSkeletonHome;

ProductSkeletonHome.propTypes = {
	count: PropTypes.number.isRequired
};
