import { Box, CardMedia, Rating, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ProductOrder = ({ product, order }) => {
	const rating = 5;

	return (
		<Box
			sx={{
				padding: '20px',
				marginTop: '20px',
				backgroundColor: '#fafafa'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					gap: '15px',
					flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }
				}}
			>
				<CardMedia
					component="img"
					image={product.image}
					alt="Paella dish"
					sx={{
						width: {
							xs: '100%',
							sm: '100%',
							md: 'calc(90px + (120 - 90) * ((100vw - 475px) / (1920 - 475)))',
							lg: "'calc(90px + (120 - 90) * ((100vw - 475px) / (1920 - 475)))'"
						}
					}}
				/>
				<Box>
					<Typography
						variant="h5"
						sx={{
							fontSize: 'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))',
							color: '#262834',
							fontWeight: 500,
							marginBottom: '4px'
						}}
					>
						{product.name}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontSize: '14px',
							color: '#767676',
							lineHeight: '20px',
							marginBottom: '16px',
							display: '-webkit-box',
							WebkitLineClamp: '3',
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden'
						}}
					>
						{product.product.description}
					</Typography>
					<Box
						component="span"
						sx={{
							display: 'flex',
							color: '#767676',
							fontSize: '14px',
							fontWeight: 500,
							gap: '8px'
						}}
					>
						Price{' '}
						<Box
							component="span"
							sx={{
								color: '#262834'
							}}
						>
							{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
						</Box>
					</Box>
					<Box
						component="span"
						sx={{
							display: 'flex',
							color: '#767676',
							fontSize: '14px',
							fontWeight: 500,
							gap: '8px'
						}}
					>
						Quantity{' '}
						<Box
							component="span"
							sx={{
								color: '#262834'
							}}
						>
							{product.quantity}
						</Box>
					</Box>
					<Box
						component="span"
						sx={{
							display: 'flex',
							color: '#767676',
							fontSize: '14px',
							fontWeight: 500,
							gap: '8px'
						}}
					>
						Order Id:{' '}
						<Box
							component="span"
							sx={{
								color: '#262834'
							}}
						>
							{order._id}
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					paddingTop: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
					marginTop: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
					borderTop: '2px solid #fff',
					display: 'flex',
					alignItems: 'center',
					gap: 'calc(8px + (15 - 8) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Box
					component="span"
					sx={{
						fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))',
						fontWeight: 500,
						color: '#262834',
						marginTop: '-3px',
						marginBottom: '-4px'
					}}
				>
					Rate Product:
				</Box>
				<Rating name="read-only" value={rating} readOnly />
			</Box>
		</Box>
	);
};

ProductOrder.propTypes = {
	product: PropTypes.object.isRequired,
	order: PropTypes.object.isRequired
};

export default ProductOrder;
