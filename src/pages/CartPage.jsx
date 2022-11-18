import MyBreadcrumbs from '$components/MyBreadcrumbs';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import useAuth from '$hooks/useAuth';
import useCart from '$hooks/useCart';
import useCoupon from '$hooks/useCoupon';
import useNotify from '$hooks/useNotify';
import { Discount } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
	Box,
	Button,
	ButtonGroup,
	Container,
	FormControl,
	Grid,
	IconButton,
	List,
	ListItem,
	MenuItem,
	Paper,
	Select,
	styled,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MyTableCell = styled(TableCell)(({ theme }) => ({
	fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
	color: '#262834',
	fontWeight: 500,
	verticalAlign: 'middle',
	padding: 'calc(15px + (25 - 15) * ((100vw - 320px) / (1920 - 320))) 15px'
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

const MyButtonCustom = styled(Button)(({ theme }) => ({
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '23px',
	gap: '10px',
	borderRadius: 0,
	width: '100%',
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

const CartPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const {
		cartsSelected,
		handleDecreaseCart,
		handleIncreaseCart,
		handleClearAllCart,
		handleClearOneCart,
		countSelectCart
	} = useCart();
	const { user } = useAuth();
	const { handleChangePriceSale, priceSale, shipPrice } = useCoupon();
	const [subTotal, setSubtotal] = useState();
	const { warning } = useNotify();

	const handleChange = e => {
		handleChangePriceSale(e.target.value);
	};

	const handleCheckLogin = () => {
		warning('Please login to checkout');
	};

	useEffect(() => {
		let total = 0;
		for (let i = 0; i < cartsSelected.length; i++) {
			total += cartsSelected[i].newPrice * cartsSelected[i].cartQuantity;
		}
		setSubtotal(total);
	}, [cartsSelected]);

	const handleNavigate = () => {
		navigate(Route.LoginPage, { state: { from: location } });
	};

	const breadcrumb = {
		title: 'Cart',
		currentLink: Route.CartPage,
		prevLink: Route.HomePage,
		shopLink: Route.ProductPage
	};

	return (
		<Box>
			<MyBreadcrumbs breadcrumb={breadcrumb} />

			<Container
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				{cartsSelected.length === 0 ? (
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column'
						}}
					>
						<Typography variant="body1">Your cart is currently empty</Typography>
						<Link to={Route.ProductPage} style={{ textDecoration: 'none', marginTop: '10px' }}>
							<MyButtonCustom>Back to shop</MyButtonCustom>
						</Link>
					</Box>
				) : (
					<>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'flex-end',
								marginBottom: '10px'
							}}
						>
							<MyButtonOutlined sx={{ width: 'auto' }} onClick={handleClearAllCart}>
								Clear All
							</MyButtonOutlined>
						</Box>
						<Grid container spacing={2}>
							<Grid item xs={12} md={9}>
								<TableContainer
									component={Paper}
									sx={{
										height: '500px',
										overflowX: 'auto'
									}}
								>
									<Table sx={{ minWidth: 650 }} aria-label="simple table">
										<TableHead
											sx={{
												position: 'sticky',
												top: 0,
												borderBottom: '1px solid rgba(224, 224, 224, 1)',
												zIndex: 2
											}}
										>
											<TableRow>
												<TableCell>Product</TableCell>
												<TableCell>Price</TableCell>
												<TableCell>Quantity</TableCell>
												<TableCell>Total</TableCell>
												<TableCell>Action</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{cartsSelected.map(cartItem => (
												<TableRow key={cartItem.title}>
													<MyTableCell>
														<Box
															sx={{
																display: 'flex',
																gap: '10px',
																alignItems: 'center'
															}}
														>
															<img
																src={cartItem.imageUrl}
																alt=""
																style={{
																	width: 'calc(60px + (83 - 60) * ((100vw - 320px) / (1920 - 320)))',
																	height: 'auto'
																}}
															/>
															<Box>
																<Typography
																	sx={{
																		fontWeight: 500,
																		marginBottom: '5px',
																		whiteSpace: 'nowrap',
																		overflow: 'hidden',
																		textOverflow: 'ellipsis',
																		color: '#262834'
																	}}
																>
																	{cartItem.title}
																</Typography>
																<Box
																	component="span"
																	sx={{
																		color: '#767676',
																		fontSize: '14px',
																		display: 'flex',
																		gap: '5px',
																		fontWeight: 600
																	}}
																>
																	Brand:
																	<Box component="span">{cartItem.brand}</Box>
																</Box>
																{/* <Box
																	component="span"
																	sx={{
																		color: '#767676',
																		fontSize: '14px',
																		display: 'flex',
																		gap: '5px'
																	}}
																>
																	Size
																	<Box
																		component="span"
																		sx={{
																			color: ' #262834'
																		}}
																	>
																		{cartItem.size}
																	</Box>
																</Box> */}
															</Box>
														</Box>
													</MyTableCell>
													<MyTableCell>${cartItem.newPrice}</MyTableCell>
													<MyTableCell>
														<ButtonGroup
															size="small"
															sx={{
																display: 'block'
															}}
														>
															<Button onClick={() => handleDecreaseCart(cartItem)}>-</Button>
															<Button
																disabled
																sx={{
																	color: '#0f8fac'
																}}
															>
																{cartItem.cartQuantity}
															</Button>
															<Button onClick={() => handleIncreaseCart(cartItem, cartItem.cartQuantity)}>+</Button>
														</ButtonGroup>
													</MyTableCell>
													<MyTableCell>
														{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
															cartItem.cartQuantity * cartItem.newPrice
														)}
													</MyTableCell>
													<MyTableCell>
														<IconButton onClick={() => handleClearOneCart(cartItem)}>
															<DeleteIcon />
														</IconButton>
													</MyTableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
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

									{user ? (
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
									) : (
										<Box
											sx={{
												color: '#767676',
												fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
												whiteSpace: 'nowrap'
											}}
										>
											<Button
												sx={{
													color: '#0f8fac',
													fontWeight: 600,
													minWidth: 'auto',
													padding: '4px'
												}}
												onClick={handleNavigate}
											>
												Login
											</Button>{' '}
											to see best coupon for you
										</Box>
									)}
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
										{user ? (
											<Link
												to={Route.AddressPage}
												style={{
													color: '#0f8fac',
													textDecoration: 'none',
													'&:hover': {
														color: '#fff'
													}
												}}
											>
												<MyButtonCustom>Checkout</MyButtonCustom>
											</Link>
										) : (
											<MyButtonCustom onClick={handleCheckLogin}>Checkout</MyButtonCustom>
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
					</>
				)}
			</Container>
		</Box>
	);
};

export default withLayout(CartPage);
