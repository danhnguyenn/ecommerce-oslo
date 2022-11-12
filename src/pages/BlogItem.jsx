import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Box, Button, CardMedia, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const MyButtonCustom = styled(Button)(({ theme }) => ({
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '20px',
	gap: '10px',
	borderRadius: 0,
	fontSize: '14px',
	padding: '9px calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
	'&:after': {
		content: '""',
		position: 'absolute',
		width: '100%',
		height: '2.5px',
		backgroundColor: 'inherit',
		left: '50%',
		transform: 'translateX(-50%)',
		bottom: '-6px'
	},
	'&:hover': {
		backgroundColor: theme.palette.secondary.light
	}
}));

const BlogItem = ({ item }) => {
	return (
		<Box
			sx={{
				border: '1px solid rgba(221,221,221,0.5)',
				width: '100%',
				display: 'flex',
				borderRadius: '10px',
				overflow: 'hidden',
				marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<CardMedia
				component="img"
				image={item.imageUrl}
				alt="Paella dish"
				sx={{
					width: '30%'
				}}
			/>
			<Box
				sx={{
					width: 'calc(100% - 30%)',
					padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Box
					component="span"
					sx={{
						fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
						marginBottom: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)))',
						color: '#0f8fac',
						display: 'flex',
						alignItems: 'center',
						gap: '8px'
					}}
				>
					<AccessAlarmIcon
						sx={{
							width: '16px',
							height: '16px'
						}}
					/>
					{item.date}
				</Box>
				<Typography
					variant="h5"
					sx={{
						fontSize: 'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))',
						color: ' #262834',
						fontWeight: 500,
						lineHeight: 'calc(20px + (24 - 22) * ((100vw - 320px) / (1920 - 320)))',
						marginBottom: '5px',
						marginTop: '-3px'
					}}
				>
					{item.title}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
						color: '#767676',
						lineHeight: 'calc(20px + (23 - 20) * ((100vw - 320px) / (1920 - 320)))',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						'-webkit-line-clamp': '2',
						display: '-webkit-box',
						'-webkit-box-orient': 'vertical'
					}}
				>
					{item.desc}
				</Typography>
				<Box
					sx={{
						paddingTop: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
						marginTop: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						borderTop: '1px solid rgba(221,221,221,0.5)'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '10px'
						}}
					>
						<CardMedia
							component="img"
							image={item.avatar}
							alt="Paella dish"
							sx={{
								width: 'calc(40px + (50 - 40) * ((100vw - 320px) / (1920 - 320)))',
								height: 'calc(40px + (50 - 40) * ((100vw - 320px) / (1920 - 320)))',
								borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%',
								overflow: 'hidden'
							}}
						/>
						<Typography
							variant="h5"
							sx={{
								fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
								fontWeight: 500,
								color: '#262834'
							}}
						>
							{item.name}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						<Box
							component="span"
							sx={{
								fontSize: '14px',
								color: '#767676',
								fontWeight: 500,
								display: 'flex',
								lineHeight: '18px',
								alignItems: 'center',
								gap: '5px',
								cursor: 'pointer'
							}}
						>
							<ThumbDownOffAltIcon />
							26
						</Box>
						<Box
							component="span"
							sx={{
								fontSize: '14px',
								color: '#767676',
								fontWeight: 500,
								display: 'flex',
								lineHeight: '18px',
								alignItems: 'center',
								gap: '5px',
								cursor: 'pointer'
							}}
						>
							<ThumbUpOffAltIcon />
							100
						</Box>
						<MyButtonCustom>Reply</MyButtonCustom>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

BlogItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default BlogItem;
