import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Button, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import OrderDetail from './OrderDetail';
import ProductOrder from './ProductOrder';

const MyButtonCustom = styled(Button)(({ theme }) => ({
	marginTop: '10px',
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

const Order = ({ order }) => {
	const { orderItems } = order;
	const [toggleDetail, setToggleDetail] = useState(false);
	const [visible, setVisible] = useState(1);

	const date = new Date(order.dateOrdered);
	const dateFormatted = [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');

	const dateFinish = new Date(order.dateFinish);
	const dateFinishFormatted = [dateFinish.getDate(), dateFinish.getMonth() + 1, dateFinish.getFullYear()].join('/');

	const handleToggleOrderDetail = () => {
		setToggleDetail(!toggleDetail);
	};

	const handleShowProduct = () => {
		setVisible(preState => preState + 2);
	};

	return (
		<Box>
			{toggleDetail ? (
				<Box onClick={handleToggleOrderDetail}>
					<OrderDetail product={orderItems} order={order} />
				</Box>
			) : (
				<Box
					sx={{
						padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
						backgroundColor: ' #fff',
						borderRadius: '10px',
						border: ' 1px solid rgba(221,221,221,0.4)',
						marginBottom: '10px'
					}}
				>
					{order.status === 'Pending' ? (
						<Box
							sx={{
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
							<Box onClick={handleToggleOrderDetail}>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))',
										color: '#262834',
										fontWeight: 500,
										marginBottom: '2px'
									}}
								>
									Pending
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
									Date ordered {dateFormatted}
								</Typography>
							</Box>
						</Box>
					) : (
						<Box
							sx={{
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
							<Box onClick={handleToggleOrderDetail}>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))',
										color: '#262834',
										fontWeight: 500,
										marginBottom: '2px'
									}}
								>
									Delivered
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
									Date ordered {dateFormatted} and Delivered on {dateFinishFormatted}
								</Typography>
							</Box>
						</Box>
					)}
					{orderItems.slice(0, visible).map(item => (
						<ProductOrder key={item._id} product={item} order={order} />
					))}
					{orderItems.length > 1 ? (
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<MyButtonCustom onClick={handleShowProduct}>Read More</MyButtonCustom>
						</Box>
					) : (
						''
					)}
				</Box>
			)}
		</Box>
	);
};

Order.propTypes = {
	order: PropTypes.object.isRequired
};

export default Order;
