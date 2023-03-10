import MyBreadcrumbs from '$components/MyBreadcrumbs';
import ProductCard from '$components/ProductCard';
import TabProduct from '$components/Tab/TabProduct';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import useAuth from '$hooks/useAuth';
import useCart from '$hooks/useCart';
import useCategory from '$hooks/useCategory';
import useWishList from '$hooks/useWishList';
import styled from '@emotion/styled';
import {
	Box,
	Button,
	ButtonGroup,
	CardMedia,
	Container,
	Grid,
	List,
	ListItem,
	Rating,
	Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MyHeadingTwo = styled(Typography)(({ theme }) => ({
	marginTop: '-4px',
	fontSize: 'calc(22px + (30 - 22) * ((100vw - 320px) / (1920 - 320)))',
	fontWeight: 600,
	color: '#262834',
	marginBottom: 'calc(7px + (15 - 7) * ((100vw - 992px) / (1920 - 992)))',
	lineHeight: 1.2
}));

const MyParagraph = styled(Typography)(({ theme }) => ({
	fontSize: 'calc(15px + (18 - 15) * ((100vw - 992px) / (1920 - 992)))',
	color: '#767676',
	fontWeight: 400,
	lineHeight: 'calc(20px + (25 - 20) * ((100vw - 992px) / (1920 - 992)))',
	marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))'
}));

const MyHeadingFour = styled(Typography)(({ theme }) => ({
	fontWeight: '500',
	fontSize: 'calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: 'calc(20px + (22 - 20) * ((100vw - 320px) / (1920 - 320)))',
	position: 'relative',
	cursor: 'pointer',
	zIndex: 2,
	display: 'inline-block',
	marginBottom: '15px'
}));

