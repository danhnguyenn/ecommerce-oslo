import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ServicesItem = ({ service }) => {
	return (
		<Grid item xs={12} md={6}>
			<Box
				sx={{
					display: 'flex',
					alignItem: 'center',
					gap: '15px'
				}}
			>
				<Typography
					component="span"
					sx={{
						padding: '5px',
						width: 'calc(50px + (60 - 50) * ((100vw - 320px) / (1920 - 320)))',
						height: 'calc(50px + (60 - 50) * ((100vw - 320px) / (1920 - 320)))',
						position: 'relative',
						borderRadius: '100%',
						display: 'flex',
						alignItems: 'center',
						'&:after': {
							content: '""',
							inset: 0,
							position: 'absolute',
							width: 'inherit',
							height: 'inherit',
							backgroundColor: '#0f8fac',
							opacity: 0.08,
							borderRadius: 'inherit'
						}
					}}
				>
					{service.icon}
				</Typography>
				<Box>
					<Typography
						variant="h5"
						sx={{
							fontSize: '16px',
							lineHeight: '22px',
							color: '#262834',
							fontWeight: 500,
							marginBottom: '4px'
						}}
					>
						{service.title}
					</Typography>
					<Typography
						component="span"
						sx={{
							fontWeight: 'normal',
							fontSize: '14px',
							color: '#767676'
						}}
					>
						{service.desc}
					</Typography>
				</Box>
			</Box>
		</Grid>
	);
};

export default ServicesItem;

ServicesItem.propTypes = {
	service: PropTypes.object.isRequired
};
