import withLayout from '$components/withLayout';
import { Box, Container } from '@mui/material';

const UserDashBoard = () => {
	return (
		<Box>
			<Container
				sx={{
					paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
					paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320))); '
				}}
			>
				dfdfd
			</Container>
		</Box>
	);
};

export default withLayout(UserDashBoard);
