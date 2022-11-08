import styled from '@emotion/styled';
import EastIcon from '@mui/icons-material/East';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
	Box,
	Button,
	CardMedia,
	Container,
	Grid,
	List,
	ListItem,
	ListItemText,
	TextField,
	Typography
} from '@mui/material';

const MyListItem = styled(ListItem)(({ theme }) => ({
	color: '#fff',
	gap: '10px',
	fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: '23px',
	'&:hover': {
		color: theme.palette.primary.light
	}
}));

const MyTitleFooter = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	fontSize: 'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: '26px',
	textTransform: 'uppercase',
	color: theme.palette.primary.light,
	marginTop: 'calc(15px + (40 - 15) * ((100vw - 320px) / (1920 - 320)))'
}));

const MyParagraph = styled(Typography)(({ theme }) => ({
	fontWeight: 'normal',
	fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: '23px',
	color: '#fff',
	marginTop: 'calc(0px + (10 - 0) * ((100vw - 320px) / (1920 - 320)))',
	marginBottom: 0
}));

const MyTextFiled = styled(TextField)(({ theme }) => ({
	fontWeight: 300,
	fontSize: '14px',
	lineHeight: '20px',
	color: '#fff',
	backgroundColor: '#272938',
	outline: 'none',
	border: 'none',
	letterSpacing: '0.5px',
	'& fieldset': {
		border: 'none'
	},
	'& .MuiOutlinedInput-root': {
		color: '#fff'
	}
}));

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

const MyParagraphFooter = styled(Typography)(({ theme }) => ({
	textAlign: 'right',
	color: '#fff',
	fontWeight: 'normal',
	fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))'
}));

