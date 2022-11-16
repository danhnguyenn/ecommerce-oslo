import EastIcon from '@mui/icons-material/East';
import { Box, Button, Grid, styled, TextField, Typography } from '@mui/material';

// const schema = yup
// 	.object({
// 		fullName: yup.string().required('Please enter your fullname'),
// 		address: yup.string().required('Please enter your address'),
// 		apartment: yup.string().required('Please enter your apartment'),
// 		city: yup.string().required('Please enter your city'),
// 		zip: yup.string().required('Please enter your zip'),
// 		country: yup.string().required('Please enter your apartment'),
// 		phone: yup.number().required('Please enter your phone').min(10)
// 	})
// 	.required();

const MyButtonClose = styled(Button)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: '10px 20px',
	gap: ' 13px',
	justifyContent: 'center',
	color: '#767676',
	fontSize: '14px',
	backgroundColor: '#fafafa',
	marginTop: '10px',
	textTransform: 'none',
	fontWeight: 'normal',
	border: 'solid #0f8fac 1px'
}));

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

const MyTextField = styled(TextField)(({ theme }) => ({
	fontWeight: 300,
	fontSize: '14px',
	lineHeight: '20px',
	color: '#fff',
	outline: 'none',
	letterSpacing: '0.5px',
	backgroundColor: '#fff',
	borderRadius: '100px',
	'& fieldset': {
		borderRadius: '100px'
	},
	marginTop: '24px'
}));

const UserTab = () => {
	// const { control, handleSubmit, reset } = useForm({
	// 	defaultValues: {
	// 		fullName: '',
	// 		address: '',
	// 		apartment: '',
	// 		city: '',
	// 		zip: '',
	// 		country: '',
	// 		phone: 0
	// 	},
	// 	resolver: yupResolver(schema)
	// });

	// const onSubmit = data => {
	// 	reset();
	// };

	return (
		<>
			<Box
				sx={{
					marginBottom: 'calc(25px + (30 - 25) * ((100vw - 320px) / (1920 - 320)))',
					gap: '15px'
				}}
			>
				<Typography
					variant="h3"
					sx={{
						fontSize: 'calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)))',
						color: '#262834',
						fontWeight: 500,
						lineHeight: '22px',
						marginTop: '-2px'
					}}
				>
					Basics Information
				</Typography>
			</Box>
			<Box component="form">
				<Grid container spacing={1}>
					<Grid item xs={12} md={6} lg={6}>
						<MyTextField label="Full Name" name="fullName" fullWidth size="small" />
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<MyTextField label="Email" name="email" type="email" fullWidth size="small" />
					</Grid>
					<Grid item xs={12} md={6} lg={4}>
						<MyTextField label="Mobile" name="phone" type="number" fullWidth size="small" />
					</Grid>
					<Grid item xs={12} md={6} lg={4}>
						<MyTextField label="Gender" name="gender" fullWidth size="small" />
					</Grid>
					<Grid item xs={12} md={6} lg={4}>
						<MyTextField label="Location" name="location" fullWidth size="small" />
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<MyTextField type="file" name="location" fullWidth size="small" />
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<MyTextField label="Address" name="address" fullWidth size="small" />
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<MyTextField label="Alternate Mobile" name="amobile" fullWidth size="small" />
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<MyTextField label="Nick name" name="nickname" fullWidth size="small" />
					</Grid>
				</Grid>
				<Box
					sx={{
						display: 'flex',
						gap: '10px',
						justifyContent: 'flex-end',
						marginTop: '30px'
					}}
				>
					<MyButtonClose>Close</MyButtonClose>
					<MyButtonCustom>
						Save Changes
						<EastIcon />
					</MyButtonCustom>
				</Box>
			</Box>
		</>
	);
};

export default UserTab;
