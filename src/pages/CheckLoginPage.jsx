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

const CheckLoginPage = () => {
	const breadcrumb = {
		title: 'Error',
		currentLink: Route.ErrorLoginPage,
		prevLink: Route.HomePage
	};
	return (
		<Box>
			<MyBreadcrumbs breadcrumb={breadcrumb} />
			<Container
				sx={{
					paddingBottom: 'calc(25px + (100 - 25) * ((100vw - 320px) / (1920 - 320)))',
					paddingTop: 'calc(25px + (100 - 25) * ((100vw - 320px) / (1920 - 320)))'
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
						<Box
							sx={{
								textAlign: 'center',
								height: '300px'
							}}
						>
							<CardMedia
								component="img"
								image="https://themes.pixelstrap.com/oslo/assets/images/inner-page/404.svg"
								sx={{
									width: '100%',
									height: '100%',
									objectFit: 'contain'
								}}
							/>
						</Box>
						<Box
							sx={{
								textAlign: 'center',
								padding: '0 calc(0px + (50 - 0) * ((100vw - 320px) / (1920 - 320)))',
								marginTop: '10px'
							}}
						>
							<Typography
								variant="h2"
								sx={{
									marginBottom: '5px',
									color: '#262834;',
									fontSize: 'calc(22px + (35 - 22) * ((100vw - 320px) / (1920 - 320)));',
									fontWeight: 600,
									textTransform: 'capitalize'
								}}
							>
								Error
							</Typography>
							<Typography
								variant="body1"
								sx={{
									lineHeight: 1.6,
									color: '#767676',
									fontSize: '16px',
									marginBottom: '5px'
								}}
							>
								Please login to continue
							</Typography>
							<Link
								to={Route.LoginPage}
								style={{
									color: '#0f8fac',
									textDecoration: 'none',
									'&:hover': {
										color: '#fff'
									}
								}}
							>
								<MyButtonCustom>Login</MyButtonCustom>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default withLayout(CheckLoginPage);
