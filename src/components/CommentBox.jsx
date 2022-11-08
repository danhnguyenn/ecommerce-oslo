import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PersonIcon from '@mui/icons-material/Person';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Avatar, Box, Rating, Typography } from '@mui/material';
import { useState } from 'react';

const CommentBox = () => {
	const [value, setValue] = useState(5);
	return (
		<Box
			sx={{
				padding: 'calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320)))',
				border: '1px solid rgba(221,221,221,0.5)',
				borderRadius: '10px',
				backgroundColor: '#fff',
				gap: 'calc(12px + (15 - 12) * ((100vw - 320px) / (1920 - 320)))',
				display: 'flex',
				position: 'relative',
				zIndex: 2,
				flexDirection: { xs: 'column', md: 'row', lg: 'row' }
			}}
		>
			<Avatar
				alt="Remy Sharp"
				src="https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar.jpg"
				sx={{
					width: 'calc(40px + (65 - 40) * ((100vw - 320px) / (1920 - 320)))',
					height: ' calc(40px + (65 - 40) * ((100vw - 320px) / (1920 - 320)))',
					borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%',
					margin: { xs: '0 auto' }
				}}
			/>
			<Box
				sx={{
					width: 'calc(100% - calc(55px + (65 - 55) * ((100vw - 320px) / (1920 - 320))))'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 'calc(10px + (25 - 10) * ((100vw - 320px) / (1920 - 320)))',
						borderBottom: '1px solid rgba(221,221,221,0.5)',
						paddingBottom: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)))',
						marginBottom: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)))',
						justifyContent: { xs: 'center', md: 'center', sm: 'center', lg: 'space-between' }
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 'calc(10px + (25 - 10) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						<Box sx={{ display: 'flex' }}>
							<Typography
								variant="h5"
								sx={{
									fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))',
									color: '#262834',
									fontWeight: 500,
									lineHeight: '20px',
									display: 'flex',
									alignItems: 'center',
									gap: '5px'
								}}
							>
								<PersonIcon
									sx={{
										width: '16px',
										height: '16px'
									}}
								/>
								Jimmy C. Bash
							</Typography>
						</Box>

						<Typography
							component="span"
							sx={{
								display: 'flex',
								color: '#767676',
								fontSize: '14px',
								alignItems: 'center',
								gap: '5px'
							}}
						>
							<AccessAlarmIcon
								sx={{
									width: '16px',
									height: '16px'
								}}
							/>
							Aug 22, 2022
						</Typography>
					</Box>
					<Box
						sx={{
							display: { xs: 'none', md: 'flex', lg: 'flex' },
							alignItems: 'center',
							gap: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						<Typography
							component="span"
							sx={{
								fontSize: '14px',
								color: '#767676',
								fontWeight: 500,
								display: 'flex',
								alignItems: 'center',
								lineHeight: '18px',
								gap: '5px',
								cursor: 'pointer'
							}}
						>
							<ThumbDownOffAltIcon
								sx={{
									width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
									height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))'
								}}
							/>
							23
						</Typography>
						<Typography
							component="span"
							sx={{
								fontSize: '14px',
								color: '#767676',
								fontWeight: 500,
								display: 'flex',
								alignItems: 'center',
								lineHeight: '18px',
								gap: '5px',
								cursor: 'pointer'
							}}
						>
							<ThumbUpOffAltIcon
								sx={{
									width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
									height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))'
								}}
							/>
							23
						</Typography>
					</Box>
				</Box>
				<Typography
					variant="subtitle1"
					sx={{
						fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
						color: '#767676',
						fontWeight: 'normal',
						lineHeight: '22px',
						marginBottom: '10px'
					}}
				>
					A-line short sleeves above the knee red elastance peplum detail wool-mix soft pink lining. Leather detail
					shoulder contrasting color contour stunning silhouette working peplum.
				</Typography>
				<Typography
					variant="h5"
					sx={{
						fontSize: '16px',
						fontWeight: '500',
						color: '#0f8fac',
						marginBottom: '8px'
					}}
				>
					Seniors Designer
				</Typography>
				<Rating
					name="simple-controlled"
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
					sx={{ fontSize: '14px' }}
				/>
			</Box>
		</Box>
	);
};

export default CommentBox;