const Footer = () => {
	return (
		<Container
			maxWidth="xl"
			sx={{
				overflow: 'hidden',
				background: 'linear-gradient(90deg, #262834 6.15%, #20222f 50%)'
			}}
		>
			<Box
				sx={{
					position: 'relative',
					padding: 'calc(30px + (90 - 30) * ((100vw - 320px) / (1920 - 320))) 0'
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						left: 0,
						top: 0,
						zIndex: 1
					}}
				>
					<CardMedia
						component="img"
						image="https://themes.pixelstrap.com/oslo/assets/images/fashion/banner/bg-footer-l.png"
						alt="Background Footer"
						sx={{ width: '358px' }}
					/>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						right: 0,
						bottom: 0,
						zIndex: 1
					}}
				>
					<CardMedia
						component="img"
						image="https://themes.pixelstrap.com/oslo/assets/images/fashion/banner/bg-footer-r.png"
						alt="Background Footer"
						sx={{ width: '358px' }}
					/>
				</Box>

				<Box>
					<Grid container>
						<Grid item xs={12} md={3} lg={4} xl={3}>
							<CardMedia
								component="img"
								image="https://themes.pixelstrap.com/oslo/assets/images/logos/logo-w.png"
								alt="Logo"
								sx={{
									width: 'calc(80px + (120 - 80) * ((100vw - 320px) / (1920 - 320)))',
									height: 'auto'
								}}
							/>
							<List
								sx={{
									display: 'flex',
									flexDirection: 'column',
									gap: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)))',
									marginTop: '20px'
								}}
							>
								<MyListItem disablePadding>
									<LocationOnIcon />
									<ListItemText primary="1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052, United States " />
								</MyListItem>
								<MyListItem disablePadding>
									<LocalPhoneIcon />
									<ListItemText primary="+ 185659635" />
								</MyListItem>
								<MyListItem disablePadding>
									<EmailIcon />
									<ListItemText primary=" fashion098@gmail.com " />
								</MyListItem>
							</List>
						</Grid>
						<Grid item xs={12} md={3} lg={4} xl={2}>
							<Typography
								variant="h5"
								sx={{
									fontWeight: 600,
									fontSize: 'calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)))',
									lineHeight: 'calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)))',
									color: '#fff',
									marginBottom: 'calc(0px + (-8 + 0) * ((100vw - 320px) / (1920 - 320)))'
								}}
							>
								Shop By
							</Typography>
							<List
								sx={{
									display: 'flex',
									flexDirection: 'column',
									gap: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)))',
									marginTop: '20px'
								}}
							>
								<MyListItem disablePadding>
									<ListItemText primary="New in" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Women" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Men" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Shoes" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Bags & Accessories" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Top Brands" />
								</MyListItem>
							</List>
						</Grid>
						<Grid xs={12} md={3} lg={4} xl={2}>
							<Typography
								variant="h5"
								sx={{
									fontWeight: 600,
									fontSize: 'calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)))',
									lineHeight: 'calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)))',
									color: '#fff',
									marginBottom: 'calc(0px + (-8 + 0) * ((100vw - 320px) / (1920 - 320)))'
								}}
							>
								Information
							</Typography>
							<List
								sx={{
									display: 'flex',
									flexDirection: 'column',
									gap: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)))',
									marginTop: '20px'
								}}
							>
								<MyListItem disablePadding>
									<ListItemText primary="Home" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Shop" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="About Us" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Blog" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Contact" />
								</MyListItem>
							</List>
						</Grid>
						<Grid item xs={12} md={3} lg={4} xl={2}>
							<Typography
								variant="h5"
								sx={{
									fontWeight: 600,
									fontSize: 'calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)))',
									lineHeight: 'calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)))',
									color: '#fff',
									marginBottom: 'calc(0px + (-8 + 0) * ((100vw - 320px) / (1920 - 320)))'
								}}
							>
								Get Help
							</Typography>
							<List
								sx={{
									display: 'flex',
									flexDirection: 'column',
									gap: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)))',
									marginTop: '20px'
								}}
							>
								<MyListItem disablePadding>
									<ListItemText primary="Your Orders" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Your Account" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Track Order" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Your Wishlist" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Search" />
								</MyListItem>
								<MyListItem disablePadding>
									<ListItemText primary="Faqs" />
								</MyListItem>
							</List>
						</Grid>
						<Grid item xs={12} md={3} lg={4} xl={3}>
							<Typography
								variant="h5"
								sx={{
									fontWeight: 600,
									fontSize: 'calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)))',
									lineHeight: 'calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)))',
									color: '#fff',
									marginBottom: 'calc(0px + (-8 + 0) * ((100vw - 320px) / (1920 - 320)))'
								}}
							>
								Follow Us
							</Typography>
							<List
								sx={{
									display: 'flex',
									marginTop: '20px'
								}}
							>
								<MyListItem disablePadding>
									<FacebookIcon />
								</MyListItem>
								<MyListItem disablePadding>
									<InstagramIcon />
								</MyListItem>
								<MyListItem disablePadding>
									<TwitterIcon />
								</MyListItem>
								<MyListItem disablePadding>
									<PinterestIcon />
								</MyListItem>
							</List>
							<MyTitleFooter>Newsletter Sign Up</MyTitleFooter>
							<MyParagraph variant="body1">Receive our latest updates about our products & promotions.</MyParagraph>
							<Box
								sx={{
									marginTop: '14px',
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}
								component="form"
							>
								<MyTextFiled placeholder="Your email address" />
								<MyButtonCustom>
									Submit <EastIcon />
								</MyButtonCustom>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>

			<Grid
				container
				sx={{
					position: 'relative',
					padding: '15px 0',
					zIndex: 2,
					borderTop: '1px solid #3a3d53',
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<Grid item xs={12} md={6}>
					<List
						sx={{
							display: 'flex',
							gap: 'calc(15px + (50 - 15) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						<MyListItem disablePadding sx={{ width: 'auto' }}>
							<CardMedia
								component="img"
								image="https://themes.pixelstrap.com/oslo/assets/icons/png/1.png"
								alt="Paella dish"
								sx={{
									width: '41px',
									height: 'auto'
								}}
							/>
						</MyListItem>
						<MyListItem disablePadding sx={{ width: 'auto' }}>
							<CardMedia
								component="img"
								image="https://themes.pixelstrap.com/oslo/assets/icons/png/2.png"
								alt="Paella dish"
								sx={{
									width: '41px',
									height: 'auto'
								}}
							/>
						</MyListItem>
						<MyListItem disablePadding sx={{ width: 'auto' }}>
							<CardMedia
								component="img"
								image="https://themes.pixelstrap.com/oslo/assets/icons/png/3.png"
								alt="Paella dish"
								sx={{
									width: '41px',
									height: 'auto'
								}}
							/>
						</MyListItem>
						<MyListItem disablePadding sx={{ width: 'auto' }}>
							<CardMedia
								component="img"
								image="https://themes.pixelstrap.com/oslo/assets/icons/png/4.png"
								alt="Paella dish"
								sx={{
									width: '41px',
									height: 'auto'
								}}
							/>
						</MyListItem>
					</List>
				</Grid>
				<Grid item xs={12} md={6}>
					<MyParagraphFooter>© 2022, OSLO Template. Made with heart by Pixelstrap</MyParagraphFooter>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
