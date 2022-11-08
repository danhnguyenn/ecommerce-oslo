import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const SubTitleAbout = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.light,
	fontSize: ' calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)))',
	fontWeight: '500',
	marginBottom: '4px'
}));

const TitleAbout = styled(Typography)(({ theme }) => ({
	fontSize: 'calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: 'calc(27px + (42 - 27) * ((100vw - 320px) / (1920 - 320)))',
	color: '#262834',
	fontWeight: '500',
	marginBottom: 'calc(8px + (14 - 8) * ((100vw - 320px) / (1920 - 320)))'
}));

const TextParagraph = styled(Typography)(({ theme }) => ({
	fontSize: '16px',
	color: '#767676',
	fontWeight: 'normal',
	lineHeight: '22px'
}));

const BoxCustom = styled(Box)(({ theme }) => ({
	padding: 'calc(6px + (20 - 6) * ((100vw - 320px) / (1920 - 320)))',
	borderRadius: '10px',
	backgroundColor: '#fafafa',
	display: 'flex',
	alignItems: 'flex-start',
	gap: 'calc(8px + (15 - 8) * ((100vw - 320px) / (1920 - 320)))'
}));

const MyIcon = styled(Typography)(({ theme }) => ({
	width: 'calc(35px + (40 - 35) * ((100vw - 320px) / (1920 - 320)))',
	height: 'calc(35px + (40 - 35) * ((100vw - 320px) / (1920 - 320)))',
	display: 'flex',
	justifyContent: 'center',
	borderRadius: '100%',
	padding: '10px',
	position: 'relative',
	'&:after': {
		inset: 0,
		position: 'absolute',
		content: '""',
		width: 'inherit',
		height: 'inherit',
		borderRadius: 'inherit',
		backgroundColor: theme.palette.primary.light,
		opacity: '0.07'
	}
}));

