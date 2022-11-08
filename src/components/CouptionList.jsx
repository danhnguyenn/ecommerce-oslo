import { Container, Grid } from '@mui/material';
import Couption from './Couption';

const CouptionList = () => {
	const couptionList = [
		{
			id: 1,
			title: 'GET 20% OFF',
			desc: 'ON ORDERS OVER $20',
			background: '#f3c0d7'
		},
		{
			id: 2,
			title: 'GET 20% OFF',
			desc: 'ON ORDERS OVER $50*',
			background: '#f9ede1'
		},
		{
			id: 3,
			title: 'GET 47% OFF',
			desc: 'ON ORDERS OVER $99*',
			background: '#fcded6'
		},
		{
			id: 4,
			title: 'Code : CODE09',
			desc: 'Apply Code and get Discount',
			background: 'rgba(15,143,172,0.1)'
		}
	];
	return (
		<Container
			sx={{
				paddingTop: ' calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<Grid container spacing={2}>
				{couptionList.map(couption => (
					<Couption key={couption.id} couption={couption} />
				))}
			</Grid>
		</Container>
	);
};

export default CouptionList;