const MyButtonSize = styled(Button)(({ theme }) => ({
	borderRadius: 0,
	border: '1px solid #f0f3f8',
	'&.active': {
		backgroundColor: theme.palette.primary.light,
		color: '#fff'
	},
	':hover': {
		backgroundColor: theme.palette.primary.light,
		color: '#fff',
		border: 'none'
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
	fontWeight: 600,
	'&:hover': {
		backgroundColor: theme.palette.primary.light,
		color: '#fff'
	}
}));

const ProductDetail = () => {
	const { state } = useLocation();
	const { fetchProductWithCategory, productsWithCategory } = useCategory();
	const { handleAddToCart } = useCart();
	const { handleAddWishList } = useWishList();
	const { user } = useAuth();
	const [counter, setCounter] = useState(1);
	const [value, setValue] = useState(5);
	const breadcrumb = {
		title: 'Product Detail',
		currentLink: Route.ProductDetail,
		prevLink: Route.HomePage
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		fetchProductWithCategory(state.category);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.category]);

	return (
		<>
			<MyBreadcrumbs breadcrumb={breadcrumb} />
			<Container
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Grid
					container
					spacing={2}
					sx={{
						paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
						paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
					}}
				>
					<Grid item xs={12} md={5}>
						<Box sx={{ height: '500px' }}>
							<CardMedia
								component="img"
								image={state.imageUrl}
								alt={state.title}
								sx={{
									width: '100%',
									height: '100%'
								}}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={7}>
						<MyHeadingTwo>{state.title}</MyHeadingTwo>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: '5px',
								marginBottom: 'calc(8px + (15 - 8) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							<Rating
								name="simple-controlled"
								value={value}
								onChange={(event, newValue) => {
									setValue(newValue);
								}}
							/>
							<Typography
								component="span"
								sx={{
									fontSize: '16px',
									fontWeight: 500
								}}
							>
								{state.rating} Rating
							</Typography>
						</Box>
						<Box
							sx={{
								marginBottom: 'calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
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
								{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(state.newPrice)}
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
								{state.oldPrice > 0
									? Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(state.oldPrice)
									: ''}
							</Typography>
						</Box>
						<Box
							sx={{
								marginBottom: 'calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320)));'
							}}
						>
							<MyParagraph>{state.description}</MyParagraph>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '15px'
							}}
						>
							<Box>
								<MyHeadingFour>
									<Typography
										component="span"
										sx={{
											height: '50%',
											display: 'block',
											left: 0,
											right: 0,
											zIndex: -1,
											bottom: '0px',
											position: 'absolute',
											backgroundColor: 'rgba(15,143,172,0.1)'
										}}
									>
										{' '}
									</Typography>
									Your Brand Color
								</MyHeadingFour>
								<List
									sx={{
										display: 'flex',
										flexDirection: 'row',
										gap: '10px',
										'& li': {
											width: 'auto'
										}
									}}
								>
									<ListItem disablePadding sx={{ display: 'inline-block' }}>
										<Box
											sx={{
												width: 'calc(24px + (26 - 24) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(24px + (26 - 24) * ((100vw - 320px) / (1920 - 320)))',
												borderRadius: '100%',
												position: 'relative',
												backgroundColor: '#f3c0d7'
											}}
										>
											<Box
												sx={{
													backgroundImage: "url('https://themes.pixelstrap.com/oslo/assets/icons/svg/tick.svg')",
													left: '50%',
													top: '50%',
													height: '12px',
													width: 'calc(12px + (17 - 12) * ((100vw - 320px) / (1920 - 320)))',
													backgroundRepeat: 'no-repeat',
													position: 'absolute',
													transform: 'translate(-50%, -50%)'
												}}
											>
												{' '}
											</Box>
										</Box>
									</ListItem>
									<ListItem disablePadding sx={{ display: 'inline-block' }}>
										<Box
											sx={{
												width: 'calc(24px + (26 - 24) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(24px + (26 - 24) * ((100vw - 320px) / (1920 - 320)))',
												borderRadius: '100%',
												position: 'relative',
												backgroundColor: '#f9ede1'
											}}
										>
											{' '}
										</Box>
									</ListItem>
									<ListItem disablePadding sx={{ display: 'inline-block' }}>
										<Box
											sx={{
												width: 'calc(24px + (26 - 24) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(24px + (26 - 24) * ((100vw - 320px) / (1920 - 320)))',
												borderRadius: '100%',
												position: 'relative',
												backgroundColor: '#fcded6'
											}}
										>
											{' '}
										</Box>
									</ListItem>
									<ListItem disablePadding sx={{ display: 'inline-block' }}>
										<Box
											sx={{
												width: 'calc(24px + (26 - 24) * ((100vw - 320px) / (1920 - 320)))',
												height: 'calc(24px + (26 - 24) * ((100vw - 320px) / (1920 - 320)))',
												borderRadius: '100%',
												position: 'relative',
												backgroundColor: 'rgba(15,143,172,0.1)'
											}}
										>
											{' '}
										</Box>
									</ListItem>
								</List>
							</Box>
							<Box>
								<MyHeadingFour>
									<Typography
										component="span"
										sx={{
											height: '50%',
											display: 'block',
											left: 0,
											right: 0,
											zIndex: -1,
											bottom: '0px',
											position: 'absolute',
											backgroundColor: 'rgba(15,143,172,0.1)'
										}}
									>
										{' '}
									</Typography>
									Quantity
								</MyHeadingFour>
								<ButtonGroup
									size="small"
									sx={{
										display: 'block'
									}}
								>
									<Button
										disabled={counter === 1}
										onClick={() => {
											setCounter(counter - 1);
										}}
									>
										-
									</Button>
									<Button
										disabled
										sx={{
											color: '#0f8fac'
										}}
									>
										{counter}
									</Button>
									<Button
										onClick={() => {
											setCounter(counter + 1);
										}}
									>
										+
									</Button>
								</ButtonGroup>
							</Box>
						</Box>
						<Box sx={{ marginBottom: '15px' }}>
							<MyHeadingFour>
								<Typography
									component="span"
									sx={{
										height: '50%',
										display: 'block',
										left: 0,
										right: 0,
										zIndex: -1,
										bottom: '0px',
										position: 'absolute',
										backgroundColor: 'rgba(15,143,172,0.1)'
									}}
								>
									{' '}
								</Typography>
								Size
							</MyHeadingFour>
							<ButtonGroup
								size="small"
								sx={{
									display: 'flex',
									gap: '10px'
								}}
							>
								{state.size.map(item => (
									<MyButtonSize className="active" key={item}>
										{item}
									</MyButtonSize>
								))}
							</ButtonGroup>
						</Box>
						<Box
							sx={{
								display: 'flex',
								gap: '15px'
							}}
						>
							<MyButtonCustom onClick={() => handleAddToCart(state, counter)}>Add to cart</MyButtonCustom>
							<MyButtonOutlined onClick={() => handleAddWishList({ userId: user._id, productId: state._id })}>
								Add to wish list{' '}
							</MyButtonOutlined>
						</Box>
					</Grid>
					<TabProduct />
				</Grid>
				<Box>
					<MyHeadingFour sx={{ textTransform: 'uppercase' }}>
						<Typography
							component="span"
							sx={{
								height: '50%',
								display: 'block',
								left: 0,
								right: 0,
								zIndex: -1,
								bottom: '0px',
								position: 'absolute',
								backgroundColor: 'rgba(15,143,172,0.1)'
							}}
						>
							{' '}
						</Typography>
						You may also Like
					</MyHeadingFour>
					<Grid container spacing={2}>
						{productsWithCategory.map(item => (
							<Grid item xs={6} sm={6} md={4} lg={3} key={item._id}>
								<ProductCard product={item} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default withLayout(ProductDetail);
