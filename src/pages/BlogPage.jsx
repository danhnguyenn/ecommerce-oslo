import MyBreadcrumbs from '$components/MyBreadcrumbs';
import PopularPostMini from '$components/PopularPostMini';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, CardMedia, Container, Grid, List, ListItem, styled, TextField, Typography } from '@mui/material';
import BlogItem from './BlogItem';

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
		color: '#fff'
	}
}));

const BlogPage = () => {
	const breadcrumb = {
		title: 'Blog List',
		currentLink: Route.BlogPage,
		prevLink: Route.HomePage
	};
	const categoryList = [
		{
			id: 1,
			title: 'Fashion',
			count: 32
		},
		{
			id: 2,
			title: 'Trends',
			count: 32
		},
		{
			id: 3,
			title: 'Designer',
			count: 5
		},
		{
			id: 4,
			title: 'Swimwear',
			count: 5
		},
		{
			id: 5,
			title: 'Handbags',
			count: 15
		}
	];

	const blogList = [
		{
			id: 1,
			title: 'New Brand was introduce',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar3.jpg'
		},
		{
			id: 2,
			title: 'New Brand was introduce',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar4.jpg'
		},
		{
			id: 3,
			title: 'New Brand was introduce',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar5.jpg'
		},
		{
			id: 4,
			title: 'New Brand was introduce',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar6.jpg'
		}
	];

	const news = [
		{
			id: 1,
			date: '20 August 2022',
			title: 'Twice Profit Than Before You Ever Got In Business.',
			desc: 'Stretch lining hemline above knee burgundy satin finish concealed zip small buttons rayon. Wardrobe stylish fitted long sleeves pleats texture fabric mini neckline cobalt blue. A-line short sleeves above the knee red elastance peplum detail wool-mix soft pink lining.',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/blog/list/1.jpg',
			avatar: 'https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar.jpg',
			name: 'by John wike on'
		},
		{
			id: 2,
			date: '20 August 2022',
			title: 'My journey to become success women in fashion industries',
			desc: 'Monochrome textures casual daily polo neck knitted floral effortless short sleeve. Wardrobe stylish fitted long sleeves pleats texture fabric mini neckline cobalt blue.Structured chic panels power party flattering ultimate trim back pencil silhouette perfect look.',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/blog/list/2.jpg',
			avatar: 'https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar2.jpg',
			name: 'by John wike on'
		},
		{
			id: 3,
			date: '10 August 2022',
			title: 'Best seller signature waist cut pockets cotton-mix tailoring.',
			desc: 'A-line short sleeves above the knee red elastance peplum detail wool-mix soft pink lining. A-line short sleeves above the knee red elastance peplum detail wool-mix soft pinklining.',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/blog/list/3.jpg',
			avatar: 'https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar3.jpg',
			name: 'by John wike on'
		},
		{
			id: 4,
			date: '10 August 2022',
			title: 'Rising singer of the year 2022 in your town most precious voice of all singers',
			desc: 'Even Michelangelo got paid for doing the Sistine Chapel. To those artists who say they are doing it for the love of art, I say: Get real. That is the key of this collection,being yourself. Don not be into trends. Don not make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/blog/list/4.jpg',
			avatar: 'https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar4.jpg',
			name: 'by John wike on'
		},
		{
			id: 5,
			date: '10 July 2022',
			title: 'Women are more sure of themselves today. they don not have to emulate the way men dress.',
			desc: 'For me, the summer will be pure gray - mother-of-pearl gray, very pale gray. To me, this is the big statement for summer. Then we have light blue, light turquoise, lots of pink.',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/blog/list/5.jpg',
			avatar: 'https://themes.pixelstrap.com/oslo/assets/images/avatar/avatar5.jpg',
			name: 'by John wike on'
		}
	];

	return (
		<>
			<MyBreadcrumbs breadcrumb={breadcrumb} />
			<Box
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Container>
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
											{categoryList.map(item => (
												<MyListItem
													key={item.id}
													disablePadding
													sx={{
														display: 'flex',
														justifyContent: 'space-between',
														padding:
															'calc(6px + (8 - 6) * ((100vw - 320px) / (1920 - 320))) calc(12px + (15 - 12) * ((100vw - 320px) / (1920 - 320)))',
														backgroundColor: '#fafafa',
														borderRadius: '8px'
													}}
												>
													<Typography
														component="span"
														sx={{
															display: 'flex',
															alignItems: 'center',
															gap: 'calc(7px + (10 - 7) * ((100vw - 320px) / (1920 - 320)))'
														}}
													>
														<ArrowRightAltIcon
															sx={{
																width: '16px',
																height: '16px',
																stroke: '#767676'
															}}
														/>
														{item.title}
													</Typography>
													<Typography
														component="span"
														sx={{
															color: '#0f8fac',
															fonSize: '14px',
															fontWeight: 600
														}}
													>
														{item.count}
													</Typography>
												</MyListItem>
											))}
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
											Popular Post
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
											{blogList.map(item => (
												<PopularPostMini key={item.id} blog={item} />
											))}
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
						<Grid item xs={12} sm={12} md={8} lg={8}>
							{news.map(item => (
								<BlogItem key={item.id} item={item} />
							))}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default withLayout(BlogPage);
