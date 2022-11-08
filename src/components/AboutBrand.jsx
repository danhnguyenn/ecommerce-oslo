import { Box, Container, Grid, Typography } from '@mui/material';
import BrandCard from './BrandCard';

const AboutBrand = () => {
	const brandList = [
		{
			id: 1,
			title: 'Standard-fit sleeveless midi dress',
			desc: 'You have to stay true to your heritage; that&apos;s what your brand is about.',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/fashion/product/front/1.jpg',
			isReverse: true
		},
		{
			id: 2,
			title: 'Casual Indigo Blue Jeans Jacket',
			desc: 'Tops shift shape rich fabric relaxed fitting size true black gold zip virgin wool.',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/fashion/product/front/2.jpg',
			isReverse: false
		},
		{
			id: 3,
			title: 'Montes Loremous A Cosmopolite',
			desc: 'Statement sophistication jersey tweed midi flattering comfortable details yellow.',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/fashion/product/front/3.jpg',
			isReverse: true
		},
		{
			id: 4,
			title: 'Women’s long sleeve red Jacket',
			desc: 'Best seller signature waist cut pockets cotton-mix red tailoring elegant cashmere.',
			imageUrl: 'https://themes.pixelstrap.com/oslo/assets/images/fashion/product/front/4.jpg',
			isReverse: false
		}
	];
	return (
		<Container
			sx={{
				paddingTop: ' calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<Box
				sx={{
					maxWidth: '732px',
					margin: ' 0 auto',
					textAlign: 'center',
					paddingBottom: 'calc(22px + (46 - 22) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Typography
					variant="h2"
					sx={{
						fontWeight: '300',
						fontSize: 'calc(18px + (26 - 18) * ((100vw - 320px) / (1920 - 320)))',
						lineHeight: ' calc(28px + (42 - 28) * ((100vw - 320px) / (1920 - 320)))',
						color: '#1f1f1f'
					}}
				>
					<Typography variant="strong" sx={{ fontWeight: 600 }}>
						Fashion{' '}
					</Typography>
					is not necessarily about labels. It&apos;s not{' '}
					<Typography variant="strong" sx={{ fontWeight: 600 }}>
						About Brands.{' '}
					</Typography>{' '}
					&quot;It&apos;s about something else that comes from within you&quot;
				</Typography>
				<Typography
					variant="span"
					sx={{
						fontWeight: 'normal',
						fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
						lineHeight: 'calc(37px + (42 - 37) * ((100vw - 320px) / (1920 - 320)))',
						color: '#262834',
						position: 'relative',
						display: ' inline-block',
						marginBottom: '-10px',
						'&:after': {
							content: `""`,
							position: 'absolute',
							top: '50%',
							left: '-28px',
							transform: 'translateY(-50%)',
							width: '18px',
							height: '1px',
							backgroundColor: ' #1f1f1f'
						}
					}}
				>
					Ralph Lauren
				</Typography>
			</Box>
			<Grid container spacing={3}>
				{brandList.map(brand => (
					<BrandCard key={brand.id} brand={brand} />
				))}
			</Grid>
		</Container>
	);
};

export default AboutBrand;