const AboutSection = () => {
	return (
		<Container
			sx={{
				paddingBottom: ' calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
				paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<Grid
				container
				spacing={2}
				sx={{
					flexDirection: { xs: 'column-reverse', md: 'column-reverse', lg: 'row' }
				}}
			>
				<Grid item xs={12} md={7}>
					<Box
						sx={{
							marginBottom: ' calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						<SubTitleAbout variant="h5">Oslo is the Best Market Place Buying</SubTitleAbout>
						<TitleAbout variant="h4">We Provide Latest Style, Unique Innovation and Creativity</TitleAbout>
						<TextParagraph variant="subtitle1">
							Smart rich stretch viscose green yellow poly- blend fabric spaghetti straps figure-skimming fit. Best
							seller signature waist cut pockets cotton-mix navy blue tailoring elegant cashmere. Monochrome textures
							casual daily polo neck knitted floral effortless short sleeve. Smart rich stretch viscose green yellow
							poly- blend fabric spaghetti straps figure-skimming fit.
						</TextParagraph>
					</Box>
					<Box>
						<Grid container spacing={2} sx={{ alignItems: 'center' }}>
							<Grid item xs={6} md={4}>
								<BoxCustom>
									<MyIcon component="span">
										<PeopleAltIcon
											sx={{
												width: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												color: '#0f8fac',
												position: 'relative',
												zIndex: 2
											}}
										/>
									</MyIcon>
									<Box>
										<Typography
											variant="h6"
											sx={{
												fontSize: 'calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)))',
												fontWeight: '500',
												color: '#262834'
											}}
										>
											328M
										</Typography>
										<Typography
											variant="body1"
											sx={{
												marginBottom: 0,
												color: '#767676',
												marginTop: 'calc(3px + (5 - 3) * ((100vw - 320px) / (1920 - 320)))'
											}}
										>
											Register
										</Typography>
									</Box>
								</BoxCustom>
							</Grid>
							<Grid item xs={6} md={4}>
								<BoxCustom>
									<MyIcon component="span">
										<CardGiftcardIcon
											sx={{
												width: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												color: '#0f8fac',
												position: 'relative',
												zIndex: 2
											}}
										/>
									</MyIcon>
									<Box>
										<Typography
											variant="h6"
											sx={{
												fontSize: 'calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)))',
												fontWeight: '500',
												color: '#262834'
											}}
										>
											20,000+
										</Typography>
										<Typography
											variant="body1"
											sx={{
												marginBottom: 0,
												color: '#767676',
												marginTop: 'calc(3px + (5 - 3) * ((100vw - 320px) / (1920 - 320)))'
											}}
										>
											Seller
										</Typography>
									</Box>
								</BoxCustom>
							</Grid>
							<Grid item xs={6} md={4}>
								<BoxCustom>
									<MyIcon component="span">
										<ShoppingCartIcon
											sx={{
												width: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												color: '#0f8fac',
												position: 'relative',
												zIndex: 2
											}}
										/>
									</MyIcon>
									<Box>
										<Typography
											variant="h6"
											sx={{
												fontSize: 'calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)))',
												fontWeight: '500',
												color: '#262834'
											}}
										>
											70,000+
										</Typography>
										<Typography
											variant="body1"
											sx={{
												marginBottom: 0,
												color: '#767676',
												marginTop: 'calc(3px + (5 - 3) * ((100vw - 320px) / (1920 - 320)))'
											}}
										>
											Daily Orders
										</Typography>
									</Box>
								</BoxCustom>
							</Grid>
							<Grid item xs={6} md={4}>
								<BoxCustom>
									<MyIcon component="span">
										<HomeRepairServiceIcon
											sx={{
												width: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												color: '#0f8fac',
												position: 'relative',
												zIndex: 2
											}}
										/>
									</MyIcon>
									<Box>
										<Typography
											variant="h6"
											sx={{
												fontSize: 'calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)))',
												fontWeight: '500',
												color: '#262834'
											}}
										>
											200M
										</Typography>
										<Typography
											variant="body1"
											sx={{
												marginBottom: 0,
												color: '#767676',
												marginTop: 'calc(3px + (5 - 3) * ((100vw - 320px) / (1920 - 320)))'
											}}
										>
											Daily Page visit
										</Typography>
									</Box>
								</BoxCustom>
							</Grid>
							<Grid item xs={6} md={4}>
								<BoxCustom>
									<MyIcon component="span">
										<ShowChartIcon
											sx={{
												width: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												color: '#0f8fac',
												position: 'relative',
												zIndex: 2
											}}
										/>
									</MyIcon>
									<Box>
										<Typography
											variant="h6"
											sx={{
												fontSize: 'calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)))',
												fontWeight: '500',
												color: '#262834'
											}}
										>
											80%
										</Typography>
										<Typography
											variant="body1"
											sx={{
												marginBottom: 0,
												color: '#767676',
												marginTop: 'calc(3px + (5 - 3) * ((100vw - 320px) / (1920 - 320)))'
											}}
										>
											Growth Per Year
										</Typography>
									</Box>
								</BoxCustom>
							</Grid>
							<Grid item xs={6} md={4}>
								<BoxCustom>
									<MyIcon component="span">
										<MilitaryTechIcon
											sx={{
												width: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
												color: '#0f8fac',
												position: 'relative',
												zIndex: 2
											}}
										/>
									</MyIcon>
									<Box>
										<Typography
											variant="h6"
											sx={{
												fontSize: 'calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)))',
												fontWeight: '500',
												color: '#262834'
											}}
										>
											500+
										</Typography>
										<Typography
											variant="body1"
											sx={{
												marginBottom: 0,
												color: '#767676',
												marginTop: 'calc(3px + (5 - 3) * ((100vw - 320px) / (1920 - 320)))'
											}}
										>
											Top Brands
										</Typography>
									</Box>
								</BoxCustom>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				<Grid item xs={12} md={5}>
					<CardMedia
						component="img"
						image="https://themes.pixelstrap.com/oslo/assets/images/about-us/1.jpg"
						alt="Avtar Clippath"
						sx={{
							maxWidth: '100%',
							borderRadius: ' 30% 70% 70% 30%/30% 30% 70% 70%',
							height: 'auto'
						}}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AboutSection;
