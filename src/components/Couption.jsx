import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Couption = ({ couption }) => {
	return (
		<Grid item xs={6} md={3}>
			<Typography
				variant="h5"
				sx={{
					textAlign: 'center',
					fontWeight: '600',
					fontSize: 'calc(12px + (30 - 12) * ((100vw - 320px) / (1920 - 320)))',
					lineHeight: 'calc(17px + (43 - 17) * ((100vw - 320px) / (1920 - 320)))',
					position: 'relative',
					textTransform: 'uppercase',
					cursor: 'pointer',
					zIndex: 2,
					':hover': {
						'& span': {
							height: '100%'
						}
					}
				}}
			>
				{couption.title}
				<Typography
					component="span"
					sx={{
						width: '100%',
						height: 'calc(10px + (25 - 10) * ((100vw - 320px) / (1920 - 320)))',
						display: 'block',
						left: 0,
						right: 0,
						zIndex: '-1',
						bottom: '0px',
						position: 'absolute',
						backgroundColor: `${couption.background}`
					}}
				>
					{null}
				</Typography>
			</Typography>
			<Typography
				variant="body1"
				sx={{
					textTransform: 'uppercase',
					color: '#767676',
					fontWeight: '500',
					fontSize: 'calc(10px + (14 - 10) * ((100vw - 320px) / (1920 - 320)))',
					lineHeight: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					maxWidth: 'max-content',
					textOverflow: 'ellipsis',
					margin: '0 auto'
				}}
			>
				{couption.desc}
			</Typography>
		</Grid>
	);
};

export default Couption;

Couption.propTypes = {
	couption: PropTypes.object.isRequired
};
