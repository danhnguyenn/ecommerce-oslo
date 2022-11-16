import useBrand from '$hooks/useBrand';
import useCategory from '$hooks/useCategory';
import useFilter from '$hooks/useFilter';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import {
	Box,
	Button,
	CardMedia,
	Checkbox,
	Container,
	Drawer,
	FormControl,
	FormControlLabel,
	Grid,
	List,
	ListItem,
	RadioGroup,
	styled,
	TextField,
	Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterByPrice from './Filters/FilterByPrice';
import MyItem from './MyItem';
import PopularCardMini from './PopularCardMini';
import ProductList from './ProductList';
import TypographySkeleton from './TypographySkeleton';

const MyButtonSearch = styled(Button)(({ theme }) => ({
	color: theme.palette.primary.main,
	position: 'absolute',
	right: 0,
	top: 0,
	bottom: 0,
	'&:hover': {
		backgroundColor: '#fff'
	}
}));

const MyHeading = styled(Typography)(({ theme }) => ({
	fontSize: 'calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: 'calc(20px + (22 - 20) * ((100vw - 320px) / (1920 - 320)))',
	position: 'relative',
	cursor: 'pointer',
	zIndex: 2,
	display: 'inline-block',
	marginTop: '-2px',
	fontWeight: '500'
}));

const MyLink = styled(Link)(({ theme }) => ({
	color: ' #767676',
	fontSize: '15px',
	fontWeight: 500,
	display: 'flex',
	justifyContent: 'space-between',
	textDecoration: 'none',
	width: '100%'
}));

const MyHeadingFour = styled(Typography)(({ theme }) => ({
	fontWeight: '500',
	fontSize: 'calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: 'calc(20px + (22 - 20) * ((100vw - 320px) / (1920 - 320)))',
	position: 'relative',
	cursor: 'pointer',
	zIndex: 2,
	display: 'inline-block',
	marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))'
}));

const MyParagraph = styled(Typography)(({ theme }) => ({
	fontSize: 'calc(15px + (18 - 15) * ((100vw - 992px) / (1920 - 992)))',
	color: '#767676',
	fontWeight: 400,
	lineHeight: 'calc(20px + (25 - 20) * ((100vw - 992px) / (1920 - 992)))',
	marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))'
}));

const MyButtonCustom = styled(Button)(({ theme }) => ({
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '20px',
	gap: '10px',
	borderRadius: 0,
	padding: '9px calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
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

const MyListItem = styled(ListItem)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	padding:
		'calc(6px + (8 - 6) * ((100vw - 320px) / (1920 - 320))) calc(12px + (15 - 12) * ((100vw - 320px) / (1920 - 320)))',
	backgroundColor: '#fafafa',
	borderRadius: '8px',
	'&:hover': {
		backgroundColor: theme.palette.primary.light,
		color: '#fff',
		'& a': {
			color: '#fff'
		},
		'& span': {
			color: '#fff'
		},
		'& svg': {
			color: '#fff'
		}
	},
	'&.active': {
		backgroundColor: theme.palette.primary.light,
		color: '#fff',
		'& a': {
			color: '#fff'
		}
	}
}));

