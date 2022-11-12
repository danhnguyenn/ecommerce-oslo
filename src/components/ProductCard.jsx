import Route from '$constants/Route';
import useAuth from '$hooks/useAuth';
import useCart from '$hooks/useCart';
import useNotify from '$hooks/useNotify';
import useWishList from '$hooks/useWishList';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarIcon from '@mui/icons-material/Star';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Box, CardMedia, IconButton, keyframes, styled, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BoxSlide = keyframes`
	0% {
	  -webkit-transform: translateX(0);
			  transform: translateX(0);
	}
	100% {
	  -webkit-transform: translateX(-10px);
			  transform: translateX(-10px);
	}
`;
const BoxHover = styled('div')(({ theme }) => ({
	position: 'absolute',
	top: '10%',
	right: '-100%',
	display: 'flex',
	flexDirection: 'column',
	gap: '10px'
}));

const NewBadge = styled('span')(({ theme }) => ({
	fontWeight: 600,
	fontSize: 'calc(10px + (12 - 10) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: 'calc(5px + (10 - 5) * ((100vw - 320px) / (1920 - 320)))',
	padding:
		'6px calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320))) 6px calc(7px + (10 - 7) * ((100vw - 320px) / (1920 - 320)))',
	color: '#fff',
	position: 'relative',
	display: 'inline-block',
	clipPath: 'polygon(100% 0, 85% 50%, 100% 100%, 0 100%, 0 0)',
	backgroundColor: theme.palette.secondary.light
}));

const ProductCard = ({ product }) => {
	const { warning } = useNotify();
	const { user } = useAuth();
	const { handleCheckLiked } = useWishList();
	const { handleAddToCart } = useCart();
	const navigate = useNavigate();

	const handleCheckLogin = () => {
		warning('Please login to like the product');
	};

	return (
		<Box
			sx={{
				position: 'relative',
				overflow: 'hidden',
				'&:hover .MuiImageBackdrop-root': {
					right: '10px',
					animation: `${BoxSlide} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
				}
			}}
		>
			<Box
				sx={{
					height: {
						xs: '200px',
						sm: '200px',
						md: '200px',
						lg: '300px'
					},
					cursor: 'pointer'
				}}
				onClick={() => navigate(Route.ProductDetail, { state: product })}
			>
				<CardMedia
					component="img"
					image={product.imageUrl}
					alt={product.title}
					sx={{
						height: '100%'
					}}
				/>
			</Box>

			{product.isNew ? (
				<Box
					sx={{
						position: 'absolute',
						left: 0,
						top: '5%'
					}}
				>
					<NewBadge>New</NewBadge>
				</Box>
			) : (
				''
			)}

			<BoxHover className="MuiImageBackdrop-root">
				{user ? (
					<Box
						sx={{
							borderRadius: '50%',
							backgroundColor: '#fff'
						}}
					>
						<Tooltip title="Wishlist" placement="left-start">
							<IconButton
								onClick={() => handleCheckLiked({ userId: user._id, productId: product._id })}
								sx={{
									'&:hover': {
										backgroundColor: '#0f8fac',
										color: '#fff'
									}
								}}
							>
								<FavoriteBorderIcon sx={{ fontSize: '18px' }} />
							</IconButton>
						</Tooltip>
					</Box>
				) : (
					<Box
						sx={{
							borderRadius: '50%',
							backgroundColor: '#fff'
						}}
					>
						<Tooltip title="Wishlist" placement="left-start">
							<IconButton
								onClick={handleCheckLogin}
								sx={{
									'&:hover': {
										backgroundColor: '#0f8fac',
										color: '#fff'
									}
								}}
							>
								<FavoriteBorderIcon sx={{ fontSize: '18px' }} />
							</IconButton>
						</Tooltip>
					</Box>
				)}

				<Box
					sx={{
						borderRadius: '50%',
						backgroundColor: '#fff'
					}}
				>
					<Tooltip title="Compare" placement="left-start">
						<IconButton
							sx={{
								'&:hover': {
									backgroundColor: '#0f8fac',
									color: '#fff'
								}
							}}
						>
							<CompareArrowsIcon sx={{ fontSize: '18px' }} />
						</IconButton>
					</Tooltip>
				</Box>
				<Box
					sx={{
						borderRadius: '50%',
						backgroundColor: '#fff'
					}}
				>
					<Tooltip title="View Product" placement="left-start">
						<IconButton
							onClick={() => navigate(Route.ProductDetail, { state: product })}
							sx={{
								'&:hover': {
									backgroundColor: '#0f8fac',
									color: '#fff'
								}
							}}
						>
							<RemoveRedEyeIcon sx={{ fontSize: '18px' }} />
						</IconButton>
					</Tooltip>
				</Box>
				<Box
					sx={{
						borderRadius: '50%',
						backgroundColor: '#fff'
					}}
				>
					<Tooltip title="Add to Cart" placement="left-start">
						<IconButton
							onClick={() => handleAddToCart(product)}
							sx={{
								'&:hover': {
									backgroundColor: '#0f8fac',
									color: '#fff'
								}
							}}
						>
							<StorefrontIcon sx={{ fontSize: '18px' }} />
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
					top: {
						xs: '55%',
						sm: '55%',
						md: '55%',
						lg: '64%'
					},
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
					{product.rating}{' '}
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
					{product.numReviews}{' '}
				</Typography>
			</Box>

			<Box
				sx={{
					paddingTop: '10px',
					cursor: 'pointer'
				}}
			>
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
						textOverflow: 'ellipsis',
						textTransform: 'capitalize'
					}}
					onClick={() => navigate(Route.ProductDetail, { state: product })}
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
			</Box>
		</Box>
	);
};

export default ProductCard;

ProductCard.propTypes = {
	product: PropTypes.object.isRequired
};
