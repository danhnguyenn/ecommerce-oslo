import CommentBox from '$components/CommentBox';
import East from '@mui/icons-material/East';
import {
	Box,
	Button,
	Divider,
	Grid,
	LinearProgress,
	Paper,
	Rating,
	styled,
	TextField,
	Typography
} from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { useState } from 'react';

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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
	}
}));

const MyTextField = styled(TextField)(({ theme }) => ({
	'& fieldset': {
		width: '100%',
		borderRadius: '20px',
		border: '1px solid #ddd'
	}
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
const TabComment = () => {
	const [value, setValue] = useState(5);
	return (
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
				Customers Q & A
			</MyHeadingFour>
			<Grid container spacing={2}>
				<Grid
					item
					xs={12}
					sm={6}
					md={6}
					sx={{
						borderRight: '1px solid rgba(221,221,221,0.5)',
						padding: '0 15px'
					}}
				>
					<CommentBox />
					<Divider />
					<CommentBox />
					<Divider />
					<CommentBox />
					<Box
						sx={{
							marginTop: '20px',
							padding: 'calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)));',
							border: '1px solid rgba(221,221,221,0.5)',
							borderRadius: '10px'
						}}
					>
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
							Leave a Comment
						</MyHeadingFour>
						<Box component="form">
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6} md={6}>
									<MyTextField
										fullWidth
										label="Full Name"
										name="fullName"
										sx={{ marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))' }}
									/>
								</Grid>
								<Grid item xs={12} sm={6} md={6}>
									<MyTextField name="email" fullWidth label="Email Address" />
								</Grid>
								<Grid item xs={12} sm={12} md={12}>
									<MyTextField name="content" fullWidth label="Comments" multiline rows={5} maxRows={10} />
								</Grid>
							</Grid>
							<MyButtonCustom type="submit">
								Sign Up <East />
							</MyButtonCustom>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<Paper
						sx={{
							position: 'sticky',
							top: '100px',
							padding: '0 15px',
							boxShadow: 'none'
						}}
					>
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
							Customers Reviews
						</MyHeadingFour>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: '10px'
							}}
						>
							<Typography
								variant="h5"
								sx={{
									fontSize: 'calc(50px + (70 - 50) * ((100vw - 320px) / (1920 - 320)))',
									margin: 'calc(-13px + (-15 + 13) * ((100vw - 320px) / (1920 - 320))) 0',
									lineHeight: 'calc(66px + (84 - 66) * ((100vw - 320px) / (1920 - 320)))'
								}}
							>
								4.5
							</Typography>
							<Box>
								<Typography
									variant="h6"
									sx={{
										fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
										color: '#767676',
										fontWeight: 500,
										marginBottom: 'calc(6px + (8 - 6) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									Average Ratings
								</Typography>
								<Rating
									name="read-only"
									value={value}
									// onChange={(event, newValue) => {
									// 	setValue(newValue);
									// }}
									readOnly
								/>
							</Box>
						</Box>
						<Box
							sx={{
								marginTop: '20px'
							}}
						>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}
							>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									5
								</Typography>
								<BorderLinearProgress
									variant="determinate"
									value={80}
									sx={{
										width: '100%',
										height: '15px',
										marginBottom: '10px'
									}}
								/>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									80
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}
							>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									4
								</Typography>
								<BorderLinearProgress
									variant="determinate"
									value={62}
									sx={{
										width: '100%',
										height: '15px',
										marginBottom: '10px'
									}}
								/>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									62
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}
							>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									3
								</Typography>
								<BorderLinearProgress
									variant="determinate"
									value={70}
									sx={{
										width: '100%',
										height: '15px',
										marginBottom: '10px'
									}}
								/>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									70
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}
							>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									2
								</Typography>
								<BorderLinearProgress
									variant="determinate"
									value={80}
									sx={{
										width: '100%',
										height: '15px',
										marginBottom: '10px'
									}}
								/>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									25
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}
							>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									1
								</Typography>
								<BorderLinearProgress
									variant="determinate"
									value={20}
									sx={{
										width: '100%',
										height: '15px',
										marginBottom: '10px'
									}}
								/>
								<Typography
									variant="h5"
									sx={{
										fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))'
									}}
								>
									20
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default TabComment;
