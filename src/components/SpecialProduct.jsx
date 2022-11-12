import { Container, Grid } from '@mui/material';
import CardOverplay from './CardOverplay';
import HeadingText from './HeadingText';

const SpecialProduct = () => {
	const headingText = {
		title: 'Special Products',
		desc: 'Structured chic panels power party flattering ultimate trim back pencil silhouette perfect look.'
	};

	return (
		<Container
			sx={{
				paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<HeadingText heading={headingText} />
			<Grid container spacing={1}>
				<Grid item xs={12} md={4} xl={5}>
					<Grid item xs={12} sx={{ marginBottom: 2 }}>
						<CardOverplay
							imageUrl="https://themes.pixelstrap.com/oslo/assets/images/fashion/category/1.jpg"
							name="Best Brand"
							title="man-dressed-shirt-lies"
						/>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<CardOverplay
								imageUrl="https://themes.pixelstrap.com/oslo/assets/images/fashion/category/2.jpg"
								name="All Collection"
								title="Accessories"
							/>
						</Grid>
						<Grid item xs={6}>
							<CardOverplay
								imageUrl="https://themes.pixelstrap.com/oslo/assets/images/fashion/category/3.jpg"
								name="Top Brand"
								title="Woman Tops"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={5} xl={5}>
					<CardOverplay
						imageUrl="https://themes.pixelstrap.com/oslo/assets/images/fashion/category/4.jpg"
						name="Going Out Collection"
						title="GOING ON COLLECTION"
					/>
				</Grid>
				<Grid item xs={12} md={3} xl={2}>
					<Grid container spacing={2}>
						<Grid item xs={6} lg={12}>
							<CardOverplay
								imageUrl="https://themes.pixelstrap.com/oslo/assets/images/fashion/category/5.jpg"
								name="Best Collection"
								title="Woman Bag"
							/>
						</Grid>
						<Grid item xs={6} lg={12}>
							<CardOverplay
								imageUrl="https://themes.pixelstrap.com/oslo/assets/images/fashion/category/6.jpg"
								name="New Style"
								title="Casual Collection"
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default SpecialProduct;
