import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, CardMedia, List, ListItem, Typography } from '@mui/material';

const Team = () => {
	return (
		<Box
			sx={{
				textAlign: 'center',
				padding: '0 calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<Box sx={{ position: 'relative' }}>
				<Box
					sx={{
						zIndex: 1,
						overflow: 'hidden',
						inset: 0,
						paddingBottom: '30px',
						transform: 'scaleY(-1)',
						paddingTop: 0,
						borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%',
						backgroundColor: 'rgba(15,143,172,0.1)'
					}}
				>
					<CardMedia
						component="img"
						image="https://themes.pixelstrap.com/oslo/assets/images/team/1.png"
						alt="Team"
						sx={{
							transform: 'scaleY(-1)',
							width: '60%',
							maxWidth: '100%',
							height: 'auto',
							margin: '0 auto'
						}}
					/>
				</Box>
				<Box
					sx={{
						marginTop: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
					}}
				>
					<Typography
						variant="h6"
						sx={{
							fontWeight: '600',
							textAlign: 'center',
							fontSize: 'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))',
							color: '#262834'
						}}
					>
						Maureen Biologist
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
							fontWeight: 'normal',
							marginTop: 'calc(4px + (7 - 4) * ((100vw - 320px) / (1920 - 320)))',
							marginBottom: 'calc(4px + (8 - 4) * ((100vw - 320px) / (1920 - 320)))',
							color: '#767676'
						}}
					>
						Chief Executive Officer
					</Typography>
					<List>
						<ListItem sx={{ display: 'inline' }}>
							<FacebookIcon
								sx={{
									width: 'calc(22px + (27 - 22) * ((100vw - 320px) / (1920 - 320)))',
									height: 'calc(22px + (27 - 22) * ((100vw - 320px) / (1920 - 320)))',
									color: '#007aff'
								}}
							/>
						</ListItem>
						<ListItem sx={{ display: 'inline' }}>
							<LinkedInIcon
								sx={{
									width: 'calc(22px + (27 - 22) * ((100vw - 320px) / (1920 - 320)))',
									height: 'calc(22px + (27 - 22) * ((100vw - 320px) / (1920 - 320)))',
									color: '#007aff'
								}}
							/>
						</ListItem>
						<ListItem sx={{ display: 'inline' }}>
							<TwitterIcon
								sx={{
									width: 'calc(22px + (27 - 22) * ((100vw - 320px) / (1920 - 320)))',
									height: 'calc(22px + (27 - 22) * ((100vw - 320px) / (1920 - 320)))',
									fill: '#007aff'
								}}
							/>
						</ListItem>
					</List>
				</Box>
			</Box>
		</Box>
	);
};

export default Team;