const ShopList = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const toggleDrawer = () => {
		setOpenDrawer(preState => ({ openDrawer: !preState.openDrawer }));
	};
	const [active, setActive] = useState('');
	const [checkedBrands, setCheckedBrands] = useState([]);
	const { categories, fetchCategoriesAll, isLoading } = useCategory();
	const { handleFilterCategory, handleFilterBrand, handleFilterSearch, search } = useFilter();

	const { fetchBrandAll, isLoadingBrand, brands } = useBrand();

	const handleCheckedFilterBrand = e => {
		const { checked, value } = e.target;
		let checkedList = [...checkedBrands];
		if (checked) {
			checkedList = [...checkedBrands, value];
		} else {
			checkedList.splice(checkedBrands.indexOf(value), 1);
		}
		setCheckedBrands(checkedList);
		handleFilterBrand(checkedList);
	};

	useEffect(() => {
		fetchBrandAll();
	}, []);

	useEffect(() => {
		fetchCategoriesAll();
	}, []);

	const handleToggle = category => {
		setActive(category._id);
	};

	return (
		<Container>
			<MyButtonCustom
				onClick={toggleDrawer}
				sx={{
					display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' },
					width: { xs: 'auto', sm: 'auto', md: '130px', lg: '130px' },
					textTransform: {
						xs: 'inherit',
						sm: 'inherit',
						md: 'uppercase',
						lg: 'uppercase'
					},
					fontSize: {
						xs: '14px',
						sm: '14px'
					},
					gap: '5px',
					padding: '9px calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))',
					lineHeight: '20px'
				}}
			>
				Filter <TrendingFlatIcon />
			</MyButtonCustom>
			<Drawer
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				PaperProps={{
					sx: { width: '100%' }
				}}
			>
				<Button
					onClick={() => setOpenDrawer(false)}
					sx={{
						display: 'flex',
						justifyContent: 'flex-end'
					}}
				>
					<CloseIcon />
				</Button>
				<Container>
					<Box
						component="form"
						sx={{
							position: 'relative',
							marginBottom: 'calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						<TextField
							value={search}
							onChange={e => handleFilterSearch(e.target.value)}
							fullWidth
							placeholder="Search here"
							sx={{
								fontSize: 'calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)))',
								position: 'relative',
								'& fieldset': {
									border: '1px solid rgba(221,221,221,0.5)',
									borderRadius: '100px !important'
								},
								'&:hover fieldset': {
									borderColor: 'none'
								},
								'& .MuiOutlinedInput-root': {
									'& > fieldset': { borderColor: 'none' }
								}
							}}
						/>
						<MyButtonSearch>
							<SearchIcon sx={{ fill: '#0f8fac' }} />
						</MyButtonSearch>
					</Box>
					<Box
						sx={{
							border: '1px solid rgba(221,221,221,0.5)',
							borderRadius: '10px',
							padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						<Box
							variant="h4"
							sx={{
								marginBottom: ' calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							<MyHeading variant="h4">Filter</MyHeading>
						</Box>
						<FilterByPrice />
						{/* <Box sx={{ marginTop: '30px' }}>
							<Typography
								variant="h5"
								sx={{
									fontSize: '16px',
									color: '#767676',
									fontWeight: '500',
									marginBottom: '15px'
								}}
							>
								Color
							</Typography>
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
						</Box> */}
						<Box sx={{ marginTop: '30px' }}>
							<Typography
								variant="h5"
								sx={{
									fontSize: '16px',
									color: '#767676',
									fontWeight: '500',
									marginBottom: '15px'
								}}
							>
								Brand
							</Typography>
							<FormControl>
								<RadioGroup defaultValue="" name="radio-buttons-group">
									{isLoadingBrand ? (
										<TypographySkeleton count={brands.length} />
									) : (
										brands.map(brand => (
											<FormControlLabel
												key={brand._id}
												value={brand.label}
												control={<Checkbox />}
												label={brand.label}
												onChange={handleCheckedFilterBrand}
											/>
										))
									)}
								</RadioGroup>
							</FormControl>
						</Box>
					</Box>
					<Box
						sx={{
							marginTop: '1.5rem',
							borderRadius: '10px'
						}}
					>
						<Box
							sx={{
								border: '1px solid rgba(221,221,221,0.5)',
								borderRdius: '10px',
								padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							<Box>
								<MyHeadingFour variant="h4">
									Categories
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
								</MyHeadingFour>
								<List
									sx={{
										display: 'flex',
										flexDirection: 'column',
										gap: '16px'
									}}
								>
									{isLoading ? (
										<TypographySkeleton count={categories.length} />
									) : (
										categories.map(item => (
											<MyItem key={item._id} active={active} onToggle={() => handleToggle(item)} item={item} />
										))
									)}
								</List>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							marginTop: '1.5rem',
							borderRadius: '10px'
						}}
					>
						<Box
							sx={{
								border: '1px solid rgba(221,221,221,0.5)',
								borderRdius: '10px',
								padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							<Box>
								<MyHeadingFour variant="h4">
									Most Popular
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
								</MyHeadingFour>
								<Box>
									<PopularCardMini />
									<PopularCardMini />
									<PopularCardMini />
								</Box>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							marginTop: '1.5rem',
							borderRadius: '10px'
						}}
					>
						<Box
							sx={{
								border: '1px solid rgba(221,221,221,0.5)',
								borderRdius: '10px',
								padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							<Box sx={{ position: 'relative' }}>
								<MyHeadingFour variant="h4">
									Offers
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
								</MyHeadingFour>
								<Box>
									<CardMedia
										component="img"
										image="https://themes.pixelstrap.com/oslo/assets/images/fashion/banner/banner3.jpg"
										alt="Image"
										sx={{ height: '250px' }}
									/>
								</Box>
								<Box
									sx={{
										padding: '17px',
										position: 'absolute',
										zIndex: 2,
										top: '50%',
										left: '50%',
										transform: 'translate(-50%,-50%)',
										'&:after': {
											content: '""',
											position: 'absolute',
											mixBlendMode: 'normal',
											opacity: 0.8,
											inset: 0,
											boxShadow: '0px 4px 50px rgb(0 0 0 / 20%)',
											backdropFilter: 'blur(20px)',
											backgroundColor: ' #fff',
											width: '100%',
											height: '100%',
											zIndex: -1
										}
									}}
								>
									<Box
										sx={{
											textAlign: 'center'
										}}
									>
										<Typography
											component="span"
											sx={{
												fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
												color: '#767676',
												fontWeight: 500,
												display: 'block',
												marginTop: ' -3px'
											}}
										>
											Summer Sale
										</Typography>
										<Typography
											variant="h5"
											sx={{
												lineHeight: 'calc(35px + (67 - 35) * ((100vw - 320px) / (1920 - 320)))',
												fontSize: 'calc(25px + (70 - 25) * ((100vw - 320px) / (1920 - 320)))',
												margin: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320))) 0',
												color: '#0F8FA3',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center'
											}}
										>
											70
											<Typography
												component="span"
												sx={{
													display: 'flex',
													alignItems: 'center',
													flexDirection: 'column'
												}}
											>
												<Typography
													component="span"
													sx={{
														fontSize: ' calc(20px + (40 - 17) * ((100vw - 320px) / (1920 - 320)))',
														fontWeight: 'bold',
														lineHeight: '23px'
													}}
												>
													%
												</Typography>
												<Typography
													component="span"
													sx={{
														fontSize: 'calc(15px + (25 - 15) * ((100vw - 320px) / (1920 - 320)))',
														lineHeight: 'calc(20px + (37 - 20) * ((100vw - 320px) / (1920 - 320)))',
														fontWeight: 'bold'
													}}
												>
													Off
												</Typography>
											</Typography>
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Container>
			</Drawer>
			<Grid container spacing={3}>
				<Grid
					item
					md={4}
					sm={4}
					sx={{
						display: {
							xs: 'none',
							sm: 'none',
							md: 'block',
							lg: 'block'
						}
					}}
				>
					<Box
						component="form"
						sx={{
							position: 'relative',
							marginBottom: 'calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						<TextField
							value={search}
							onChange={e => handleFilterSearch(e.target.value)}
							fullWidth
							placeholder="Search here"
							sx={{
								fontSize: 'calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)))',
								position: 'relative',
								'& fieldset': {
									border: '1px solid rgba(221,221,221,0.5)',
									borderRadius: '100px !important'
								},
								'&:hover fieldset': {
									borderColor: 'none'
								},
								'& .MuiOutlinedInput-root': {
									'& > fieldset': { borderColor: 'none' }
								}
							}}
						/>
						<MyButtonSearch>
							<SearchIcon sx={{ fill: '#0f8fac' }} />
						</MyButtonSearch>
					</Box>
					<Box
						sx={{
							border: '1px solid rgba(221,221,221,0.5)',
							borderRadius: '10px',
							padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
						}}
					>
						<Box
							variant="h4"
							sx={{
								marginBottom: ' calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							<MyHeading variant="h4">Filter</MyHeading>
						</Box>
						<FilterByPrice />
						{/* <Box sx={{ marginTop: '30px' }}>
							<Typography
								variant="h5"
								sx={{
									fontSize: '16px',
									color: '#767676',
									fontWeight: '500',
									marginBottom: '15px'
								}}
							>
								Color
							</Typography>
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
						</Box> */}
						<Box sx={{ marginTop: '30px' }}>
							<Typography
								variant="h5"
								sx={{
									fontSize: '16px',
									color: '#767676',
									fontWeight: '500',
									marginBottom: '15px'
								}}
							>
								Brand
							</Typography>
							<FormControl>
								<RadioGroup defaultValue="" name="radio-buttons-group">
									{isLoadingBrand ? (
										<TypographySkeleton count={brands.length} />
									) : (
										brands.map(brand => (
											<FormControlLabel
												key={brand._id}
												value={brand.label}
												control={<Checkbox />}
												label={brand.label}
												onChange={handleCheckedFilterBrand}
											/>
										))
									)}
								</RadioGroup>
							</FormControl>
						</Box>
					</Box>
					<Box
						sx={{
							marginTop: '1.5rem',
							borderRadius: '10px'
						}}
					>
						<Box
							sx={{
								border: '1px solid rgba(221,221,221,0.5)',
								borderRdius: '10px',
								padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							<Box>
								<MyHeadingFour variant="h4">
									Categories
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
								</MyHeadingFour>
								<List
									sx={{
										display: 'flex',
										flexDirection: 'column',
										gap: '16px'
									}}
								>
									{isLoading ? (
										<TypographySkeleton count={categories.length} />
									) : (
										categories.map(item => (
											<MyItem key={item._id} active={active} onToggle={() => handleToggle(item)} item={item} />
										))
									)}
								</List>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							marginTop: '1.5rem',
							borderRadius: '10px'
						}}
					>
						<Box
							sx={{
								border: '1px solid rgba(221,221,221,0.5)',
								borderRdius: '10px',
								padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							<Box>
								<MyHeadingFour variant="h4">
									Most Popular
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
								</MyHeadingFour>
								<Box>
									<PopularCardMini />
									<PopularCardMini />
									<PopularCardMini />
								</Box>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							marginTop: '1.5rem',
							borderRadius: '10px'
						}}
					>
						<Box
							sx={{
								border: '1px solid rgba(221,221,221,0.5)',
								borderRdius: '10px',
								padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							<Box sx={{ position: 'relative' }}>
								<MyHeadingFour variant="h4">
									Offers
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
								</MyHeadingFour>
								<Box>
									<CardMedia
										component="img"
										image="https://themes.pixelstrap.com/oslo/assets/images/fashion/banner/banner3.jpg"
										alt="Image"
										sx={{ height: '250px' }}
									/>
								</Box>
								<Box
									sx={{
										padding: '17px',
										position: 'absolute',
										zIndex: 2,
										top: '50%',
										left: '50%',
										transform: 'translate(-50%,-50%)',
										'&:after': {
											content: '""',
											position: 'absolute',
											mixBlendMode: 'normal',
											opacity: 0.8,
											inset: 0,
											boxShadow: '0px 4px 50px rgb(0 0 0 / 20%)',
											backdropFilter: 'blur(20px)',
											backgroundColor: ' #fff',
											width: '100%',
											height: '100%',
											zIndex: -1
										}
									}}
								>
									<Box
										sx={{
											textAlign: 'center'
										}}
									>
										<Typography
											component="span"
											sx={{
												fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
												color: '#767676',
												fontWeight: 500,
												display: 'block',
												marginTop: ' -3px'
											}}
										>
											Summer Sale
										</Typography>
										<Typography
											variant="h5"
											sx={{
												lineHeight: 'calc(35px + (67 - 35) * ((100vw - 320px) / (1920 - 320)))',
												fontSize: 'calc(25px + (70 - 25) * ((100vw - 320px) / (1920 - 320)))',
												margin: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320))) 0',
												color: '#0F8FA3',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center'
											}}
										>
											70
											<Typography
												component="span"
												sx={{
													display: 'flex',
													alignItems: 'center',
													flexDirection: 'column'
												}}
											>
												<Typography
													component="span"
													sx={{
														fontSize: ' calc(20px + (40 - 17) * ((100vw - 320px) / (1920 - 320)))',
														fontWeight: 'bold',
														lineHeight: '23px'
													}}
												>
													%
												</Typography>
												<Typography
													component="span"
													sx={{
														fontSize: 'calc(15px + (25 - 15) * ((100vw - 320px) / (1920 - 320)))',
														lineHeight: 'calc(20px + (37 - 20) * ((100vw - 320px) / (1920 - 320)))',
														fontWeight: 'bold'
													}}
												>
													Off
												</Typography>
											</Typography>
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={8}
					sx={{
						display: 'flex',
						flexDirection: {
							xs: 'column-reverse',
							sm: 'column-reverse',
							md: 'column',
							lg: 'column'
						}
					}}
				>
					<Box
						sx={{
							position: { xs: 'relative' },
							border: '1px solid rgba(221,221,221,0.5)',
							borderRadius: '10px',
							marginTop: { xs: '10px', sm: '10px' },
							width: '100%',
							backgroundImage: 'url(https://themes.pixelstrap.com/oslo/assets/images/inner-page/banner2.jpg)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							display: 'block',
							padding: 'calc(15px + (40 - 15) * ((100vw - 320px) / (1920 - 320)))',
							zIndex: 2,
							'&:after': {
								display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' },
								content: '""',
								width: '100%',
								height: '100%',
								position: 'absolute',
								inset: 0,
								opacity: 0.7,
								zIndex: -1,
								backgroundColor: '#fff'
							}
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: '5px',
								maxWidth: {
									xs: '100%',
									sm: '100%',
									md: '50%',
									lg: '50%'
								}
							}}
						>
							<MyHeadingFour
								variant="h2"
								sx={{
									lineHeight: 'calc(33px + (40 - 33) * ((100vw - 992px) / (1920 - 992)))',
									fontSize: 'calc(30px + (40 - 30) * ((100vw - 992px) / (1920 - 992)))'
								}}
							>
								New Collection
								<Typography
									component="span"
									sx={{
										width: { xs: '50%', sm: '50%' },
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
							</MyHeadingFour>
							<MyHeadingFour
								variant="h2"
								sx={{
									lineHeight: 'calc(33px + (40 - 33) * ((100vw - 992px) / (1920 - 992)))',
									fontSize: 'calc(30px + (40 - 30) * ((100vw - 992px) / (1920 - 992)))'
								}}
							>
								Summer Sale
								<Typography
									component="span"
									sx={{
										width: { xs: '50%', sm: '50%' },
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
							</MyHeadingFour>
							<MyHeadingFour
								variant="h4"
								sx={{
									textTransform: 'uppercase',
									marginBottom: 0
								}}
							>
								Sale Offer
							</MyHeadingFour>
							<MyParagraph>
								A-line short sleeves above the knee red elastance peplum detail wool pink lining statement
								sophistication jersey tweed white.
							</MyParagraph>
							<Box>
								<MyButtonCustom>Shop now</MyButtonCustom>
							</Box>
						</Box>
					</Box>
					<ProductList />
				</Grid>
			</Grid>
		</Container>
	);
};

export default ShopList;
