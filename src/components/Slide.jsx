import Route from '$constants/Route';
import EastIcon from '@mui/icons-material/East';
import { Box, Button, Card, CardContent, CardMedia, Paper, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyButtonCustom = styled(Button)(({ theme }) => ({
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '23px',
	gap: '10px',
	borderRadius: 0,
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
const Slide = () => {
	const navigate = useNavigate();
	return (
		<Paper
			sx={{
				backgroundImage: `url(${'https://themes.pixelstrap.com/oslo/assets/images/fashion/banner/banner1.jpg'})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				paddingTop: '40%',
				position: 'relative'
			}}
		>
			<Box>
				<CardMedia
					component="img"
					image="https://themes.pixelstrap.com/oslo/assets/images/fashion/slider/banner1-1.png"
					alt="Banner 1"
					sx={{
						width: { xs: '35%', lg: '41%' },
						position: 'absolute',
						left: '0%',
						bottom: 0
					}}
				/>
			</Box>
			<Box
				sx={{
					width: {
						xs: 'calc(284px + (613 - 284) * ((100vw - 320px) / (1920 - 320)))',
						md: 'calc(243px + (613 - 243) * ((100vw - 320px) / (1920 - 320)))',
						lg: 'calc(25px + (773 - 16) * ((100vw - 320px) / (1920 - 320)))'
					},
					textAlign: 'center',
					position: 'absolute',
					left: '50%',
					top: {
						xs: '10px',
						md: 'calc(18px + (148 - 18) * ((100vw - 320px) / (1920 - 320)))',
						sm: 'calc(70px + (148 - 70) * ((100vw - 320px) / (1920 - 320)))',
						lg: 'calc(70px + (148 - 70) * ((100vw - 320px) / (1920 - 320)))'
					},
					transform: 'translateX(-50%)'
				}}
			>
				<Typography
					variant="h1"
					sx={{
						textTransform: 'uppercase',
						fontWeight: 300,
						color: '#262834',
						fontSize: {
							xs: '16px',
							md: 'calc(17px + (25 - 17) * ((100vw - 320px) / (1920 - 320)))',
							sm: 'calc(0px + (50 - 0) * ((100vw - 320px) / (1920 - 320)))',
							lg: 'calc(0px + (50 - 0) * ((100vw - 320px) / (1920 - 320)))'
						},
						lineHeight: {
							xs: 'calc(29px + (50 - 29) * ((100vw - 320px) / (1920 - 320)))',
							md: 'calc(29px + (50 - 29) * ((100vw - 320px) / (1920 - 320)))',
							sm: 'calc(10px + (82 - 10) * ((100vw - 320px) / (1920 - 320)))',
							lg: 'calc(10px + (82 - 10) * ((100vw - 320px) / (1920 - 320)))'
						}
					}}
				>
					Find your &nbsp;
					<Typography
						component="span"
						sx={{
							fontWeight: 'bold',
							fontSize: {
								xs: '16px',
								md: '16px',
								lg: 'calc(0px + (50 - 0) * ((100vw - 320px) / (1920 - 320)))'
							},
							lineHeight: 'calc(10px + (82 - 10) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						Latest &nbsp;
					</Typography>
					<Typography
						component="span"
						sx={{
							fontWeight: 'bold',
							color: '#0f8fac',
							position: 'relative',
							fontSize: { xs: '16px', md: '16px', lg: 'calc(0px + (50 - 0) * ((100vw - 320px) / (1920 - 320)))' },
							lineHeight: 'calc(10px + (82 - 10) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						Collection
						<CardMedia
							component="img"
							image="https://themes.pixelstrap.com/oslo/assets/svg/shape.svg"
							alt="Shape"
							sx={{
								height: '140%',
								width: '115%',
								position: 'absolute',
								// left: 'calc(0px + (-34 + 0) * ((100vw - 320px) / (1920 - 320)))',
								left: '-8%',
								bottom: {
									xs: '-2px',
									lg: '-7px'
								}
							}}
						/>
					</Typography>
					of favorite &nbsp;
					<Typography
						component="span"
						sx={{
							fontWeight: 'bold',
							color: '#262834',
							position: 'relative',
							fontSize: { xs: '16px', lg: "'calc(0px + (50 - 0) * ((100vw - 320px) / (1920 - 320)))'" },
							lineHeight: 'calc(10px + (82 - 10) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						style &nbsp;
					</Typography>
					here
				</Typography>
				<Typography
					variant="subtitle1"
					sx={{
						color: '#767676',
						margin: '0 auto',
						fontSize: 'calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))',
						fontWeight: 'normal',
						lineHeight: 'calc(18px + (30 - 18) * ((100vw - 320px) / (1920 - 320)))',
						marginTop: 'calc(0px + (18 - 0) * ((100vw - 320px) / (1920 - 320)))',
						marginBottom: 'calc(10px + (40 - 10) * ((100vw - 320px) / (1920 - 320)))',
						display: {
							xs: 'none',
							md: 'none',
							sm: 'block',
							lg: 'block'
						}
					}}
				>
					We try to provide the best for our customers and try to make sure we always provide the best service for you.
				</Typography>
				<MyButtonCustom
					variant="contained"
					sx={{
						marginTop: {
							xs: '5px'
						},
						fontSize: {
							xs: '12px',
							sm: '12px',
							md: 'calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)))',
							lg: 'calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)))'
						},
						padding: {
							xs: '4px 12px',
							sm: '4px 12px',
							md: 'calc(4px + (12 - 4) * ((100vw - 320px) / (1920 - 320))) calc(20px + (50 - 20) * ((100vw - 320px) / (1920 - 320)))',
							lg: 'calc(4px + (12 - 4) * ((100vw - 320px) / (1920 - 320))) calc(20px + (50 - 20) * ((100vw - 320px) / (1920 - 320)))'
						},

						gap: { xs: '5px' }
					}}
					onClick={() => navigate(Route.ProductPage)}
				>
					Shop
					<EastIcon sx={{ fontSize: { xs: '12px' } }} />
				</MyButtonCustom>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					bottom: 'calc(28px + (155 - 28) * ((100vw - 320px) / (1920 - 320)))',
					right: 'calc(30px + (417 - 32) * ((100vw - 320px) / (1920 - 320)))',
					width: '17.5%',
					display: {
						xs: 'none',
						md: 'none',
						sm: 'none',
						lg: 'block'
					}
				}}
			>
				<Card
					sx={{
						boxShadow: '0px 4px 20px rgba(15,143,172,0.1)',
						width: 'calc(10px + (197 - 10) * ((100vw - 320px) / (1920 - 320)))',
						padding: '10px',
						backgroundColor: ' #fff',
						border: '1px solid rgba(0,0,0,0.125)'
					}}
				>
					<CardMedia
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							backgroundColor: '#f6f9fc'
						}}
						component="img"
						height="194"
						image="https://themes.pixelstrap.com/oslo/assets/images/fashion/slider/banner1-c2.png"
						alt="Image"
					/>
					<CardContent sx={{ paddingTop: '10px' }}>
						<Typography
							variant="h5"
							sx={{
								color: '#262834',
								fontWeight: 600,
								fontSize: '14px'
							}}
						>
							Winter Jacket
						</Typography>
						<Typography
							variant="h5"
							sx={{
								color: '#ffa422',
								fontWeight: 'bold',
								fontSize: '14px',
								lineHeight: '23px'
							}}
						>
							$160.00
						</Typography>
					</CardContent>
				</Card>
			</Box>
			<Box
				sx={{
					right: '21%',
					position: 'absolute',
					bottom: '8%',
					zIndex: 10,
					display: {
						xs: 'none',
						md: 'none',
						sm: 'none',
						lg: 'block'
					}
				}}
			>
				<Card
					sx={{
						boxShadow: '0px 4px 20px rgba(15,143,172,0.1)',
						width: 'calc(10px + (197 - 10) * ((100vw - 320px) / (1920 - 320)))',
						padding: '10px',
						backgroundColor: ' #fff',
						border: '1px solid rgba(0,0,0,0.125)'
					}}
				>
					<CardMedia
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							backgroundColor: '#f6f9fc'
						}}
						component="img"
						height="194"
						image="https://themes.pixelstrap.com/oslo/assets/images/fashion/slider/banner1-c2.png"
						alt="Image"
					/>
					<CardContent sx={{ paddingTop: '10px' }}>
						<Typography
							variant="h5"
							sx={{
								color: '#262834',
								fontWeight: 600,
								fontSize: '14px'
							}}
						>
							Winter Jacket
						</Typography>
						<Typography
							variant="h5"
							sx={{
								color: '#ffa422',
								fontWeight: 'bold',
								fontSize: '14px',
								lineHeight: '23px'
							}}
						>
							$160.00
						</Typography>
					</CardContent>
				</Card>
			</Box>
			<Box>
				<CardMedia
					component="img"
					image="https://themes.pixelstrap.com/oslo/assets/images/fashion/slider/banner1-2.png"
					alt="Banner 1"
					sx={{
						width: { xs: '30%', lg: '35%' },
						position: 'absolute',
						right: '1%',
						bottom: 0
					}}
				/>
			</Box>
		</Paper>
	);
};

export default Slide;
