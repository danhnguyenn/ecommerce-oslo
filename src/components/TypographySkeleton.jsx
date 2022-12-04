import { Box, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

const TypographySkeleton = ({ count }) => {
	return (
		<Box>
			{Array.from(new Array(count)).map((_, index) => (
				<Box key={index}>
					<Skeleton width={210} height={40} />
				</Box>
			))}
		</Box>
	);
};

export default TypographySkeleton;

TypographySkeleton.propTypes = {
	count: PropTypes.number.isRequired
};
