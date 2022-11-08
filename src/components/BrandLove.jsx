import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import HeadingText from './HeadingText';
import ProductMiniSize from './ProductMiniSize';

const BrandLove = () => {
	const headingText = {
		title: 'BRAND WE LOVE',
		desc: 'Shop our best sellers from emerging and established brands all over the globe'
	};

	return (
		<Container
			sx={{
				paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<HeadingText heading={headingText} />
			<Grid container spacing={2} sx={{ alignItems: 'center' }}>
				<Grid item xs={12} lg={5}>
					<Box sx={{ position: 'relative' }}>
						<CardMedia
							component="img"
							image="https://themes.pixelstrap.com/oslo/assets/images/fashion/banner/banner3.jpg"
							alt="Background"
							sx={{
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center'
							}}
						/>
						<Box
							sx={{
								width: '270px',
								position: 'absolute',
								left: '5%',
								top: '50%',
								transform: ' translateY(-50%)'
							}}
						>
							<Box
								sx={{
									padding: '17px',
									position: 'relative',
									zIndex: 2,
									backgroundColor: '#fff',
									opacity: 0.9
								}}
							>
								<Box
									sx={{
										padding: '8px',
										textAlign: 'center',
										marginBottom: 'calc(6px + (14 - 6) * ((100vw - 320px) / (1920 - 320)))',
										backgroundColor: '#ffba00'
									}}
								>
									<Typography
										variant="h5"
										sx={{
											fontWeight: '600',
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											lineHeight: '23px',
											color: '#fff'
										}}
									>
										Man Fashion
									</Typography>
								</Box>
								<Box
									sx={{
										textAlign: 'center',
										marginBottom: '8px'
									}}
								>
									<Typography
										variant="h3"
										sx={{
											fontWeight: '800',
											fontSize: 'calc(14px + (36 - 14) * ((100vw - 320px) / (1920 - 320)))',
											lineHeight: ' 28px',
											color: ' #262834',
											marginBottom: 'calc(0px + (10 - 0) * ((100vw - 320px) / (1920 - 320)))',
											fontFamily: '"Montserrat","san-self"'
										}}
									>
										MEGA SALE
									</Typography>
									<Typography
										variant="span"
										sx={{
											fontWeight: 'normal',
											fontSize: 'calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))',
											lineHeight: '26px',
											color: '#0f8fac'
										}}
									>
										GET SPECIAL DISCOUNT
									</Typography>
								</Box>
								<Box sx={{ textAlign: 'center' }}>
									<Typography
										variant="span"
										sx={{
											display: 'block',
											position: 'relative',
											marginBottom: 'calc(-10px + (-6 + 10) * ((100vw - 320px) / (1920 - 320)))',
											'&:after': {
												content: '""',
												position: 'absolute',
												top: '50%',
												zIndex: 1,
												left: '50%',
												transform: 'translate(-50%, -50%)',
												width: '100%',
												height: '2px',
												backgroundColor: '#c4c4c4'
											}
										}}
									>
										<Typography
											variant="span"
											sx={{
												fontSize: 'calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))',
												lineHeight: 'calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)))',
												color: '#262834',
												backgroundColor: '#fff',
												padding: '0 7px',
												position: 'relative',
												zIndex: 2
											}}
										>
											UP TO
										</Typography>
									</Typography>
								</Box>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center'
									}}
								>
									<Typography
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											gap: '3px',
											fontWeight: 'bold',
											fontSize: 'calc(50px + (120 - 50) * ((100vw - 320px) / (1920 - 320)))',
											lineHeight: 'calc(42px + (90 - 42) * ((100vw - 320px) / (1920 - 320)))',
											margin: '15px 0',
											color: '#0f8fac',
											fontFamily: '"Montserrat","san-self"'
										}}
									>
										70
										<Typography
											sx={{
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center'
											}}
											variant="span"
										>
											<Typography
												sx={{
													fontWeight: 'bold',
													fontSize: 'calc(25px + (50 - 25) * ((100vw - 320px) / (1920 - 320)))',
													lineHeight: '23px'
												}}
												variant="span"
											>
												%
											</Typography>
											<Typography
												sx={{
													fontWeight: 'bold',
													fontSize: 'calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320)))',
													lineHeight: '37px'
												}}
												variant="span"
											>
												OFF
											</Typography>
										</Typography>
									</Typography>
								</Box>
								<Box>
									<Typography
										variant="body1"
										sx={{
											marginBottom: '14px',
											fontWeight: 'normal',
											fontSize: 'calc(16px + (22 - 16) * ((100vw - 320px) / (1920 - 320)))',
											lineHeight: '18px',
											color: '#262834'
										}}
									>
										FOR SELECTED ITEMS
									</Typography>
									<Typography
										variant="h5"
										sx={{
											fontWeight: 600,
											fontSize: 'calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))',
											lineHeight: '22px',
											color: '#0f8fac',
											marginTop: '-1px',
											marginBottom: ' calc(-5px + (-3 + 5) * ((100vw - 320px) / (1920 - 320)))'
										}}
									>
										USE CODE: ABCDE098
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} lg={7}>
					<Grid container spacing={2}>
						<Grid item md={6}>
							<Typography
								variant="h5"
								sx={{
									fontWeight: '500',
									fontSize: 'calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)))',
									lineHeight: '29px',
									textAlign: 'left',
									color: '#262834',
									position: 'relative',
									marginBottom: '5px'
								}}
							>
								<Typography
									variant="span"
									sx={{
										backgroundColor: '#fff',
										paddingRight: 'calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)))',
										'&:after': {
											content: '""',
											width: '100%',
											height: '1px',
											backgroundColor: 'rgba(221,221,221,0.5)',
											position: 'absolute',
											right: 0,
											top: ' 50%',
											zIndex: '-1',
											transform: 'translateY(-50%)'
										}
									}}
								>
									New Arrival
								</Typography>
							</Typography>
							<Box>
								<ProductMiniSize />
								<ProductMiniSize />
								<ProductMiniSize />
							</Box>
						</Grid>
						<Grid item md={6}>
							<Typography
								variant="h5"
								sx={{
									fontWeight: '500',
									fontSize: 'calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)))',
									lineHeight: '29px',
									textAlign: 'left',
									color: '#262834',
									position: 'relative',
									marginBottom: '5px'
								}}
							>
								<Typography
									variant="span"
									sx={{
										backgroundColor: '#fff',
										paddingRight: 'calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)))',
										'&:after': {
											content: '""',
											width: '100%',
											height: '1px',
											backgroundColor: 'rgba(221,221,221,0.5)',
											position: 'absolute',
											right: 0,
											top: ' 50%',
											zIndex: '-1',
											transform: 'translateY(-50%)'
										}
									}}
								>
									Featured
								</Typography>
							</Typography>
							<Box>
								<ProductMiniSize />
								<ProductMiniSize />
								<ProductMiniSize />
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BrandLove;
