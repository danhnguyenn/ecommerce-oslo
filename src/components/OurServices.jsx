import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Container, Grid } from '@mui/material';
import HeadingText from './HeadingText';
import ServicesItem from './ServicesItem';

const OurServices = () => {
	const headingText = {
		title: 'Our Service',
		desc: 'We provide different type of service for purchased product on our site'
	};

	const services = [
		{
			id: 1,
			title: 'We Provide Free Shipping',
			icon: (
				<LocalShippingIcon
					sx={{
						height: 'calc(24px + (30 - 24) * ((100vw - 320px) / (1920 - 320)))',
						width: 'calc(28px + (36 - 28) * ((100vw - 320px) / (1920 - 320)))',
						color: '#0f8fac',
						margin: '0 auto'
					}}
				/>
			),
			desc: 'Our Record to delivered product Whiting 4 to 5 days to door'
		},
		{
			id: 2,
			title: 'We Provide 10 days Replacement guarantee',
			icon: (
				<InboxIcon
					sx={{
						height: 'calc(24px + (30 - 24) * ((100vw - 320px) / (1920 - 320)))',
						width: 'calc(28px + (36 - 28) * ((100vw - 320px) / (1920 - 320)))',
						color: '#0f8fac',
						margin: '0 auto'
					}}
				/>
			),
			desc: 'In guarantee we does not Included physical damage or changing with old product '
		},
		{
			id: 3,
			title: 'We provided hight security payment method',
			icon: (
				<AttachMoneyIcon
					sx={{
						height: 'calc(24px + (30 - 24) * ((100vw - 320px) / (1920 - 320)))',
						width: 'calc(28px + (36 - 28) * ((100vw - 320px) / (1920 - 320)))',
						color: '#0f8fac',
						margin: '0 auto'
					}}
				/>
			),
			desc: 'We provide use high level security payment method,no one breach the fire wall '
		},
		{
			id: 4,
			title: 'We Provide Free Shipping',
			icon: (
				<AutoAwesomeIcon
					sx={{
						height: 'calc(24px + (30 - 24) * ((100vw - 320px) / (1920 - 320)))',
						width: 'calc(28px + (36 - 28) * ((100vw - 320px) / (1920 - 320)))',
						color: '#0f8fac',
						margin: '0 auto'
					}}
				/>
			),
			desc: 'Our Record to delivered product Whiting 4 to 5 days to door'
		}
	];
	return (
		<Box
			sx={{
				backgroundColor: '#fafafa',
				paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
				paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<HeadingText heading={headingText} />
			<Container>
				<Grid container spacing={2}>
					{services.map(item => (
						<ServicesItem key={item.id} service={item} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default OurServices;
