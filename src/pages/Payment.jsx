import MyBreadcrumbs from '$components/MyBreadcrumbs';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import useAddress from '$hooks/useAddress';
import useAuth from '$hooks/useAuth';
import useCart from '$hooks/useCart';
import useCoupon from '$hooks/useCoupon';
import useOrder from '$hooks/useOrder';
import { Discount } from '@mui/icons-material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	CardMedia,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	FormControlLabel,
	Grid,
	IconButton,
	List,
	ListItem,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	styled,
	TextField,
	Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const MyTitle = styled(Typography)(({ theme }) => ({
	fontSize: '16px',
	fontWeight: 500,
	color: '#262834',
	marginBottom: '10px',
	marginTop: '-1px'
}));

const MyListItem = styled(ListItem)(({ theme }) => ({
	padding: 'calc(3px + (5 - 3) * ((100vw - 320px) / (1920 - 320))) 0',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	fontSize: '14px',
	'&:last-child': {
		padding: '10px 0',
		marginTop: '8px',
		borderTop: '1px solid #c4c4c4',
		marginBottom: '-5px',
		'& span': {
			color: '#262834',
			fontWeight: 600
		}
	}
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

const MyButtonOutlined = styled(Button)(({ theme }) => ({
	width: '100%',
	borderColor: theme.palette.primary.light,
	borderWidth: '1px',
	borderStyle: 'solid',
	color: theme.palette.primary.light,
	backgroudColor: '#fff',
	fontWeight: 600,
	'&:hover': {
		backgroundColor: theme.palette.primary.light,
		color: '#fff'
	}
}));

const MyTextField = styled(TextField)(({ theme }) => ({
	'& fieldset': {
		width: '100%',
		borderRadius: '100px'
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
const MySummary = styled(Typography)(({ theme }) => ({
	color: '#262834',
	fontWeight: 600
}));

const MyFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
	display: 'flex',
	whiteSpace: 'nowrap'
}));
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2)
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1)
	}
}));
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

