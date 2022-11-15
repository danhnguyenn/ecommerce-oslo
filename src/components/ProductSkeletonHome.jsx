import { Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

const ProductSkeletonHome = ({ count }) => {
	return (
		<>
			{Array.from(new Array(count)).map((_, index) => (
				<Grid item key={index} xs={6} md={3} sm={4}>
					<Skeleton
						variant="rectangular"
						width="100%"
						sx={{
							height: {
								xs: '200px',
								sm: '200px',
								md: '250px',
								lg: '280px'
							}
						}}
					/>
					<Skeleton />
					<Skeleton />
					<Skeleton width="60%" />
				</Grid>
			))}
		</>
	);
};

export default ProductSkeletonHome;

ProductSkeletonHome.propTypes = {
	count: PropTypes.number.isRequired
};
