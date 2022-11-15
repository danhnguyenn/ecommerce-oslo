import Route from '$constants/Route';
import useAuth from '$hooks/useAuth';
import useCart from '$hooks/useCart';
import useWishList from '$hooks/useWishList';
import { Logout } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import PortraitIcon from '@mui/icons-material/Portrait';
import SearchIcon from '@mui/icons-material/Search';
import {
	AppBar,
	Badge,
	Box,
	Button,
	Container,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Stack,
	styled,
	Toolbar,
	Tooltip,
	Typography
} from '@mui/material';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const MyNavLink = styled(NavLink)(({ theme }) => ({
	textDecoration: 'none',
	color: theme.palette.secondary.main,
	'&.active': {
		color: theme.palette.secondary.light
	}
}));

const MyNavLinkMobile = styled(NavLink)(({ theme }) => ({
	borderRadius: '5px',
	borderLeft: '#0f8fac solid 2px',
	textDecoration: 'none',
	color: theme.palette.secondary.main,
	'&.active': {
		color: theme.palette.secondary.light
	}
}));

const MyItemMenuMobile = styled(ListItem)(({ theme }) => ({
	borderTop: 0,
	fontSize: '15px',
	backgroundColor: '#fff',
	color: '#262834',
	borderRadius: '5px',
	border: '1px solid rgba(221,221,221,0.5)'
}));

const totalQuantityWishList = likeList => {
	if (!likeList) return;
	let amount = 0;
	for (let i = 0; i < likeList.length; i++) {
		amount += 1;
	}
	return amount;
};

