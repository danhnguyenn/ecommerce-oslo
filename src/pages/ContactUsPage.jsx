import MyBreadcrumbs from '$components/MyBreadcrumbs';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import BusinessIcon from '@mui/icons-material/Business';
import East from '@mui/icons-material/East';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, Container, Grid, styled, TextField, Typography } from '@mui/material';
import Iframe from 'react-iframe';

const MyHeadingFour = styled(Typography)(({ theme }) => ({
	fontWeight: '500',
	fontSize: 'calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: 'calc(20px + (22 - 20) * ((100vw - 320px) / (1920 - 320)))',
	position: 'relative',
	cursor: 'pointer',
	zIndex: 2,
	display: 'inline-block',
	marginBottom: '15px'
}));

const MyTextField = styled(TextField)(({ theme }) => ({
	'& fieldset': {
		width: '100%',
		borderRadius: '20px',
		border: '1px solid #ddd'
	}
}));

const MyButtonCustom = styled(Button)(({ theme }) => ({
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '23px',
	gap: '10px',
	borderRadius: '50rem',
	marginTop: 'calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320)))',
	'&:hover': {
		backgroundColor: theme.palette.secondary.light
	}
}));

const MyTitleFour = styled(Typography)(({ theme }) => ({
	fontWeight: 500,
	lineHeight: '18px',
	marginBottom: '5px',
	fontSize: '15px',
	color: '#262834'
}));

const MySubtitle = styled(Typography)(({ theme }) => ({
	fontSize: '14px',
	lineHeight: '20px',
	color: '#767676'
}));

