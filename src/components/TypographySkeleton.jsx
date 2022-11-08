import { Box, Skeleton, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const TypographySkeleton = ({ count }) => {
	return (
		<Box>
			{Array.from(new Array(count)).map((_, index) => (
				<Typography component="div" variant="h3" key={index}>
					<Skeleton width="100%" />
				</Typography>
			))}
		</Box>
	);
};

export default TypographySkeleton;

TypographySkeleton.propTypes = {
	count: PropTypes.number.isRequired
};
