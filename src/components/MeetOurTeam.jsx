import { Container, Grid } from '@mui/material';
import HeadingText from './HeadingText';
import Team from './Team';

const MeetOurTeam = () => {
	const headingText = {
		title: 'Meet Our Team',
		desc: 'Our team is the best for it is work each one has different skill, All are give there best in work'
	};
	return (
		<Container
			sx={{
				paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
				paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<HeadingText heading={headingText} />
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} lg={3}>
					<Team />
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<Team />
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<Team />
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<Team />
				</Grid>
			</Grid>
		</Container>
	);
};

export default MeetOurTeam;
