import InputField from '$components/InputFields/InputField';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import useAddress from '$hooks/useAddress';
import useAuth from '$hooks/useAuth';
import useCart from '$hooks/useCart';
import useCoupon from '$hooks/useCoupon';
import useNotify from '$hooks/useNotify';
import { yupResolver } from '@hookform/resolvers/yup';
import { Discount } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EastIcon from '@mui/icons-material/East';
import {
	Badge,
	Box,
	Button,
	Container,
	Dialog,
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
	Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2)
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1)
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

const MyParagraph = styled(Typography)(({ theme }) => ({
	color: '#767676',
	fontSize: '14px',
	lineHeight: '18px',
	textAlign: 'left'
}));

const MySpan = styled(Box)(({ theme }) => ({
	marginTop: '15px',
	display: 'flex',
	gap: '8px',
	fontSize: '14px',
	color: '#767676'
}));

const TitleColor = styled(Box)(({ theme }) => ({
	fontSize: '14px',
	color: '#262834',
	fontWeight: 500
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

const AddressPage = () => {
	const { user } = useAuth();

	const { handleAddAddress, fetchAddressWithUser, addressList, handleDeleteAddress, handleAddAddressChecked } =
		useAddress();

	const { handleChangePriceSale, priceSale, shipPrice } = useCoupon();

	const { cartsSelected, countSelectCart } = useCart();

	const [subTotal, setSubtotal] = useState();

	const handleChange = e => {
		handleChangePriceSale(e.target.value);
	};

	const { warning } = useNotify();

	const [selected, setSelected] = useState('');

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		fetchAddressWithUser(user._id);
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

	const handleChangeAddress = e => {
		setSelected(e.target.value);
		handleAddAddressChecked(e.target.value);
	};

	const handleCheckCheckedAddress = () => {
		warning('Please select the address before payment');
	};

	useEffect(() => {
		let total = 0;
		for (let i = 0; i < cartsSelected.length; i++) {
			total += cartsSelected[i].newPrice * cartsSelected[i].cartQuantity;
		}
		setSubtotal(total);
	}, [cartsSelected]);

	return (
		<Container
			maxWidth="xl"
			sx={{
				paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
				paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<Grid container spacing={3}>
				<Grid item xs={12} md={9}>
					<Box sx={{ marginBottom: '20px' }}>
						<Typography
							variant="h2"
							sx={{
								fontSize: 'calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));',
								color: '#262834',
								fontWeight: 600
							}}
						>
							Select Delivery Address
						</Typography>
					</Box>
					{/* <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isLoading}>
						<CircularProgress color="inherit" />
					</Backdrop> */}
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
									{priceSale === 'Freeship'
										? 0
										: `- ${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceSale)}`}
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
									{priceSale === 'Freeship'
										? 0
										: Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(shipPrice)}
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
										priceSale !== 'Freeship' ? subTotal - priceSale + shipPrice : subTotal
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
							{selected ? (
								<Link
									to={Route.PaymentPage}
									style={{
										color: '#0f8fac',
										textDecoration: 'none',
										'&:hover': {
											color: '#fff'
										}
									}}
								>
									<MyButtonCustom>Proceed To Pay</MyButtonCustom>
								</Link>
							) : (
								<MyButtonCustom onClick={handleCheckCheckedAddress}>Proceed To Pay</MyButtonCustom>
							)}

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
	);
};

export default withLayout(AddressPage);
