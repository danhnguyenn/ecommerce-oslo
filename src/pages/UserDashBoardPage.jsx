import InputField from '$components/InputFields/InputField';
import MyBreadcrumbs from '$components/MyBreadcrumbs';
import Order from '$components/Order';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import useAddress from '$hooks/useAddress';
import useAuth from '$hooks/useAuth';
import useOrder from '$hooks/useOrder';
import { yupResolver } from '@hookform/resolvers/yup';
import AddIcon from '@mui/icons-material/Add';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EastIcon from '@mui/icons-material/East';
import {
	Badge,
	Box,
	Button,
	CardMedia,
	Container,
	Dialog,
	DialogContent,
	DialogTitle,
	FormControl,
	FormControlLabel,
	Grid,
	IconButton,
	Radio,
	RadioGroup,
	styled,
	Tabs
} from '@mui/material';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const TabLabel = styled(Tab)(({ theme }) => ({
	padding: '7px 15px',
	fontWeight: 500,
	fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: '20px',
	textAlign: 'left',
	width: '100%',
	display: 'flex',
	flexDirection: 'row-reverse',
	justifyContent: 'space-between',
	alignItems: 'center',
	minHeight: 'auto',
	borderRadius: '5px',
	textTransform: 'inherit'
}));

const TitleFive = styled(Typography)(({ theme }) => ({
	fontSize: ' calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
	fontWeight: 500,
	color: '#262834',
	marginTop: '10px',
	lineHeight: '20px'
}));

const Subtitle = styled(Typography)(({ theme }) => ({
	marginBottom: 0,
	fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
	fontWeight: 'normal',
	color: '#767676',
	marginTop: 'calc(5px + (5 - 2) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: '20px',
	letterSpacing: '0.5px'
}));

const BoxTab = styled(Box)(({ theme }) => ({
	borderRight: '1px solid #ddd',
	'&:nth-child(-n+3)': {
		borderBottom: '1px solid #ddd'
	},
	padding:
		'calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320))) calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
	textAlign: 'center'
}));

const MyParagraph = styled(Typography)(({ theme }) => ({
	color: '#767676',
	fontSize: '14px',
	lineHeight: '18px',
	textAlign: 'left'
}));

const TitleColor = styled(Box)(({ theme }) => ({
	fontSize: '14px',
	color: '#262834',
	fontWeight: 500
}));

const MySpan = styled(Box)(({ theme }) => ({
	marginTop: '15px',
	display: 'flex',
	gap: '8px',
	fontSize: '14px',
	color: '#767676'
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2)
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1)
	}
}));

const MyButtonClose = styled(Button)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: '10px 20px',
	borderRadius: '100px',
	width: '100%',
	gap: ' 13px',
	justifyContent: 'center',
	color: '#767676',
	fontSize: '14px',
	backgroundColor: '#fafafa',
	marginTop: '10px',
	textTransform: 'none',
	fontWeight: 'normal',
	border: 'solid #0f8fac 1px'
}));

const MyButtonCustom = styled(Button)(({ theme }) => ({
	width: '100%',
	padding: '10px 20px',
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '23px',
	gap: '10px',
	marginTop: '10px',
	'&:hover': {
		backgroundColor: theme.palette.secondary.light
	}
}));

const TabPanel = props => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box
					sx={{
						p: 3,
						backgroundColor: '#f7f7f7',
						padding: 'calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320)))',
						borderRadius: '5px'
					}}
				>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node.isRequired,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

const a11yProps = index => {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
		icon: <ArrowRightIcon sx={{ marginBottom: '0 !important' }} />
	};
};

const BootstrapDialogTitle = props => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle
			sx={{
				m: 0,
				p: 2,
				fontSize: 'calc(19px + (20 - 19) * ((100vw - 767px) / (1920 - 767)))',
				lineHeight: '22px',
				marginBottom: '-2px',
				fontWeight: 500,
				color: '#0f8fac'
			}}
			{...other}
		>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: theme => theme.palette.grey[500]
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node.isRequired,
	onClose: PropTypes.func.isRequired
};

