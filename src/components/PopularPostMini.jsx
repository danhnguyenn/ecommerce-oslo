import { Box, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const PopularPostMini = ({ blog }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				padding: '10px 7px',
				gap: '14px',
				position: 'relative',
				marginBottom: '5px'
			}}
		>
			<CardMedia
				component="img"
				image={blog.imageUrl}
				alt="Picture"
				sx={{
					borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%',
					width: '54px',
					height: '54px'
				}}
			/>
			<Box>
				<Typography
					variant="h5"
					sx={{
						fontWeight: 'normal',
						fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
						color: '#262834',
						lineHeight: 'calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)))',
						marginBottom: 'calc(0px + (5 - 0) * ((100vw - 320px) / (1920 - 320)))'
					}}
				>
					{blog.title}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontSize: '14px',
						color: '#767676',
						display: 'block',
						marginTop: '3px'
					}}
				>
					August 03/2022
				</Typography>
			</Box>
		</Box>
	);
};

PopularPostMini.propTypes = {
	blog: PropTypes.object.isRequired
};

export default PopularPostMini;
