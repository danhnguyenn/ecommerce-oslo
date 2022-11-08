import Route from '$constants/Route';
import useCart from '$hooks/useCart';
import useWishList from '$hooks/useWishList';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import { Box, Button, CardMedia, IconButton, keyframes, styled, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BoxSlide = keyframes`
	0% {
	  -webkit-transform: translateX(0);
			  transform: translateX(0);
	}
	100% {
	  -webkit-transform: translateX(-5px);
			  transform: translateX(-5px);
	}
`;
const BoxHover = styled('div')(({ theme }) => ({
	position: 'absolute',
	top: '10%',
	right: '-100%'
}));

const MyButtonOutlined = styled(Button)(({ theme }) => ({
	width: '100%',
	borderColor: theme.palette.primary.light,
	borderWidth: '1px',
	borderStyle: 'solid',
	color: theme.palette.primary.light,
	fontWeight: 600,
	'&:hover': {
		backgroundColor: theme.palette.primary.light,
		color: '#fff'
	}
}));

const ProductWishList = ({ product }) => {
	const { handleDeleteProductWithUser, handleClearProduct } = useWishList();
	const { handleAddToCart } = useCart();

	const handleClear = id => {
		handleClearProduct(id);
		handleDeleteProductWithUser(id);
	};

	const handleMoveToCart = product => {
		handleAddToCart(product);
		handleClear(product._id);
	};

	return (
		<Box
			sx={{
				border: '1px solid #ddd',
				borderRadius: '5px'
			}}
		>
			<Box
				sx={{
					position: 'relative',
					overflow: 'hidden',
					'&:hover .MuiImageBackdrop-root': {
						right: '10px',
						animation: `${BoxSlide} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
					},
					height: '200px'
				}}
			>
				<CardMedia
					component="img"
					image={product.imageUrl}
					alt="Paella dish"
					sx={{
						position: 'relative',
						height: '100%'
					}}
				/>

				<BoxHover className="MuiImageBackdrop-root" onClick={() => handleClear(product._id)}>
					<Box
						sx={{
							borderRadius: '50%',
							backgroundColor: '#fff'
						}}
					>
						<Tooltip title="Move cart" placement="left-start">
							<IconButton
								sx={{
									'&:hover': {
										backgroundColor: '#0f8fac',
										color: '#fff'
									}
								}}
							>
								<CloseIcon sx={{ fontSize: '18px' }} />
							</IconButton>
						</Tooltip>
					</Box>
				</BoxHover>
				<Box
					sx={{
						background: 'rgba(255,255,255,0.7)',
						backdropFilter: 'blur(4px)',
						display: 'flex',
						padding: '10px 7px',
						position: 'absolute',
						bottom: '5%',
						left: '2%',
						zIndex: 1,
						gap: '5px'
					}}
				>
					<Typography
						component="span"
						sx={{
							borderRight: '1px solid rgba(82,82,82,0.2)',
							fontSize: 'calc(10px + (14 - 10) * ((100vw - 320px) / (1920 - 320)))',
							display: 'flex',
							alignItems: 'center'
						}}
					>
						{product.rating}
						<StarIcon
							style={{
								color: '#0f8fac',
								width: '20px',
								height: '15px'
							}}
						/>
					</Typography>
					<Typography
						component="span"
						sx={{
							fontSize: 'calc(10px + (14 - 10) * ((100vw - 320px) / (1920 - 320)))',
							display: 'flex',
							alignItems: 'center'
						}}
					>
						{product.numReviews}
					</Typography>
				</Box>
			</Box>

			<Box sx={{ padding: '10px' }}>
				<Typography
					component="p"
					sx={{
						fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
						lineHeight: 'calc(19px + (23 - 19) * ((100vw - 320px) / (1920 - 320)))',
						color: '#767676',
						marginBottom: 'calc(3px + (10 - 3) * ((100vw - 320px) / (1920 - 320)))'
					}}
				>
					{product.brand}
				</Typography>
				<Typography
					component="h5"
					sx={{
						fontWeight: 'normal',
						fontSize: 'calc(15px + (18 - 15) * ((100vw - 320px) / (1920 - 320)))',
						lineHeight: 'calc(22px + (26 - 22) * ((100vw - 320px) / (1920 - 320)))',
						color: '#262834',
						marginBottom: 'calc(0px + (5 - 0) * ((100vw - 320px) / (1920 - 320)))',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
						maxWidth: 'max-content',
						textOverflow: 'ellipsis'
					}}
				>
					{product.title}
				</Typography>
				<Box>
					<Typography
						component="span"
						sx={{
							color: '#262834',
							marginRight: 'calc(3px + (10 - 3) * ((100vw - 320px) / (1920 - 320)))',
							display: 'inline-block',
							fontWeight: 600,
							fontSize: 'calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))',
							lineHeight: '26px'
						}}
					>
						{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.newPrice)}
					</Typography>
					<Typography
						component="del"
						sx={{
							color: '#0f8fac',
							fontWeight: 600,
							fontSize: ' calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))',
							lineHeight: '26px'
						}}
					>
						{product.oldPrice > 0
							? Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.oldPrice)
							: ''}
					</Typography>
				</Box>
				<Link
					to={Route.CartPage}
					style={{
						color: '#0f8fac',
						textDecoration: 'none',
						'&:hover': {
							color: '#fff'
						}
					}}
				>
					<MyButtonOutlined onClick={() => handleMoveToCart(product)}>Move to Cart</MyButtonOutlined>
				</Link>
			</Box>
		</Box>
	);
};
ProductWishList.propTypes = {
	product: PropTypes.object.isRequired
};

export default ProductWishList;
