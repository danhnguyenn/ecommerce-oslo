import { Box, Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

const ProductSkeleton = ({ count }) => {
	return (
		<Grid container spacing={2} sx={{ marginTop: '15px' }}>
			{Array.from(new Array(count)).map((_, index) => (
				<Grid item key={index} xs={6} sm={6} md={3} lg={3}>
					<Box p={1}>
						<Skeleton
							variant="rectangular"
							width="100%"
							sx={{
								height: {
									xs: '200px',
									sm: '200px',
									md: '250px',
									lg: '300px'
								}
							}}
						/>
						<Skeleton />
						<Skeleton />
						<Skeleton width="60%" />
					</Box>
				</Grid>
			))}
		</Grid>
	);
};

export default ProductSkeleton;

ProductSkeleton.propTypes = {
	count: PropTypes.number.isRequired
};
