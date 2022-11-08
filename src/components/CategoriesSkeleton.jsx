import { Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

const CategoriesSkeleton = ({ count }) => {
	return (
		<Grid container spacing={2}>
			{Array.from(new Array(count)).map((_, index) => (
				<Grid item xs={12} md={3} lg={2} key={index}>
					<Skeleton variant="rectangular" width="100%">
						<div style={{ paddingTop: '60%' }} />
					</Skeleton>
				</Grid>
			))}
		</Grid>
	);
};

export default CategoriesSkeleton;

CategoriesSkeleton.propTypes = {
	count: PropTypes.number.isRequired
};
