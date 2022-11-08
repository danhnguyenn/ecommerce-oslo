import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import StarsIcon from '@mui/icons-material/Stars';
import { Box, Container, Grid, Typography } from '@mui/material';

const Benefit = () => {
	const benefitList = [
		{
			id: 1,
			title: 'Free Shipping',
			desc: 'From all orders over $200',
			icon: <FireTruckIcon sx={{ fontSize: '36px' }} />,
			isBorderRight: true
		},
		{
			id: 2,
			title: 'FREE RETURNS',
			desc: 'Return money within 30 days',
			icon: <CardGiftcardIcon sx={{ fontSize: '36px' }} />,
			isBorderRight: true
		},
		{
			id: 3,
			title: 'SECURE SHOPPING',
			desc: 'You are in safe hands',
			icon: <CurrencyExchangeIcon sx={{ fontSize: '36px' }} />,
			isBorderRight: true
		},
		{
			id: 4,
			title: 'OVER 10,000 STYLES',
			desc: 'We have everything you need',
			icon: <StarsIcon sx={{ fontSize: '36px' }} />,
			isBorderRight: false
		}
	];

	return (
		<Container
			sx={{
				paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
				paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<Grid container spacing={2}>
				{benefitList.map(item => (
					<Grid
						item
						xs={12}
						md={4}
						lg={3}
						key={item.id}
						sx={{
							position: 'relative',
							'&:after': {
								display: { xs: 'none', lg: 'block' },
								content: '""',
								position: 'absolute',
								width: '1px',
								height: 'calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)))',
								top: '50%',
								right: '10%',
								transform: 'translateY(-50%)',
								backgroundColor: '#c4c4c4'
							}
						}}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: '10px'
							}}
						>
							{item.icon}
							<Box>
								<Typography
									variant="h5"
									sx={{
										fontWeight: 500,
										fontSize: 'calc(13px + (18 - 13) * ((100vw - 320px) / (1920 - 320)))',
										lineHeight: 'calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)))',
										textTransform: 'uppercase',
										color: '#262834',
										marginTop: '-5px',
										overflow: 'hidden',
										whiteSpace: 'nowrap',
										maxWidth: 'max-content',
										textOverflow: 'ellipsis'
									}}
								>
									{item.title}
								</Typography>
								<Typography
									component="span"
									sx={{
										fontWeight: 'normal',
										fontSize: ' 14px',
										lineHeight: '20px',
										display: 'block',
										marginBottom: 'calc(0px + (-2 - 0) * ((100vw - 320px) / (1920 - 320)))',
										color: '#767676'
									}}
								>
									{item.desc}
								</Typography>
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Benefit;
