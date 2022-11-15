import InputField from '$components/InputFields/InputField';
import Route from '$constants/Route';
import useAuth from '$hooks/useAuth';
import { yupResolver } from '@hookform/resolvers/yup';
import EastIcon from '@mui/icons-material/East';
import { Backdrop, Box, Button, CardMedia, CircularProgress, Container, Grid, styled, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const MyTextLink = styled(Link)(({ theme }) => ({
	marginTop: '5px',
	textAlign: 'right',
	color: '#767676',
	fontSize: '14px',
	textDecoration: 'none',
	display: 'block'
}));

const MyButtonCustom = styled(Button)(({ theme }) => ({
	width: '100%',
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '23px',
	gap: '10px',
	borderRadius: '50rem',
	marginTop: 'calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320)))',
	'&:hover': {
		backgroundColor: theme.palette.secondary.light
	}
}));

const MyButtonAuth = styled(Button)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: '10px 20px',
	borderRadius: '100px',
	width: '100%',
	gap: ' 13px',
	justifyContent: 'center',
	color: '#767676',
	fontSize: '14px',
	backgroundColor: '#fafafa',
	boxShadow: '0 0 8px #eee',
	marginTop: '20px',
	textTransform: 'none',
	fontWeight: 'normal'
}));
const schema = yup
	.object({
		email: yup.string().email('Please enter a valid email').required('Please enter your email'),
		password: yup.string().min(6).max(32).required('Please enter your password')
	})
	.required();

const LoginPage = () => {
	const { handleLogin, isLoading } = useAuth();

	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		resolver: yupResolver(schema)
	});

	const onSubmit = data => {
		handleLogin(data);
		reset();
	};

	return (
		<Grid
			container
			sx={{
				flexDirection: {
					xs: 'column-reverse',
					sm: 'column-reverse',
					md: 'row',
					lg: 'row'
				}
			}}
		>
			<Grid item xs={12} md={5}>
				<Container>
					<Box
						sx={{
							padding: '20px calc(20px + (200 - 20) * ((100vw - 991px) / (1920 - 991)))',
							width: '100%',
							height: '100%',
							margin: '0 auto'
						}}
					>
						<Typography
							variant="h5"
							sx={{
								textAlign: 'left',
								fontWeight: '600',
								fontSize: 'calc(12px + (30 - 12) * ((100vw - 320px) / (1920 - 320)))',
								lineHeight: 'calc(17px + (43 - 17) * ((100vw - 320px) / (1920 - 320)))',
								position: 'relative',
								textTransform: 'uppercase',
								cursor: 'pointer',
								zIndex: 2,
								':hover': {
									'& span': {
										height: '100%'
									}
								}
							}}
						>
							Login
							<Typography
								component="span"
								sx={{
									height: 'calc(10px + (25 - 10) * ((100vw - 320px) / (1920 - 320)))',
									display: 'block',
									left: 0,
									right: 0,
									zIndex: '-1',
									bottom: '0px',
									position: 'absolute',
									backgroundColor: 'rgba(15,143,172,0.1)',
									width: '20%'
								}}
							>
								{null}
							</Typography>
						</Typography>
						<Typography
							variant="subtitle1"
							sx={{
								marginTop: '5px',
								marginBottom: '25px',
								color: ' #767676',
								fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							How do i get access order,wishlist and recomendation?
						</Typography>
						<Box component="form" onSubmit={handleSubmit(onSubmit)}>
							<InputField control={control} label="Email" name="email" type="email" />
							<InputField control={control} label="Password" name="password" type="password" />
							<MyTextLink to="">Forgot password</MyTextLink>
							<MyButtonCustom type="submit">
								Sign in <EastIcon />
							</MyButtonCustom>
							<MyTextLink to={Route.HomePage}>
								<MyButtonCustom
									sx={{
										backgroundColor: '#fff',
										border: '1px solid #0f8fac',
										color: '#0f8fac',
										marginTop: '1rem',
										'&:hover': {
											backgroundColor: '#0f8fac',
											color: '#fff'
										}
									}}
								>
									Home <EastIcon />
								</MyButtonCustom>
							</MyTextLink>
						</Box>
						<Typography
							component="span"
							sx={{
								display: 'block',
								marginTop: '20px',
								textAlign: ' center'
							}}
						>
							If you are new,{' '}
							<MyTextLink
								to={Route.RegisterPage}
								sx={{
									display: 'inline-block',
									color: '#0f8fac',
									fontWeight: 600,
									'&:hover': {
										textDecoration: 'underline'
									}
								}}
							>
								Create Now
							</MyTextLink>
						</Typography>
						<Typography
							component="div"
							sx={{
								width: '100%',
								position: 'relative',
								marginTop: '30px',
								marginBottom: '30px',
								textAlign: 'center',
								'&:after': {
									content: '""',
									height: '1px',
									backgroundColor: '#ddd',
									width: '100%',
									position: 'absolute',
									inset: 0,
									zIndex: 1,
									top: '50%',
									transform: ' translateY(-50%)'
								}
							}}
						>
							<Typography
								component="span"
								sx={{
									padding: '0 6px',
									backgroundColor: '#fff',
									color: '#767676',
									position: 'relative',
									zIndex: 2
								}}
							>
								Or
							</Typography>
						</Typography>
						<MyButtonAuth>
							<CardMedia
								component="img"
								image="https://themes.pixelstrap.com/oslo/assets/icons/png/google.png"
								alt="Background Login"
								sx={{
									width: '18px',
									height: '18px'
								}}
							/>
							Sign in
						</MyButtonAuth>
						<MyButtonAuth>
							<CardMedia
								component="img"
								image="https://themes.pixelstrap.com/oslo/assets/icons/png/fb.png"
								alt="Background Login"
								sx={{
									width: '18px',
									height: '18px'
								}}
							/>
							Sign in
						</MyButtonAuth>
						<Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isLoading}>
							<CircularProgress color="inherit" />
						</Backdrop>
					</Box>
				</Container>
			</Grid>
			<Grid item xs={12} md={7}>
				<CardMedia
					component="img"
					image="https://themes.pixelstrap.com/oslo/assets/images/inner-page/banner.jpg"
					alt="Background Login"
					sx={{
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						height: { xs: '50vh', lg: '100vh' }
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