const ContactUsPage = () => {
	window.scrollTo(0, 0);
	const breadcrumb = {
		title: 'Contact Us',
		currentLink: Route.ContactPage,
		prevLink: Route.HomePage
	};

	return (
		<>
			<MyBreadcrumbs breadcrumb={breadcrumb} />
			<Box
				sx={{
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Container>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<Box
								sx={{
									marginTop: '20px',
									padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)));',
									border: '1px solid rgba(221,221,221,0.5)',
									borderRadius: '10px'
								}}
							>
								<MyHeadingFour>
									<Typography
										component="span"
										sx={{
											height: '50%',
											display: 'block',
											left: 0,
											right: 0,
											zIndex: -1,
											bottom: '0px',
											position: 'absolute',
											backgroundColor: 'rgba(15,143,172,0.1)'
										}}
									>
										{' '}
									</Typography>
									Leave a Comment
								</MyHeadingFour>
								<Box component="form">
									<Grid container spacing={2}>
										<Grid item xs={12} sm={6} md={6}>
											<MyTextField
												fullWidth
												label="First Name"
												name="firstName"
												sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
											/>
										</Grid>
										<Grid item xs={12} sm={6} md={6}>
											<MyTextField name="lastName" fullWidth label="Last Name" />
										</Grid>
										<Grid item xs={12} sm={6} md={6}>
											<MyTextField name="email" fullWidth label="Email Address" />
										</Grid>
										<Grid item xs={12} sm={6} md={6}>
											<MyTextField name="phone" fullWidth label="Phone" />
										</Grid>
										<Grid item xs={12} sm={12} md={12}>
											<MyTextField name="content" fullWidth label="Comments" multiline rows={5} maxRows={10} />
										</Grid>
									</Grid>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'flex-end'
										}}
									>
										<MyButtonCustom type="submit">
											Post comment <East />
										</MyButtonCustom>
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<Box
								sx={{
									marginTop: '20px',
									padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)));',
									border: '1px solid rgba(221,221,221,0.5)',
									borderRadius: '10px'
								}}
							>
								<Box
									sx={{
										marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)));'
									}}
								>
									<MyHeadingFour>
										<Typography
											component="span"
											sx={{
												height: '50%',
												display: 'block',
												left: 0,
												right: 0,
												zIndex: -1,
												bottom: '0px',
												position: 'absolute',
												backgroundColor: 'rgba(15,143,172,0.1)'
											}}
										>
											{' '}
										</Typography>
										Let&apos;s Get In Touch
									</MyHeadingFour>
								</Box>
								<Box>
									<Grid container spacing={2}>
										<Grid item xs={12} md={12} lg={12}>
											<Box
												sx={{
													padding:
														'calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320))) calc(26px + (35 - 26) * ((100vw - 320px) / (1920 - 320)))',
													backgroundColor: '#fafafa;',
													marginLeft: ' calc(14.5px + (16.5 - 14.5) * ((100vw - 320px) / (1920 - 320)))',
													borderRadius: '5px',
													position: 'relative'
												}}
											>
												<Box
													component="span"
													sx={{
														width: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
														height: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
														position: 'absolute',
														fontWeight: 600,
														color: '#fff',
														borderRadius: '4px',
														display: 'flex',
														justifyContent: 'center',
														left: 'calc(-14.5px + (-16.5 + 14.5) * ((100vw - 320px) / (1920 - 320)))',
														fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
														top: '50%',
														backgroundColor: '#0f8fac',
														transform: 'translateY(-50%)',
														alignItems: 'center'
													}}
												>
													<LocationOnIcon
														sx={{
															width: 'calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)))',
															height: 'calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)))',
															stroke: '#fff'
														}}
													/>
												</Box>
												<Box sx={{}}>
													<MyTitleFour variant="h4">Address</MyTitleFour>
													<MySubtitle variant="body1">
														1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052, United States
													</MySubtitle>
												</Box>
											</Box>
										</Grid>
										<Grid item xs={12} sm={6} md={6} lg={6}>
											<Box
												sx={{
													padding:
														'calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320))) calc(26px + (35 - 26) * ((100vw - 320px) / (1920 - 320)))',
													backgroundColor: '#fafafa;',
													marginLeft: ' calc(14.5px + (16.5 - 14.5) * ((100vw - 320px) / (1920 - 320)))',
													borderRadius: '5px',
													position: 'relative'
												}}
											>
												<Box
													component="span"
													sx={{
														width: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
														height: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
														position: 'absolute',
														fontWeight: 600,
														color: '#fff',
														borderRadius: '4px',
														display: 'flex',
														justifyContent: 'center',
														left: 'calc(-14.5px + (-16.5 + 14.5) * ((100vw - 320px) / (1920 - 320)))',
														fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
														top: '50%',
														backgroundColor: '#0f8fac',
														transform: 'translateY(-50%)',
														alignItems: 'center'
													}}
												>
													<LocalPhoneIcon
														sx={{
															width: 'calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)))',
															height: 'calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)))',
															stroke: '#fff'
														}}
													/>
												</Box>
												<Box>
													<MyTitleFour variant="h4">Contact Number</MyTitleFour>
													<MySubtitle variant="body1">+91 123 - 456 - 7890</MySubtitle>
												</Box>
											</Box>
										</Grid>
										<Grid item xs={12} sm={6} md={6} lg={6}>
											<Box
												sx={{
													padding:
														'calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320))) calc(26px + (35 - 26) * ((100vw - 320px) / (1920 - 320)))',
													backgroundColor: '#fafafa;',
													marginLeft: ' calc(14.5px + (16.5 - 14.5) * ((100vw - 320px) / (1920 - 320)))',
													borderRadius: '5px',
													position: 'relative'
												}}
											>
												<Box
													component="span"
													sx={{
														width: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
														height: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
														position: 'absolute',
														fontWeight: 600,
														color: '#fff',
														borderRadius: '4px',
														display: 'flex',
														justifyContent: 'center',
														left: 'calc(-14.5px + (-16.5 + 14.5) * ((100vw - 320px) / (1920 - 320)))',
														fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
														top: '50%',
														backgroundColor: '#0f8fac',
														transform: 'translateY(-50%)',
														alignItems: 'center'
													}}
												>
													<EmailIcon
														sx={{
															width: 'calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)))',
															height: 'calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)))',
															stroke: '#fff'
														}}
													/>
												</Box>
												<Box sx={{}}>
													<MyTitleFour variant="h4">Email Address</MyTitleFour>
													<MySubtitle variant="body1">fashion0198@gmail.com</MySubtitle>
												</Box>
											</Box>
										</Grid>
										<Grid item xs={12} md={12} lg={12}>
											<Box
												sx={{
													padding:
														'calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320))) calc(26px + (35 - 26) * ((100vw - 320px) / (1920 - 320)))',
													backgroundColor: '#fafafa;',
													marginLeft: ' calc(14.5px + (16.5 - 14.5) * ((100vw - 320px) / (1920 - 320)))',
													borderRadius: '5px',
													position: 'relative'
												}}
											>
												<Box
													component="span"
													sx={{
														width: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
														height: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
														position: 'absolute',
														fontWeight: 600,
														color: '#fff',
														borderRadius: '4px',
														display: 'flex',
														justifyContent: 'center',
														left: 'calc(-14.5px + (-16.5 + 14.5) * ((100vw - 320px) / (1920 - 320)))',
														fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
														top: '50%',
														backgroundColor: '#0f8fac',
														transform: 'translateY(-50%)',
														alignItems: 'center'
													}}
												>
													<BusinessIcon
														sx={{
															width: 'calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)))',
															height: 'calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)))',
															stroke: '#fff'
														}}
													/>
												</Box>
												<Box sx={{}}>
													<MyTitleFour variant="h4">Other Address</MyTitleFour>
													<MySubtitle variant="body1">ABC Complex,Near xyz, New York USA 123456</MySubtitle>
												</Box>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box
				sx={{
					height: 'calc(240px + (500 - 240) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Iframe
					width="100%"
					height="100%"
					url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7227.225249699896!2d55.17263937326456!3d25.081115462415855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1632538854272!5m2!1sen!2sin"
				/>
			</Box>
		</>
	);
};

export default withLayout(ContactUsPage);
