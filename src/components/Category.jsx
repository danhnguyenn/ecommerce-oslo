import useFilter from '$hooks/useFilter';
import { Box, CardMedia, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import '../assets/css/custom.css';

const MyBox = styled(Box)(({ theme }) => ({
	padding: '20px',
	// boxShadow: '0px 0px 5px rgb(0 0 0 / 10%)',
	position: 'relative',
	overflow: 'hidden',
	backgroundColor: '#fff',
	border: 'solid #f2f2f2 1px',
	':hover': {
		backgroundColor: theme.palette.primary.light,
		cursor: 'pointer',
		'& img': {
			filter: 'invert(1) brightness(2)'
		},
		'& span': {
			borderColor: '#fff',
			color: '#fff'
		}
	},
	'&.active': {
		backgroundColor: theme.palette.primary.light,
		cursor: 'pointer',
		'& img': {
			filter: 'invert(1) brightness(2)'
		},
		'& span': {
			borderColor: '#fff',
			color: '#fff'
		}
	}
}));

const Category = ({ category, isActive, onClick }) => {
	const { handleFilterCategory } = useFilter();

	const handleFilter = category => {
		handleFilterCategory(category._id);
		onClick();
	};

	return (
		<MyBox onClick={() => handleFilter(category)} className={isActive === category._id ? 'active' : ''}>
			<CardMedia
				component="img"
				image={`${category.imageUrl}`}
				alt="SVG"
				sx={{
					width: 'calc(36px + (50 - 36) * ((100vw - 320px) / (1920 - 320)))',
					position: 'relative',
					margin: '15px auto',
					maxHeight: '49.5px',
					'&:after': {
						position: 'absolute',
						content: `""`,
						top: 0,
						right: '-10px',
						borderRadius: '100%',
						opacity: 0.1,
						zIndex: 1,
						backgroundColor: '#0f8fac'
					}
				}}
			/>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<Typography
					component="span"
					sx={{
						padding: '6px calc(5px + (34 - 5) * ((100vw - 320px) / (1920 - 320)))',
						fontWeight: 'normal',
						fontSize: '14px',
						lineHeight: '20px',
						border: '1px solid #1f1f1f',
						textAlign: 'center'
					}}
				>
					{category.name}
				</Typography>
			</Box>
		</MyBox>
	);
};

export default Category;

Category.propTypes = {
	category: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};