const Header = () => {
	const { user, handleLogout } = useAuth();
	const { totalQuantityCart } = useCart();
	const { likeList } = useWishList();
	const [anchorEl, setAnchorEl] = useState(null);
	const [anchorElTwo, setAnchorElTwo] = useState(null);
	const openMenu = Boolean(anchorElTwo);
	const open = Boolean(anchorEl);
	const location = useLocation();

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenuClick = event => {
		setAnchorElTwo(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorElTwo(null);
	};

	const [openDrawer, setOpenDrawer] = useState(false);

	const toggleDrawer = () => {
		setOpenDrawer(preState => ({ openDrawer: !preState.openDrawer }));
	};

	return (
		<Stack>
			<Box
				sx={{
					background: ' linear-gradient(90deg, #262834 6.15%, #20222f 50%)',
					padding: '7px',
					display: {
						xs: 'none',
						sm: 'none',
						md: 'block',
						lg: 'block'
					}
				}}
			>
				<Container>
					<Marquee gradient={false} speed={50}>
						<Typography
							variant="subtitle1"
							sx={{
								width: '30%',
								color: '#fff',
								fontSize: '14px',
								fontWeight: 500,
								lineHeight: '20px',
								margin: '0 auto'
							}}
						>
							Summer sale for all swim suits - off 50%! Shop Now
						</Typography>
					</Marquee>
				</Container>
			</Box>
			<AppBar
				position="static"
				sx={{
					background: '#fff',
					boxShadow: 'none'
				}}
			>
				<Container maxWidth="xl">
					<Toolbar
						sx={{
							display: 'flex',
							justifyContent: {
								xs: 'space-between',
								md: 'space-between',
								sm: 'space-between',
								lg: 'space-evenly'
							},
							alignItems: 'center'
						}}
					>
						<MyNavLink to={Route.HomePage}>
							<Box>
								<img
									src={logo}
									alt="Logo"
									style={{
										width: '100px',
										height: 'auto'
									}}
								/>
							</Box>
						</MyNavLink>
						<List
							sx={{
								color: '#000',
								gap: '10px',
								textTransform: 'uppercase',
								display: {
									xs: 'none',
									sm: 'none',
									md: 'inline-flex',
									lg: 'inline-flex'
								}
							}}
						>
							<ListItem disablePadding>
								<MyNavLink to={Route.HomePage}>
									<ListItemButton>
										<ListItemText primary="Home" />
									</ListItemButton>
								</MyNavLink>
							</ListItem>
							<ListItem disablePadding>
								<MyNavLink to={Route.AboutPage}>
									<ListItemButton>
										<ListItemText primary="About" />
									</ListItemButton>
								</MyNavLink>
							</ListItem>
							<ListItem disablePadding>
								<MyNavLink to={Route.ProductPage}>
									<ListItemButton>
										<ListItemText primary="Product" />
									</ListItemButton>
								</MyNavLink>
							</ListItem>
							<ListItem disablePadding>
								<MyNavLink to={Route.BlogPage}>
									<ListItemButton>
										<ListItemText primary="Blog" />
									</ListItemButton>
								</MyNavLink>
							</ListItem>
							<ListItem disablePadding>
								<MyNavLink to={Route.ContactPage}>
									<ListItemButton>
										<ListItemText primary="Contact" />
									</ListItemButton>
								</MyNavLink>
							</ListItem>
						</List>
						<Box
							sx={{
								display: {
									xs: 'none',
									sm: 'none',
									md: 'flex',
									lg: 'flex'
								}
							}}
						>
							<Button
								id="basic-button"
								onClick={handleClick}
								sx={{
									fontSize: '14px',
									lineHeight: '20px',
									color: '#262834',
									fontWeight: 'normal',
									textTransform: 'none'
								}}
							>
								English {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
							</Button>
							<Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
								<MenuItem onClick={handleClose}>Vietnamese</MenuItem>
								<MenuItem onClick={handleClose}>Chinese</MenuItem>
								<MenuItem onClick={handleClose}>Arabic</MenuItem>
								<MenuItem onClick={handleClose}>Russian</MenuItem>
							</Menu>
							<Box
								sx={{
									display: 'flex',
									gap: '15px',
									color: '#262834',
									alignItems: 'center'
								}}
							>
								<MyNavLink to={Route.HomePage}>
									<IconButton sx={{ color: '#262834' }}>
										<SearchIcon />
									</IconButton>
								</MyNavLink>

								{user ? (
									<Tooltip title="Login">
										<IconButton
											id="basic-button"
											onClick={handleMenuClick}
											sx={{
												fontSize: '14px',
												lineHeight: '20px',
												color: '#262834',
												fontWeight: 'normal',
												textTransform: 'none'
											}}
										>
											<PersonIcon />
										</IconButton>
									</Tooltip>
								) : (
									<Link to={Route.LoginPage}>
										<IconButton
											id="basic-button"
											onClick={handleMenuClick}
											sx={{
												fontSize: '14px',
												lineHeight: '20px',
												color: '#262834',
												fontWeight: 'normal',
												textTransform: 'none'
											}}
										>
											<PersonIcon />
										</IconButton>
									</Link>
								)}

								<Menu
									anchorEl={anchorElTwo}
									open={openMenu}
									onClose={handleMenuClose}
									PaperProps={{
										elevation: 0,
										sx: {
											display: user ? 'block' : 'none',
											overflow: 'visible',
											filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
											mt: 1.5,
											'& .MuiAvatar-root': {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1
											},
											'&:before': {
												content: '""',
												display: 'block',
												position: 'absolute',
												top: 0,
												right: 14,
												width: 10,
												height: 10,
												bgcolor: 'background.paper',
												transform: 'translateY(-50%) rotate(45deg)',
												zIndex: 0
											}
										}
									}}
									transformOrigin={{ horizontal: 'right', vertical: 'top' }}
									anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
								>
									<MyNavLink to={Route.UserDashboardPage}>
										<MenuItem>
											<ListItemIcon>
												<PortraitIcon fontSize="small" />
											</ListItemIcon>
											User Dashboard
										</MenuItem>
									</MyNavLink>

									<MenuItem onClick={handleLogout}>
										<ListItemIcon>
											<Logout fontSize="small" />
										</ListItemIcon>
										Logout
									</MenuItem>
								</Menu>
								{user ? (
									<MyNavLink to={Route.MyLikeProductPage}>
										<Tooltip title="Wishlist">
											<IconButton>
												<Badge
													badgeContent={location.pathname === '/wishlist' ? 0 : totalQuantityWishList(likeList)}
													color="primary"
												>
													<FavoriteBorderIcon sx={{ color: '#262834' }} />
												</Badge>
											</IconButton>
										</Tooltip>
									</MyNavLink>
								) : (
									''
								)}

								<MyNavLink to={Route.CartPage}>
									<Tooltip title="Cart">
										<IconButton>
											<Badge badgeContent={location.pathname === '/cart' ? 0 : totalQuantityCart()} color="primary">
												<LocalMallIcon sx={{ color: '#262834' }} />
											</Badge>
										</IconButton>
									</Tooltip>
								</MyNavLink>
							</Box>
						</Box>
						<Box sx={{ display: 'flex' }}>
							<Button
								onClick={toggleDrawer}
								sx={{
									display: {
										xs: 'flex',
										sm: 'flex',
										md: 'none',
										lg: 'none'
									}
								}}
							>
								<MenuIcon />
							</Button>
							{user ? (
								<Tooltip title="Login">
									<IconButton
										id="basic-button"
										onClick={handleMenuClick}
										sx={{
											display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
											fontSize: '14px',
											lineHeight: '20px',
											color: '#262834',
											fontWeight: 'normal',
											textTransform: 'none'
										}}
									>
										<PersonIcon />
									</IconButton>
								</Tooltip>
							) : (
								<Link to={Route.LoginPage}>
									<IconButton
										id="basic-button"
										onClick={handleMenuClick}
										sx={{
											display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
											fontSize: '14px',
											lineHeight: '20px',
											color: '#262834',
											fontWeight: 'normal',
											textTransform: 'none'
										}}
									>
										<PersonIcon />
									</IconButton>
								</Link>
							)}
						</Box>
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
							<List
								sx={{
									color: '#000',
									display: 'flex',
									gap: '10px',
									textTransform: 'uppercase',
									flexDirection: 'column',
									padding: '1.25rem 1.5rem',
									overflowY: 'auto',
									height: '100%'
									// gap: 'calc(10px + (35 - 10) * ((100vw - 320px) / (1920 - 320)))'
								}}
							>
								<MyItemMenuMobile disablePadding>
									<MyNavLinkMobile to={Route.HomePage}>
										<ListItemButton>
											<ListItemText primary="Home" />
										</ListItemButton>
									</MyNavLinkMobile>
								</MyItemMenuMobile>
								<MyItemMenuMobile disablePadding>
									<MyNavLinkMobile to={Route.AboutPage}>
										<ListItemButton>
											<ListItemText primary="About" />
										</ListItemButton>
									</MyNavLinkMobile>
								</MyItemMenuMobile>
								<MyItemMenuMobile disablePadding>
									<MyNavLinkMobile to={Route.ProductPage}>
										<ListItemButton>
											<ListItemText primary="Product" />
										</ListItemButton>
									</MyNavLinkMobile>
								</MyItemMenuMobile>
								<MyItemMenuMobile disablePadding>
									<MyNavLinkMobile to={Route.ProductPage}>
										<ListItemButton>
											<ListItemText primary="Blog" />
										</ListItemButton>
									</MyNavLinkMobile>
								</MyItemMenuMobile>
								<MyItemMenuMobile disablePadding>
									<MyNavLinkMobile to={Route.ProductPage}>
										<ListItemButton>
											<ListItemText primary="Contact" />
										</ListItemButton>
									</MyNavLinkMobile>
								</MyItemMenuMobile>
								{user ? (
									<MyItemMenuMobile disablePadding>
										<MyNavLinkMobile to={Route.MyLikeProductPage}>
											<ListItemButton>
												<IconButton>
													<Badge
														badgeContent={location.pathname === '/wishlist' ? 0 : totalQuantityWishList()}
														color="primary"
													>
														<FavoriteBorderIcon sx={{ color: '#262834' }} />
													</Badge>
												</IconButton>
												<ListItemText primary="My Wishlist" />
											</ListItemButton>
										</MyNavLinkMobile>
									</MyItemMenuMobile>
								) : (
									''
								)}

								<MyItemMenuMobile disablePadding>
									<MyNavLinkMobile to={Route.CartPage}>
										<ListItemButton>
											<IconButton>
												<Badge badgeContent={location.pathname === '/cart' ? 0 : totalQuantityCart()} color="primary">
													<LocalMallIcon sx={{ color: '#262834' }} />
												</Badge>
											</IconButton>
											<ListItemText primary="Cart" />
										</ListItemButton>
									</MyNavLinkMobile>
								</MyItemMenuMobile>
							</List>
						</Drawer>
					</Toolbar>
				</Container>
			</AppBar>
		</Stack>
	);
};

export default Header;