const schema = yup
	.object({
		fullName: yup.string().required('Please enter your fullname'),
		address: yup.string().required('Please enter your address'),
		apartment: yup.string().required('Please enter your apartment'),
		city: yup.string().required('Please enter your city'),
		zip: yup.string().required('Please enter your zip'),
		country: yup.string().required('Please enter your apartment'),
		phone: yup.number().required('Please enter your phone').min(10)
	})
	.required();

const UserDashboardPage = () => {
	const { user } = useAuth();
	const { handleAddAddress, fetchAddressWithUser, addressList, handleDeleteAddress, handleAddAddressChecked } =
		useAddress();
	const { fetchOrderDetail, orderList } = useOrder();
	const [value, setValue] = useState(1);
	const [selected, setSelected] = useState('');
	const [open, setOpen] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const breadcrumb = {
		title: 'User Dashboard',
		currentLink: Route.UserDashboardPage,
		prevLink: Route.HomePage
	};
	const handleChangeAddress = e => {
		setSelected(e.target.value);
		handleAddAddressChecked(e.target.value);
	};

	useEffect(() => {
		fetchAddressWithUser(user._id);
	}, []);

	useEffect(() => {
		fetchOrderDetail(user._id);
	}, []);

	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			fullName: '',
			address: '',
			apartment: '',
			city: '',
			zip: '',
			country: '',
			phone: 0
		},
		resolver: yupResolver(schema)
	});

	const onSubmit = data => {
		handleAddAddress({ ...data, userId: user._id });
		reset();
		setOpen(false);
	};

	return (
		<>
			<MyBreadcrumbs breadcrumb={breadcrumb} />
			<Container
				maxWidth="xl"
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320))); '
				}}
			>
				<Box
					sx={{
						flexGrow: 1,
						bgcolor: 'background.paper',
						display: 'flex'
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} md={3} lg={3}>
							<Tabs
								orientation="vertical"
								variant="scrollable"
								value={value}
								onChange={handleChange}
								aria-label="Vertical tabs example"
								sx={{
									borderRight: 1,
									borderColor: 'divider',
									padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
									backgroundColor: '#f7f7f7',
									borderRadius: '5px',
									'.MuiTabs-indicator': {
										display: 'none'
									},
									'& .Mui-selected': {
										backgroundColor: '#0f8fac',
										color: '#fff !important',
										opacity: '0.8',
										borderColor: '#dee2e6 #dee2e6 #fff',
										inset: 0
									}
								}}
							>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										gap: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)))',
										paddingBottom: '15px',
										borderBottom: '1px solid #ddd',
										marginBottom: '20px'
									}}
								>
									<CardMedia
										component="img"
										image="https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar.jpg"
										alt="Avatar"
										sx={{
											position: 'relative',
											display: 'inline-block',
											width: 'calc(50px + (70 - 50) * ((100vw - 320px) / (1920 - 320)))',
											height: 'auto',
											borderRadius: '100%',
											overflow: 'hidden'
										}}
									/>
									<Box>
										<Typography
											variant="h5"
											sx={{
												fontWeight: 500,
												color: '#262834',
												fontSize: '16px',
												lineHeight: '20px',
												marginBottom: '3px'
											}}
										>
											{user.fullName}
										</Typography>
										<Typography
											variant="h6"
											sx={{
												lineHeight: '20px',
												fontWeight: 'normal',
												color: '#767676',
												fontSize: '14px'
											}}
										>
											{user.email}
										</Typography>
									</Box>
								</Box>
								<TabLabel label="Dashboard" {...a11yProps(1)} />
								<TabLabel label="Orders" {...a11yProps(2)} />
								<Link
									to={Route.MyLikeProductPage}
									style={{
										textDecoration: 'none',
										color: '#000'
									}}
								>
									<TabLabel label="Wishlist" {...a11yProps(3)} />
								</Link>
								<TabLabel label="Saved Address" {...a11yProps(4)} />
								<TabLabel label="Saved Card " {...a11yProps(5)} />
								<TabLabel label="Profile " {...a11yProps(6)} />
								<TabLabel label="Security " {...a11yProps(7)} />
							</Tabs>
						</Grid>
						<Grid item xs={12} md={9} lg={9}>
							<TabPanel value={value} index={1}>
								<Box
									sx={{
										marginBottom: 'calc(25px + (30 - 25) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									<Typography
										variant="h3"
										sx={{
											fontSize: 'calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)))',
											color: '#262834',
											fontWeight: 500,
											lineHeight: '22px',
											marginTop: '-2px'
										}}
									>
										Welcome Back Josephin water
									</Typography>
									<Typography
										variant="subtitle1"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											fontWeight: 500,
											lineHeight: '20px',
											color: '#767676',
											marginTop: 'calc(8px + (10 - 8) * ((100vw - 320px) / (1920 - 320)))'
										}}
									>
										Welcome back Josephin water, here you can customize your profile and also track your order also, you
										can access your saved address and card. if you want change setting you can do it from here
									</Typography>
								</Box>
								<Grid container sx={{ alignItems: 'end' }}>
									<Grid item xs={6} sm={6} md={3} lg={4}>
										<BoxTab>
											<CardMedia
												component="img"
												image="https://themes.pixelstrap.com/oslo/assets/icons/svg/1.svg"
												alt="SVG"
												sx={{
													width: 'calc(40px + (55 - 40) * ((100vw - 320px) / (1920 - 320)))',
													display: 'inline'
												}}
											/>
											<TitleFive variant="h5">Order</TitleFive>
											<Subtitle variant="subtitle1">See order history of previous orders</Subtitle>
										</BoxTab>
									</Grid>
									<Grid item xs={6} sm={6} md={3} lg={4}>
										<BoxTab>
											<CardMedia
												component="img"
												image="https://themes.pixelstrap.com/oslo/assets/icons/svg/2.svg"
												alt="SVG"
												sx={{
													width: 'calc(40px + (55 - 40) * ((100vw - 320px) / (1920 - 320)))',
													display: 'inline'
												}}
											/>
											<TitleFive variant="h5">Wishlist</TitleFive>
											<Subtitle variant="subtitle1">Your Wishlist expire within 24h please complete Checkout</Subtitle>
										</BoxTab>
									</Grid>
									<Grid item xs={6} sm={6} md={3} lg={4}>
										<BoxTab>
											<CardMedia
												component="img"
												image="https://themes.pixelstrap.com/oslo/assets/icons/svg/3.svg"
												alt="SVG"
												sx={{
													width: 'calc(40px + (55 - 40) * ((100vw - 320px) / (1920 - 320)))',
													display: 'inline'
												}}
											/>
											<TitleFive variant="h5">Saved Address</TitleFive>
											<Subtitle variant="subtitle1">You saved 3 address for delivery</Subtitle>
										</BoxTab>
									</Grid>
									<Grid item xs={6} sm={6} md={3} lg={4}>
										<BoxTab>
											<CardMedia
												component="img"
												image="https://themes.pixelstrap.com/oslo/assets/icons/svg/4.svg"
												alt="SVG"
												sx={{
													width: 'calc(40px + (55 - 40) * ((100vw - 320px) / (1920 - 320)))',
													display: 'inline'
												}}
											/>
											<TitleFive variant="h5">Payment</TitleFive>
											<Subtitle variant="subtitle1">Check your payment option there are 3 option added</Subtitle>
										</BoxTab>
									</Grid>
									<Grid item xs={6} sm={6} md={3} lg={4}>
										<BoxTab>
											<CardMedia
												component="img"
												image="https://themes.pixelstrap.com/oslo/assets/icons/svg/5.svg"
												alt="SVG"
												sx={{
													width: 'calc(40px + (55 - 40) * ((100vw - 320px) / (1920 - 320)))',
													display: 'inline'
												}}
											/>
											<TitleFive variant="h5">Profile</TitleFive>
											<Subtitle variant="subtitle1">
												Complete your profile details there are some Information missing
											</Subtitle>
										</BoxTab>
									</Grid>
									<Grid item xs={6} sm={6} md={3} lg={4}>
										<BoxTab>
											<CardMedia
												component="img"
												image="https://themes.pixelstrap.com/oslo/assets/icons/svg/6.svg"
												alt="SVG"
												sx={{
													width: 'calc(40px + (55 - 40) * ((100vw - 320px) / (1920 - 320)))',
													display: 'inline'
												}}
											/>
											<TitleFive variant="h5">Security</TitleFive>
											<Subtitle variant="subtitle1">Please don&apos;t share any one your email or password</Subtitle>
										</BoxTab>
									</Grid>
								</Grid>
							</TabPanel>
							<TabPanel value={value} index={2}>
								<Box
									sx={{
										marginBottom: 'calc(25px + (30 - 25) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									<Typography
										variant="h3"
										sx={{
											fontSize: 'calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)))',
											color: '#262834',
											fontWeight: 500,
											lineHeight: '22px',
											marginTop: '-2px'
										}}
									>
										My Orders
									</Typography>
									<Typography
										variant="subtitle1"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											fontWeight: 500,
											lineHeight: '20px',
											color: '#767676',
											marginTop: 'calc(8px + (10 - 8) * ((100vw - 320px) / (1920 - 320)))'
										}}
									>
										H thanks for placing a delivery order with Oslo! Your order should be home with you in soon
									</Typography>
								</Box>
								{orderList.length === 0 ? (
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											flexDirection: 'column'
										}}
									>
										<Typography variant="body1">My order is currently empty</Typography>
										<Link to={Route.ProductPage} style={{ textDecoration: 'none', marginTop: '10px' }}>
											<MyButtonCustom>Back to shop</MyButtonCustom>
										</Link>
									</Box>
								) : (
									<Box>
										{orderList.map(order => (
											<Order key={order._id} order={order} />
										))}
									</Box>
								)}
							</TabPanel>
							<TabPanel value={value} index={4}>
								<Box
									sx={{
										marginBottom: 'calc(25px + (30 - 25) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									<Typography
										variant="h3"
										sx={{
											fontSize: 'calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)))',
											color: '#262834',
											fontWeight: 500,
											lineHeight: '22px',
											marginTop: '-2px'
										}}
									>
										Your Saved Address
									</Typography>
									<Typography
										variant="subtitle1"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											fontWeight: 500,
											lineHeight: '20px',
											color: '#767676',
											marginTop: 'calc(8px + (10 - 8) * ((100vw - 320px) / (1920 - 320)))'
										}}
									>
										here is your saved address, from here you can easily add or modify your address
									</Typography>
								</Box>
								<Box>
									<Grid container spacing={2}>
										<Grid item xs={12} md={6}>
											<Box
												sx={{
													height: '100%',
													padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
													border: '1px solid #f0f3f8',
													borderRadius: '5px',
													display: 'flex',
													justifyContent: 'center',
													flexDirection: 'column',
													textAlign: 'center',
													gap: '10px'
												}}
											>
												<BootstrapDialog onClose={handleClose} open={open}>
													<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
														Add New Address
													</BootstrapDialogTitle>
													<DialogContent dividers>
														<Box component="form" onSubmit={handleSubmit(onSubmit)}>
															<Grid container spacing={1}>
																<Grid item xs={12} md={12}>
																	<InputField control={control} label="Full Name" name="fullName" />
																</Grid>
																<Grid item xs={12} md={12}>
																	<InputField control={control} label="Address" name="address" />
																</Grid>
																<Grid item xs={12} md={6}>
																	<InputField control={control} label="Apartment" name="apartment" />
																</Grid>
																<Grid item xs={12} md={6}>
																	<InputField control={control} label="City" name="city" />
																</Grid>
																<Grid item xs={12} md={6}>
																	<InputField control={control} label="Zip" name="zip" />
																</Grid>
																<Grid item xs={12} md={6}>
																	<InputField control={control} label="Country" name="country" />
																</Grid>
																<Grid item xs={12} md={6}>
																	<InputField control={control} label="Phone" name="phone" />
																</Grid>
															</Grid>
															<Box
																sx={{
																	display: 'flex',
																	gap: '10px'
																}}
															>
																<MyButtonClose onClick={handleClose}>Close</MyButtonClose>
																<MyButtonCustom type="submit">
																	Add Address <EastIcon />
																</MyButtonCustom>
															</Box>
														</Box>
													</DialogContent>
												</BootstrapDialog>
												<Box>
													<Button
														variant="outlined"
														onClick={handleClickOpen}
														sx={{
															padding: '10px;',
															backgroundColor: '#fafafa;',
															borderRadius: '100px',
															border: 'none',
															'&:hover': {
																border: 'none'
															}
														}}
													>
														<AddIcon
															sx={{
																width: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
																height: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
																color: '#0f8fac'
															}}
														/>
													</Button>
												</Box>
												<Typography
													variant="h4"
													sx={{
														fontSize: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
														color: '#0f8fac',
														fontWeight: 500
													}}
												>
													Add New Address
												</Typography>
											</Box>
										</Grid>
										{addressList.map(address => (
											<Grid item xs={12} md={6} key={address._id}>
												<Box
													sx={{
														padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
														borderRadius: '5px',
														display: 'flex',
														justifyContent: 'center',
														flexDirection: 'column',
														textAlign: 'center',
														gap: '10px',
														border: '1px solid #f0f3f8'
													}}
												>
													<Box
														sx={{
															display: 'flex',
															justifyContent: 'space-between'
														}}
													>
														<Box
															sx={{
																display: 'flex',
																alignItems: 'center',
																gap: '10px'
															}}
														>
															<FormControl>
																<RadioGroup name="controlled-radio-buttons-group">
																	<FormControlLabel
																		onChange={handleChangeAddress}
																		value={address._id}
																		control={<Radio />}
																		label={address.fullName}
																		checked={selected === address._id}
																	/>
																</RadioGroup>
															</FormControl>
															<Badge badgeContent={address.apartment} color="primary" />
														</Box>
														<Box
															sx={{
																display: 'flex',
																gap: '10px'
															}}
														>
															<IconButton>
																<BorderColorIcon
																	sx={{
																		width: 'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))',
																		height: 'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))'
																	}}
																/>
															</IconButton>
															<IconButton onClick={() => handleDeleteAddress(address._id)}>
																<DeleteIcon
																	sx={{
																		width: 'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))',
																		height: 'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))'
																	}}
																/>
															</IconButton>
														</Box>
													</Box>
													<Box>
														<MyParagraph variant="body1">{address.address}</MyParagraph>
														<MyParagraph variant="body1">{address.city}</MyParagraph>
														<MySpan component="span">
															Mobile: <TitleColor component="span">{address.phone}</TitleColor>
														</MySpan>
														<MySpan component="span">
															Delivery: <TitleColor component="span"> 2 March</TitleColor>
														</MySpan>
														<MySpan component="span">
															Cash on Delivery: <TitleColor component="span">Available</TitleColor>
														</MySpan>
													</Box>
												</Box>
											</Grid>
										))}
									</Grid>
								</Box>
							</TabPanel>
							<TabPanel value={value} index={5}>
								Comming Soon
							</TabPanel>
							<TabPanel value={value} index={6}>
								Comming Soon
							</TabPanel>
							<TabPanel value={value} index={7}>
								Comming Soon
							</TabPanel>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default withLayout(UserDashboardPage);
