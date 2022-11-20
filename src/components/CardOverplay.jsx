import { Box, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const CardOverplay = ({ imageUrl, title, name }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				height: '100%'
			}}
		>
			<CardMedia
				component="img"
				image={`${imageUrl}`}
				alt="Image"
				sx={{
					height: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					display: 'block',
					'&:before': {
						paddingTop: '163%',
						content: '""',
						display: 'block'
					}
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					left: '6%',
					bottom: '20px',
					width: '90%',
					padding: 'calc(9px + (11 - 9) * ((100vw - 320px) / (1920 - 320)))',
					textAlign: 'center',
					background: 'rgba(255,255,255,0.8)',
					boxShadow: '0px 4px 50px rgb(0 0 0 / 10%)',
					backdropFilter: 'blur(4px)'
				}}
			>
				<Typography
					component="span"
					sx={{
						fontWeight: 'normal',
						display: 'block',
						fontSize: '14px',
						lineHeight: '20px',
						color: '#767676',
						textTransform: 'capitalize',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
						maxWidth: 'max-content',
						textOverflow: 'ellipsis',
						margin: '0 auto',
						marginTop: '-2px'
					}}
				>
					{title}
				</Typography>
				<Typography
					component="h3"
					sx={{
						fontWeight: '500',
						fontSize: 'calc(11px + (16 - 11) * ((100vw - 320px) / (1920 - 320)))',
						lineHeight: 'calc(19px + (23 - 19) * ((100vw - 320px) / (1920 - 320)))',
						color: '#262834',
						textTransform: 'uppercase',
						textAlign: 'center',
						marginBottom: '-5px'
					}}
				>
					{name}
				</Typography>
			</Box>
		</Box>
	);
};

export default CardOverplay;

CardOverplay.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};