const Payment = () => {
	const navigate = useNavigate();

	const { user } = useAuth();

	const { priceSale, shipPrice, handleChangePriceSale } = useCoupon();

	const { cartsSelected, countSelectCart, handleClearCart } = useCart();

	const [subTotal, setSubtotal] = useState();

	const { handleAddOrder, successOrder, order, handleResetOrder } = useOrder();

	const { addressListChecked } = useAddress();

	const breadcrumb = {
		title: 'Checkout',
		currentLink: Route.PaymentPage,
		prevLink: Route.HomePage,
		shopLink: Route.ProductPage,
		cartLink: Route.CartPage
	};
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		let total = 0;
		for (let i = 0; i < cartsSelected.length; i++) {
			total += cartsSelected[i].newPrice * cartsSelected[i].cartQuantity;
		}
		setSubtotal(total);
	}, [cartsSelected]);

	const handleChange = e => {
		handleChangePriceSale(e.target.value);
	};

	const totalAmout = subTotal - priceSale + shipPrice;
	const priceSavings = priceSale === 'Freeship' ? 0 : priceSale;
	const priceDelivery = priceSale === 'Freeship' ? 0 : shipPrice;

	useEffect(() => {
		if (successOrder) {
			navigate(`/order-success/${order._id}`);
			handleClearCart();
			handleResetOrder();
		}
	}, [navigate, order, successOrder]);

	if (!user) {
		return <Navigate to={Route.ErrorLoginPage} replace />;
	}

	const handleAddValueOrder = () => {
		const data = {
			orderItems: cartsSelected.map(item => ({
				name: item.title,
				quantity: item.cartQuantity,
				price: item.newPrice,
				brand: item.brand,
				image: item.imageUrl,
				product: item._id
			})),
			fullName: addressListChecked.map(item => item.fullName).toString(),
			shippingAddress: addressListChecked.map(item => item.address).toString(),
			city: addressListChecked.map(item => item.city).toString(),
			zip: addressListChecked.map(item => item.zip).toString(),
			country: addressListChecked.map(item => item.country).toString(),
			phone: addressListChecked.map(item => item.phone).toString(),
			priceDelivery,
			priceSavings,
			totalPrice: totalAmout,
			userId: user._id
		};
		handleAddOrder(data);
	};

	return (
		<Box>
			<MyBreadcrumbs breadcrumb={breadcrumb} />
			<Container
				maxWidth="xl"
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} md={9}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: '20px'
							}}
						>
							<Box sx={{ marginBottom: '20px' }}>
								<Typography
									variant="h2"
									sx={{
										fontSize: 'calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));',
										color: '#262834',
										fontWeight: 600
									}}
								>
									Payment Options
								</Typography>
							</Box>
							<Box>
								<Box>
									<Button
										variant="outlined"
										sx={{
											padding: '10px;',
											border: '#0f8fac solid 1px',
											color: '#0f8fac',
											'&:hover': {
												border: 'none',
												backgroundColor: '#0f8fac',
												color: '#fff'
											}
										}}
									>
										Add card
									</Button>
								</Box>
								<BootstrapDialog onClose={handleClose} open={open}>
									<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
										Add New Address
									</BootstrapDialogTitle>
									<DialogContent dividers>
										<Box component="form" onSubmit={null}>
											<Grid container spacing={2}>
												<Grid item xs={12} md={12}>
													<MyTextField
														fullWidth
														label="Full Name"
														name="fullName"
														sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
													/>
												</Grid>
												<Grid item xs={12} md={12}>
													<MyTextField
														name="email"
														fullWidth
														label="Email"
														sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
													/>
												</Grid>
												<Grid item xs={12} md={12}>
													<MyTextField
														name="address1"
														fullWidth
														label="Address 1"
														sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
													/>
												</Grid>
												<Grid item xs={12} md={12}>
													<MyTextField
														name="address2"
														fullWidth
														label="Address 2"
														sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
													/>
												</Grid>
												<Grid item xs={12} md={6}>
													<MyTextField
														fullWidth
														label="Street"
														name="street"
														sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
													/>
												</Grid>
												<Grid item xs={12} md={6}>
													<MyTextField
														fullWidth
														label="Apartment"
														name="apartment"
														sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
													/>
												</Grid>
												<Grid item xs={12} md={6}>
													<MyTextField
														fullWidth
														label="City"
														name="city"
														sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
													/>
												</Grid>
												<Grid item xs={12} md={6}>
													<MyTextField
														fullWidth
														label="Zip"
														name="zip"
														sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
													/>
												</Grid>
											</Grid>

											<MyTextField
												fullWidth
												label="Country"
												name="country"
												sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
											/>
											<MyTextField
												type="number"
												fullWidth
												label="Phone"
												name="phone"
												sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
											/>

											{/* <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isLoading}>
							<CircularProgress color="inherit" />
						</Backdrop> */}
										</Box>
									</DialogContent>
									<DialogActions>
										<MyButtonClose onClick={handleClose}>Close</MyButtonClose>
										<MyButtonCustom type="submit">
											Sign Up <EastIcon />
										</MyButtonCustom>
									</DialogActions>
								</BootstrapDialog>
							</Box>
						</Box>

						<Accordion
							expanded
							sx={{
								marginTop: '10px',
								backgroundColor: '#fff',
								lineHeight: '23px',
								padding: '0 calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
								border: '1px solid rgba(221,221,221,0.5)',
								borderRadius: '10px',
								boxShadow: 'none',
								'&.MuiAccordion-root:before': {
									display: 'none'
								}
							}}
						>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<MySummary>Select Card</MySummary>
							</AccordionSummary>
							<AccordionDetails>
								<Grid container spacing={2}>
									<Grid item xs={12} md={6}>
										<Box
											sx={{
												border: '#f0f3f8',
												backgroundColor: 'rgba(229,229,229,0.3)',
												padding: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));',
												fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));',
												borderRadius: '5px',
												fontWeight: 600,
												color: ' #767676',
												position: 'relative',
												display: 'flex',
												alignItems: 'center',
												height: ' 100%',
												justifyContent: 'space-between'
											}}
										>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center'
												}}
											>
												<FormControl>
													<RadioGroup>
														<FormControlLabel value="" control={<Radio />} label="" checked />
													</RadioGroup>
												</FormControl>
												<Box component="span"> 9800 XXXX XXXX 0545 </Box>
											</Box>
											<Box>
												<CardMedia
													component="img"
													src="https://themes.pixelstrap.com/oslo/assets/icons/png/1.png"
													sx={{
														width: 'calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)))',
														height: 'auto'
													}}
												/>
											</Box>
										</Box>
									</Grid>
									<Grid item xs={12} md={6}>
										<Box
											sx={{
												border: '#f0f3f8',
												backgroundColor: 'rgba(229,229,229,0.3)',
												padding: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));',
												fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));',
												borderRadius: '5px',
												fontWeight: 600,
												color: ' #767676',
												position: 'relative',
												display: 'flex',
												alignItems: 'center',
												height: ' 100%',
												justifyContent: 'space-between'
											}}
										>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center'
												}}
											>
												<FormControl>
													<RadioGroup>
														<FormControlLabel value="" control={<Radio />} label="" />
													</RadioGroup>
												</FormControl>
												<Box component="span"> 6580 XXXX XXXX 2562 </Box>
											</Box>
											<Box>
												<CardMedia
													component="img"
													src="https://themes.pixelstrap.com/oslo/assets/icons/png/2.png"
													sx={{
														width: 'calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)))',
														height: 'auto'
													}}
												/>
											</Box>
										</Box>
									</Grid>
									<Grid item xs={12} md={6}>
										<Box
											sx={{
												border: '#f0f3f8',
												backgroundColor: 'rgba(229,229,229,0.3)',
												padding: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));',
												fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));',
												borderRadius: '5px',
												fontWeight: 600,
												color: ' #767676',
												position: 'relative',
												display: 'flex',
												alignItems: 'center',
												height: ' 100%',
												justifyContent: 'space-between'
											}}
										>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center'
												}}
											>
												<FormControl>
													<RadioGroup>
														<FormControlLabel value="" control={<Radio />} label="" />
													</RadioGroup>
												</FormControl>
												<Box component="span"> 5125 XXXX XXXX 6262 </Box>
											</Box>
											<Box>
												<CardMedia
													component="img"
													src="https://themes.pixelstrap.com/oslo/assets/icons/png/5.png"
													sx={{
														width: 'calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)))',
														height: 'auto'
													}}
												/>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</AccordionDetails>
						</Accordion>
						<Accordion
							sx={{
								marginTop: '10px',
								backgroundColor: '#fff',
								lineHeight: '23px',
								padding: '0 calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
								border: '1px solid rgba(221,221,221,0.5)',
								borderRadius: '10px',
								boxShadow: 'none',
								'&.MuiAccordion-root:before': {
									display: 'none'
								}
							}}
						>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<MySummary>Net Banking</MySummary>
							</AccordionSummary>
							<AccordionDetails>
								<FormControl>
									<RadioGroup defaultValue="Industrial Bank" name="radio-buttons-group">
										<Grid container spacing={3}>
											<Grid item xs={12} md={6}>
												<MyFormControlLabel
													value="Industrial Bank "
													control={<Radio />}
													label="Industrial Bank"
													checked
												/>
												<MyFormControlLabel value="Agricultural Bank" control={<Radio />} label="Agricultural Bank" />
												<MyFormControlLabel
													value="Construction Bank Corp."
													control={<Radio />}
													label="Construction Bank Corp."
												/>
											</Grid>
											<Grid item xs={12} md={6}>
												<MyFormControlLabel value="HSBC Holdings" control={<Radio />} label="HSBC Holdings" />
												<MyFormControlLabel value="Bank of America" control={<Radio />} label="Bank of America" />
												<MyFormControlLabel
													value="JPMorgan Chase & Co."
													control={<Radio />}
													label="JPMorgan Chase & Co."
												/>
											</Grid>
										</Grid>
									</RadioGroup>
								</FormControl>
							</AccordionDetails>
						</Accordion>
						<Accordion
							sx={{
								marginTop: '10px',
								backgroundColor: '#fff',
								lineHeight: '23px',
								padding: '0 calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
								border: '1px solid rgba(221,221,221,0.5)',
								borderRadius: '10px',
								boxShadow: 'none',
								'&.MuiAccordion-root:before': {
									display: 'none'
								}
							}}
						>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<MySummary> Wallet/UPI </MySummary>
							</AccordionSummary>
							<AccordionDetails>
								<FormControl>
									<RadioGroup defaultValue="Industrial Bank" name="radio-buttons-group">
										<Grid container spacing={3}>
											<Grid item xs={12} md={6}>
												<MyFormControlLabel value="Adyen" control={<Radio />} label="Adyen" checked />
												<MyFormControlLabel value="AlliedWallet" control={<Radio />} label="AlliedWallet" />
												<MyFormControlLabel value="Brinks" control={<Radio />} label="Brinks" />
											</Grid>
											<Grid item xs={12} md={6}>
												<MyFormControlLabel value="Airtel Money" control={<Radio />} label="Airtel Money" />
												<MyFormControlLabel value="Apple Pay" control={<Radio />} label="Apple Pay" />
												<MyFormControlLabel value="CardFree" control={<Radio />} label="CardFree" />
											</Grid>
										</Grid>
									</RadioGroup>
								</FormControl>
							</AccordionDetails>
						</Accordion>
						<Accordion
							sx={{
								marginTop: '10px',
								backgroundColor: '#fff',
								lineHeight: '23px',
								padding: '0 calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
								border: '1px solid rgba(221,221,221,0.5)',
								borderRadius: '10px',
								boxShadow: 'none',
								'&.MuiAccordion-root:before': {
									display: 'none'
								}
							}}
						>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<MySummary>Cash on Delivery</MySummary>
							</AccordionSummary>
							<AccordionDetails>
								<Box
									sx={{
										border: '#f0f3f8',
										backgroundColor: 'rgba(229,229,229,0.3)',
										padding: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));',
										fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));',
										borderRadius: '5px',
										fontWeight: 600,
										color: ' #767676',
										position: 'relative',
										display: 'flex',
										alignItems: 'center',
										height: ' 100%',
										justifyContent: 'space-between'
									}}
								>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center'
										}}
									>
										<FormControl>
											<RadioGroup>
												<FormControlLabel
													value="Cash on Delivery"
													control={<Radio />}
													label=" Cash on Delivery "
													checked
												/>
											</RadioGroup>
										</FormControl>
									</Box>
									<Box>
										<CardGiftcardIcon
											sx={{
												width: 'calc(22px + (30 - 22) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(22px + (30 - 22) * ((100vw - 320px) / (1920 - 320)));',
												stroke: '#262834;',
												strokeWidth: '0.8px'
											}}
										/>
									</Box>
								</Box>
							</AccordionDetails>
						</Accordion>
					</Grid>
					<Grid item xs={12} md={3}>
						<Box
							sx={{
								marginBottom: '20px',
								padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
								backgroundColor: '#fafafa'
							}}
						>
							<MyTitle variant="h5">Coupon</MyTitle>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center'
								}}
							>
								<Typography
									variant="h4"
									sx={{
										display: 'flex',
										gap: '10px',
										fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
										fontWeight: 500,
										color: '#767676'
									}}
								>
									<Discount
										sx={{
											width: '18px',
											height: '18px'
										}}
									/>
									Apply Coupon
								</Typography>
								<Button variant="outlined">Apply</Button>
							</Box>

							<Box>
								<FormControl
									fullWidth
									sx={{
										margin: '10px 0',
										border: 'none'
									}}
								>
									<Select
										disabled
										defaultValue={0}
										value={priceSale}
										onChange={handleChange}
										displayEmpty
										inputProps={{ 'aria-label': 'Without label' }}
									>
										<MenuItem value="Freeship">Freeship</MenuItem>
										<MenuItem value={10}>
											{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(10)}
										</MenuItem>
										<MenuItem value={20}>
											{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(20)}
										</MenuItem>
										<MenuItem value={30}>
											{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(30)}
										</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Box>
						<Box
							sx={{
								marginBottom: '20px',
								padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
								backgroundColor: '#fafafa'
							}}
						>
							<MyTitle variant="h5">Price Details {countSelectCart()}</MyTitle>
							<List>
								<MyListItem>
									<Box
										component="span"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											color: '#767676'
										}}
									>
										Bag total
									</Box>
									<Box
										component="span"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											color: '#767676'
										}}
									>
										{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(subTotal)}
									</Box>
								</MyListItem>
								<MyListItem>
									<Box
										component="span"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											color: '#767676'
										}}
									>
										Bag savings
									</Box>
									<Box
										component="span"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											color: '#0f8fac'
										}}
									>
										-
										{Intl.NumberFormat('en-US', {
											style: 'currency',
											currency: 'USD'
										}).format(priceSavings)}
									</Box>
								</MyListItem>
								{/* <MyListItem>
											<Box
												component="span"
												sx={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676'
												}}
											>
												Coupon Discount
											</Box>

											<Link
												to={Route.LoginPage}
												style={{
													textDecoration: 'none',
													color: '#ff5353',
													fontWeight: 600
												}}
											>
												Apply Coupon
											</Link>
										</MyListItem> */}
								<MyListItem>
									<Box
										component="span"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											color: '#767676'
										}}
									>
										Delivery
									</Box>
									<Box
										component="span"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											color: '#767676'
										}}
									>
										{Intl.NumberFormat('en-US', {
											style: 'currency',
											currency: 'USD'
										}).format(priceDelivery)}
									</Box>
								</MyListItem>
								<MyListItem>
									<Box
										component="span"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											color: '#767676'
										}}
									>
										Total Amount
									</Box>
									<Box
										component="span"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											color: '#767676'
										}}
									>
										{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
											priceSale !== 'Freeship' ? totalAmout : subTotal
										)}
									</Box>
								</MyListItem>
							</List>
							<Box
								sx={{
									display: 'flex',
									gap: '15px',
									flexDirection: 'column'
								}}
							>
								<MyButtonCustom onClick={handleAddValueOrder}>Place order</MyButtonCustom>

								<Link
									to={Route.ProductPage}
									style={{
										color: '#0f8fac',
										textDecoration: 'none',
										'&:hover': {
											color: '#fff'
										}
									}}
								>
									<MyButtonOutlined>Back to shop</MyButtonOutlined>
								</Link>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default withLayout(Payment);
