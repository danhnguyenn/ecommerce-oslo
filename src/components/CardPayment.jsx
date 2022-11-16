import { Box, CardMedia, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const CardPayment = ({ color, cardInfo, cardType, border }) => {
	return (
		<Grid item xs={12} sm={6} md={6} lg={4}>
			<Box
				sx={{
					padding: '15px',
					border: '1px solid #ddd',
					borderRadius: '5px',
					position: 'relative',
					boxSizing: 'border-box',
					borderColor: `${border}`,
					backgroundColor: `${color}`
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}
				>
					<CardMedia
						component="img"
						image={`${cardInfo}`}
						alt="Card Info"
						sx={{
							width: 'calc(95px + (120 - 95) * ((100vw - 320px) / (1920 - 320)))',
							height: 'auto'
						}}
					/>
					<CardMedia
						component="img"
						image={`${cardType}`}
						alt="Card Type"
						sx={{
							width: 'calc(35px + (40 - 35) * ((100vw - 320px) / (1920 - 320)))',
							height: 'auto'
						}}
					/>
				</Box>
				<Box sx={{ marginTop: '15px' }}>
					<Box
						component="span"
						sx={{
							fontSize: '14px',
							color: '#767676'
						}}
					>
						Card Number
					</Box>
					<Typography
						variant="h5"
						sx={{
							fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
							color: '#262834',
							fontWeight: 500,
							marginTop: 'calc(3px + (4 - 3) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						6458 50XX XXXX 0851
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}
				>
					<Box sx={{ marginTop: '15px' }}>
						<Box
							component="span"
							sx={{
								fontSize: '14px',
								color: '#767676'
							}}
						>
							Name On Card
						</Box>
						<Typography
							variant="h5"
							sx={{
								fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
								color: '#262834',
								fontWeight: 500,
								marginTop: 'calc(3px + (4 - 3) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							Josephin water
						</Typography>
					</Box>
					<Box
						sx={{
							marginTop: '15px'
						}}
					>
						<Box
							component="span"
							sx={{
								fontSize: '14px',
								color: '#767676'
							}}
						>
							Validity
						</Box>
						<Typography
							variant="h5"
							sx={{
								fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
								color: '#262834',
								fontWeight: 500,
								marginTop: 'calc(3px + (4 - 3) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							XX/XX
						</Typography>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

CardPayment.propTypes = {
	color: PropTypes.string.isRequired,
	cardInfo: PropTypes.string.isRequired,
	cardType: PropTypes.string.isRequired,
	border: PropTypes.string.isRequired
};

export default CardPayment;
