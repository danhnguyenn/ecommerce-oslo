import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import useAddress from '$hooks/useAddress';
import useCoupon from '$hooks/useCoupon';
import useOrder from '$hooks/useOrder';
import {
	Box,
	CardMedia,
	Container,
	Grid,
	keyframes,
	List,
	ListItem,
	Paper,
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
import { Link } from 'react-router-dom';

const SlideBottom = keyframes`
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(5px);
              transform: translateY(5px);
    }
`;
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

const MyTableCell = styled(TableCell)(({ theme }) => ({
	fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
	color: '#262834',
	fontWeight: 500,
	verticalAlign: 'middle',
	padding: 'calc(15px + (25 - 15) * ((100vw - 320px) / (1920 - 320))) 15px'
}));

const OrderSuccess = () => {
	const { priceSale, shipPrice } = useCoupon();

	const { addressListChecked } = useAddress();

	const [subTotal, setSubtotal] = useState();

	const { order } = useOrder();

	const { orderItems, dateOrdered } = order;

	useEffect(() => {
		let total = 0;
		for (let i = 0; i < orderItems.length; i++) {
			total += orderItems[i].price * orderItems[i].quantity;
		}
		setSubtotal(total);
	}, [orderItems]);

	const countSelectCart = () => {
		let count = 0;
		for (let i = 0; i < orderItems.length; i++) {
			count += orderItems[i].quantity;
		}
		return count;
	};

	const date = new Date(dateOrdered);
	const dateFormatted = [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');

	return (
		<Box>
			<Box
				sx={{
					padding: 'calc(38px + (60 - 38) * ((100vw - 320px) / (1920 - 320))) 20px',
					backgroundColor: '#f7f7f7;'
				}}
			>
				<Box
					sx={{
						position: 'relative',
						width: '100px',
						margin: '0 auto',
						marginBottom: '20px'
					}}
				>
					<CardMedia
						component="img"
						image="https://themes.pixelstrap.com/oslo/assets/svg/order-success.svg"
						alt="Image Success"
						sx={{ width: '100%' }}
					/>
					<CardMedia
						component="img"
						image="https://themes.pixelstrap.com/oslo/assets/svg/check.svg"
						alt="Image Success"
						sx={{
							width: ' 33%',
							position: 'absolute',
							right: ' 0px',
							top: '0',
							animation: `${SlideBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
						}}
					/>
				</Box>
				<Box sx={{ textAlign: 'center' }}>
					<Typography
						variant="h1"
						sx={{
							fontSize: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)));',
							fontWeight: 500,
							marginBottom: '10px'
						}}
					>
						Order Success
					</Typography>
					<Typography
						sx={{
							marginBottom: '6px',
							fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
							fontWeight: 500,
							color: '#767676',
							lineHeight: '20px'
						}}
					>
						Payment Is Successfully Processsed And Your Order Is On The Way
					</Typography>
					<Typography
						variant="h6"
						sx={{
							letterSpacing: ' 1.1px',
							lineHeight: '20px',
							color: '#262834',
							fontWeight: 500,
							fontSize: '14px'
						}}
					>
						Transaction ID: {order._id}
					</Typography>
					<Typography
						variant="h6"
						sx={{
							letterSpacing: ' 1.1px',
							lineHeight: '20px',
							color: '#262834',
							fontWeight: 500,
							fontSize: '14px'
						}}
					>
						Date ordered: {dateFormatted}
					</Typography>
				</Box>
			</Box>
			<Container
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} md={8}>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Product</TableCell>
										<TableCell>Price</TableCell>
										<TableCell>Quantity</TableCell>
										<TableCell>Total</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{orderItems.map(item => (
										<TableRow key={item.name}>
											<MyTableCell>
												<Box
													sx={{
														display: 'flex',
														gap: '10px',
														alignItems: 'center'
													}}
												>
													<img
														src={item.image}
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
															{item.name}
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
															<Box component="span">{item.brand}</Box>
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
											<MyTableCell>${item.price}</MyTableCell>
											<MyTableCell>{item.quantity}</MyTableCell>
											<MyTableCell>
												{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
													item.quantity * item.price
												)}
											</MyTableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
					<Grid item xs={12} md={4}>
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
									<Box
										component="span"
										sx={{
											fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
											color: '#ff5353 '
										}}
									>
										$100.00
									</Box>
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
						</Box>
						<Box
							sx={{
								marginBottom: '20px',
								padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
								backgroundColor: '#fafafa'
							}}
						>
							<MyTitle variant="h5">Shipping Address</MyTitle>
							{addressListChecked.map(item => (
								<List key={item._id}>
									<MyListItem>
										<Box
											component="span"
											sx={{
												fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
												color: '#767676'
											}}
										>
											{item.fullName}
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
											{item.address}
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
											{item.country}
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
											Contact No. {item.phone}
										</Box>
									</MyListItem>
									<MyListItem>
										{/* <Box>
											<Box
												component="span"
												sx={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676'
												}}
											>
												Expected Date Of Delivery:
											</Box>
											<Box component="strong" sx={{ display: 'block' }}>
												June 22, 2022
											</Box>
										</Box> */}
										<Link
											to={Route.UserDashboardPage}
											style={{
												color: '#ff5353',
												fontWeight: 500,
												textDecoration: 'none',
												'&:hover': {
													color: '#0d6efd'
												}
											}}
										>
											Track Order
										</Link>
									</MyListItem>
								</List>
							))}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default withLayout(OrderSuccess);
