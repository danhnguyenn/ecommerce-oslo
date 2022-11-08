import { Box, CardMedia, Typography } from '@mui/material';

const PopularCardMini = () => {
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
				image="https://themes.pixelstrap.com/oslo/assets/images/fashion/product/front/2.jpg"
				alt="Picture"
				sx={{
					width: 'calc(60px + (80 - 60) * ((100vw - 320px) / (1920 - 320)))',
					height: 'calc(75px + (80 - 75) * ((100vw - 320px) / (1920 - 320)))',
					borderRadius: '5px'
				}}
			/>
			<Box>
				<Typography
					variant="body1"
					sx={{
						fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
						lineHeight: 'calc(19px + (23 - 19) * ((100vw - 320px) / (1920 - 320)))',
						color: '#767676',
						marginBottom: 'calc(0px + (10 - 0) * ((100vw - 320px) / (1920 - 320)))'
					}}
				>
					Chopard
				</Typography>
				<Typography
					variant="h5"
					sx={{
						fontWeight: 'normal',
						fontSize: 'calc(15px + (18 - 15) * ((100vw - 320px) / (1920 - 320)))',
						lineHeight: 'calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)))',
						color: '#262834',
						marginBottom: 'calc(0px + (5 - 0) * ((100vw - 320px) / (1920 - 320)))'
					}}
				>
					Shirt short mini dress
				</Typography>
				<Typography
					variant="span"
					sx={{
						color: '#262834',
						marginRight: '15px',
						display: 'inline-block',
						fontWeight: '600',
						fontSize: 'calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))',
						lineHeight: 'calc(16px + (26 - 16) * ((100vw - 320px) / (1920 - 320)))',
						marginTop: 'calc(7px + (0 - 7) * ((100vw - 320px) / (1920 - 320)))'
					}}
				>
					$130.00
				</Typography>
				<Typography
					component="del"
					sx={{
						display: 'inline-block',
						fontWeight: 600,
						fontSize: 'calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))',
						lineHeight: 'calc(16px + (26 - 16) * ((100vw - 320px) / (1920 - 320)))',
						marginTop: 'calc(7px + (0 - 7) * ((100vw - 320px) / (1920 - 320)))',
						color: '#0f8fac'
					}}
				>
					$200.00
				</Typography>
			</Box>
		</Box>
	);
};

export default PopularCardMini;
