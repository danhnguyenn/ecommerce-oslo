import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PlaceIcon from '@mui/icons-material/Place';
import { Badge, Box, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ProductOrder from './ProductOrder';

const MySpan = styled(Box)(({ theme }) => ({
	fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
	color: '#767676'
}));

const OrderDetail = ({ order }) => {
	const [subTotal, setSubtotal] = useState();
	const { orderItems } = order;

	useEffect(() => {
		let total = 0;
		for (let i = 0; i < orderItems.length; i++) {
			total += orderItems[i].price * orderItems[i].quantity;
		}
		setSubtotal(total);
	}, []);

	const date = new Date(order.dateOrdered);
	const dateFormatted = [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');

	return (
		<Box
			sx={{
				backgroundColor: '#f7f7f7',
				borderRadius: '5px'
			}}
		>
			<Box
				sx={{
					padding: '20px',
					backgroundColor: '#fff',
					borderRadius: '5px',
					display: 'flex',
					gap: '10px'
				}}
			>
				<Box
					component="span"
					sx={{
						width: 'calc(35px + (40 - 35) * ((100vw - 320px) / (1920 - 320)))',
						height: 'calc(35px + (40 - 35) * ((100vw - 320px) / (1920 - 320)))',
						borderRadius: '100%',
						position: 'relative',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						'&:after': {
							content: '""',
							backgroundColor: '#0f8fac',
							position: 'absolute',
							opacity: 0.08,
							inset: 0,
							width: 'inherit',
							height: 'inherit',
							borderRadius: 'inherit'
						}
					}}
				>
					<LocalShippingIcon
						sx={{
							width: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
							height: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
							color: '#0f8fac'
						}}
					/>
				</Box>
				<Box>
					<Typography
						variant="h5"
						sx={{
							fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))',
							color: '#262834',
							fontWeight: 500,
							marginBottom: '2px'
						}}
					>
						Order Delivered
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							marginBottom: 0,
							color: '#767676',
							fontSize: '14px',
							lineHeight: '20px',
							fontWeight: 400
						}}
					>
						Delivered On {dateFormatted}
					</Typography>
				</Box>
			</Box>
			{orderItems.map(item => (
				<ProductOrder key={item._id} product={item} order={order} />
			))}

			<Box
				sx={{
					padding: '20px',
					backgroundColor: '#fff',
					borderRadius: '5px'
				}}
			>
				<Box>
					<Typography
						variant="h5"
						sx={{
							fontSize: '16px',
							fontWeight: 500,
							color: ' #262834',
							marginBottom: '10px'
						}}
					>
						Price Details
					</Typography>
					<Box
						sx={{
							padding: 'calc(3px + (5 - 3) * ((100vw - 320px) / (1920 - 320))) 0',
							display: 'flex',
							justifyContent: 'space-between'
						}}
					>
						<MySpan component="span">Bag total</MySpan>
						<MySpan component="span">
							{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(subTotal)}
						</MySpan>
					</Box>
					<Box
						sx={{
							padding: 'calc(3px + (5 - 3) * ((100vw - 320px) / (1920 - 320))) 0',
							display: 'flex',
							justifyContent: 'space-between'
						}}
					>
						<MySpan component="span">Bag savings</MySpan>
						<MySpan
							component="span"
							sx={{
								color: '#0f8fac'
							}}
						>
							{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.priceSavings)}
						</MySpan>
					</Box>
					<Box
						sx={{
							padding: 'calc(3px + (5 - 3) * ((100vw - 320px) / (1920 - 320))) 0',
							display: 'flex',
							justifyContent: 'space-between'
						}}
					>
						<MySpan component="span">Delivery</MySpan>
						<MySpan component="span">
							{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.priceDelivery)}
						</MySpan>
					</Box>
					<Box
						sx={{
							padding: '10px 0',
							marginTop: '8px',
							borderTop: '1px solid #c4c4c4',
							display: 'flex',
							justifyContent: 'space-between'
						}}
					>
						<MySpan
							component="span"
							sx={{
								color: '#262834',
								fontWeight: 600
							}}
						>
							Total Amount
						</MySpan>
						<MySpan
							component="span"
							sx={{
								color: '#262834',
								fontWeight: 600
							}}
						>
							{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.totalPrice)}
						</MySpan>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					padding: '20px',
					backgroundColor: '#fff',
					borderRadius: '5px'
				}}
			>
				<Box>
					<Typography
						variant="h5"
						sx={{
							fontSize: '16px',
							fontWeight: 500,
							color: ' #262834',
							marginBottom: '10px'
						}}
					>
						Order Address
					</Typography>
					<Typography
						variant="h5"
						sx={{
							fontWeight: 500,
							marginTop: '-1px',
							lineHight: '20px',
							display: 'flex',
							alignItems: 'center',
							gap: '14px',
							marginBottom: '15px',
							fontSize: '14px'
						}}
					>
						{order.fullName}
						<Badge color="primary" badgeContent="Home" sx={{ marginLeft: '14px' }} />
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							marginBottom: '-4px',
							fontWeight: 400,
							marginTop: '3px',
							display: 'flex',
							gap: '10px',
							color: '#767676',
							fontSize: '14px'
						}}
					>
						<PlaceIcon
							sx={{
								minWidth: '16px',
								width: '16px',
								minHeight: '16px',
								height: '16px'
							}}
						/>
						{order.shippingAddress}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

OrderDetail.propTypes = {
	order: PropTypes.object.isRequired
};

export default OrderDetail;
