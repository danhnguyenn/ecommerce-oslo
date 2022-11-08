import InputField from '$components/InputFields/InputField';
import PasswordField from '$components/InputFields/PasswordField';
import Route from '$constants/Route';
import useAuth from '$hooks/useAuth';
import { yupResolver } from '@hookform/resolvers/yup';
import EastIcon from '@mui/icons-material/East';
import { Backdrop, Box, Button, CardMedia, CircularProgress, Grid, styled, Typography } from '@mui/material';
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
		fullName: yup.string().required('Please enter your fullname'),
		email: yup.string().required('Please enter your email').email('Please enter a valid email'),
		password: yup.string().required('Please enter your password').min(6, 'Please enter at least 6 characters').max(32),
		password_retype: yup
			.string()
			.required('Please retype your password ')
			.oneOf([yup.ref('password')], 'Password does not match'),
		phone: yup.number().required('Please enter your phone').min(10)
	})
	.required();

const RegisterPage = () => {
	const { handleRegister, isLoading } = useAuth();

	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			password_retype: '',
			phone: 0
		},
		resolver: yupResolver(schema)
	});

	const onSubmit = data => {
		handleRegister(data);
		reset();
	};

	return (
		<Grid container>
			<Grid item xs={12} md={5}>
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
							fontWeight: '800',
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
						Create Account
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
								width: '57%'
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
							fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
							width: 'max-content'
						}}
					>
						How do i get access order,wishlist and recommendation ?
					</Typography>
					<Box component="form" onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={1}>
							<Grid item xs={12} md={12}>
								<InputField control={control} label="Full Name" name="fullName" />
							</Grid>
							<Grid item xs={12} md={12}>
								<InputField control={control} name="email" label="Email" />
							</Grid>
							<Grid item xs={12} md={12}>
								<PasswordField control={control} name="password" label="Password" />
							</Grid>
							<Grid item xs={12} md={12}>
								<PasswordField control={control} name="password_retype" label="Password Retype" />
							</Grid>
						</Grid>
						<InputField control={control} type="number" label="Phone" name="phone" />
						<MyButtonCustom type="submit">
							Sign Up <EastIcon />
						</MyButtonCustom>
						<Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isLoading}>
							<CircularProgress color="inherit" />
						</Backdrop>
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
						Already have an Account ?
						<MyTextLink
							to={Route.LoginPage}
							sx={{
								display: 'inline-block',
								color: '#0f8fac',
								fontWeight: 600,
								'&:hover': {
									textDecoration: 'underline'
								}
							}}
						>
							Sign in
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
						Sign up
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
						Sign up
					</MyButtonAuth>
				</Box>
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
						height: '100%'
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default RegisterPage;
