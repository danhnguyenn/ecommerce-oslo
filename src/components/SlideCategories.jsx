import { Container } from '@mui/material';
import Categories from './Categories';

const SlideCategories = () => {
	return (
		<Container
			maxWidth="xl"
			sx={{ marginBottom: 'calc(20px + (45 - 20) * ((100vw - 320px) / (1920 - 320)))', padding: { lg: '0' } }}
		>
			<Categories />
		</Container>
	);
};

export default SlideCategories;
