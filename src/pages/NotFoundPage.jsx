import MyBreadcrumbs from '$components/MyBreadcrumbs';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';
import { Box, Button, CardMedia, Container, Grid, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MyButtonCustom = styled(Button)(({ theme }) => ({
	padding: '10px 20px',
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '23px',
	gap: '10px',
	marginTop: '10px',
	'&:hover': {
		backgroundColor: theme.palette.secondary.light
	}
}));
const NotFound = () => {
	const breadcrumb = {
		title: '404 Error',
		currentLink: Route.NotFoundPage,
		prevLink: Route.HomePage
	};
	return (
		<Box>
			<MyBreadcrumbs breadcrumb={breadcrumb} />
			<Container
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Grid container>
					<Grid
						item
						md={8}
						sx={{
							margin: '0 auto'
						}}
					>
						<Box sx={{ textAlign: 'center' }}>
							<CardMedia
								component="img"
								image="https://themes.pixelstrap.com/oslo/assets/images/inner-page/404.svg"
								sx={{
									width: '100%'
								}}
							/>
						</Box>
						<Box
							sx={{
								textAlign: 'center',
								padding: '0 calc(0px + (50 - 0) * ((100vw - 320px) / (1920 - 320)))',
								marginTop: 'calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							<Typography
								variant="h2"
								sx={{
									marginBottom: 'calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)));',
									color: '#262834;',
									fontSize: 'calc(22px + (35 - 22) * ((100vw - 320px) / (1920 - 320)));',
									marginTop: '-3px',
									fontWeight: 600,
									textTransform: 'capitalize'
								}}
							>
								page not found
							</Typography>
							<Typography
								variant="body1"
								sx={{
									lineHeight: 1.6,
									color: '#767676',
									fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
									marginBottom: '16px'
								}}
							>
								The page you are looking for doesn&apos;t exist or an other error occurred. Go back, or head over to
								choose a new direction.
							</Typography>
							<Link
								to={Route.HomePage}
								style={{
									color: '#0f8fac',
									textDecoration: 'none',
									'&:hover': {
										color: '#fff'
									}
								}}
							>
								<MyButtonCustom>Back Home page</MyButtonCustom>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default withLayout(NotFound);
