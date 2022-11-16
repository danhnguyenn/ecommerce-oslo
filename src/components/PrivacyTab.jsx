import EastIcon from '@mui/icons-material/East';
import { Box, Button, styled, Switch, Typography } from '@mui/material';

const MyHeadingThree = styled(Typography)(({ theme }) => ({
	fontSize: 'calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)))',
	color: '#262834',
	fontWeight: 500,
	lineHeight: '22px',
	marginTop: '-2px',
	marginBottom: 'calc(25px + (30 - 25) * ((100vw - 320px) / (1920 - 320)))'
}));

const MyHeadingSix = styled(Typography)(({ theme }) => ({
	fontSize: 'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))',
	color: '#262834',
	lineHeight: '20px'
}));

const MyParagraph = styled(Typography)(({ theme }) => ({
	fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
	color: ' #767676',
	lineHeight: '20px',
	marginBottom: 0,
	marginTop: 'calc(3px + (6 - 3) * ((100vw - 320px) / (1920 - 320)))'
}));

const MyButtonCustom = styled(Button)(({ theme }) => ({
	padding: '10px 20px',
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '23px',
	gap: '10px',
	marginBottom: '6px',
	marginTop: '25px',
	textTransform: 'inherit',
	'&:hover': {
		backgroundColor: theme.palette.secondary.light
	}
}));

const PrivacyTab = () => {
	return (
		<>
			<Box
				sx={{
					marginBottom: 'calc(25px + (30 - 25) * ((100vw - 320px) / (1920 - 320)))',
					gap: '15px'
				}}
			>
				<MyHeadingThree variant="h3">Privacy</MyHeadingThree>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<Box>
						<MyHeadingSix variant="h6">Allows others to see my profile</MyHeadingSix>
						<MyParagraph variant="body1">all peoples will be able to see my profile.</MyParagraph>
					</Box>
					<Switch defaultChecked />
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: '16px'
					}}
				>
					<Box>
						<MyHeadingSix variant="h6">Who has save this profile only that people see my profile</MyHeadingSix>
						<MyParagraph variant="body1">all peoples will not be able to see my profile.</MyParagraph>
					</Box>
					<Switch />
				</Box>
				<MyButtonCustom>
					Save Changes
					<EastIcon />
				</MyButtonCustom>
			</Box>
			<Box
				sx={{
					marginBottom: 'calc(25px + (30 - 25) * ((100vw - 320px) / (1920 - 320)))',
					gap: '15px'
				}}
			>
				<MyHeadingThree variant="h3">Account settings</MyHeadingThree>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<Box>
						<MyHeadingSix variant="h6">Deleting Your Account Will Permanently</MyHeadingSix>
						<MyParagraph variant="body1">
							Once your account is deleted, you will be logged out and will be unable to log in back.
						</MyParagraph>
					</Box>
					<Switch defaultChecked />
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: '16px'
					}}
				>
					<Box>
						<MyHeadingSix variant="h6">Deleting Your Account Will Temporary</MyHeadingSix>
						<MyParagraph variant="body1">
							Once your account is deleted, you will be logged out and you will be create new account.
						</MyParagraph>
					</Box>
					<Switch />
				</Box>
				<MyButtonCustom>
					Save Changes
					<EastIcon />
				</MyButtonCustom>
			</Box>
		</>
	);
};

export default PrivacyTab;
