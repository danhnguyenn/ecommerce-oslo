import { Box, CardMedia, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
	return (
		<Grid item xs={6} md={3}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: brand.isReverse ? 'column-reverse' : 'column',
					gap: 'calc(10px + (30 - 10) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<CardMedia
					component="img"
					image={`${brand.imageUrl}`}
					alt="SVG"
					sx={{
						width: '100%',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat'
					}}
				/>
				<Box>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: 'calc(15px + (18 - 15) * ((100vw - 320px) / (1920 - 320)))',
							lineHeight: 'calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)))',
							marginBottom: '-7px'
						}}
						variant="h3"
					>
						{brand.title}
					</Typography>
					<Typography
						sx={{
							fontWeight: 'normal',
							fontSize: 'calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))',
							lineHeight: 'calc(19px + (27 - 19) * ((100vw - 320px) / (1920 - 320)))',
							color: ' #767676',
							marginTop: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)))',
							marginBottom: '-1px',
							textAlign: 'center'
						}}
					>
						{brand.desc}
					</Typography>
				</Box>
			</Box>
		</Grid>
	);
};

export default BrandCard;

BrandCard.propTypes = {
	brand: PropTypes.object.isRequired
};
