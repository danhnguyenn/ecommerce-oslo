import useFilter from '$hooks/useFilter';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ListItem, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const MyListItem = styled(ListItem)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	padding:
		'calc(6px + (8 - 6) * ((100vw - 320px) / (1920 - 320))) calc(12px + (15 - 12) * ((100vw - 320px) / (1920 - 320)))',
	backgroundColor: '#fafafa',
	borderRadius: '8px',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: theme.palette.primary.light,
		color: '#fff',
		'& span': {
			color: '#fff'
		},
		'& svg': {
			color: '#fff'
		}
	},
	'&.active': {
		backgroundColor: theme.palette.primary.light,
		'& span': {
			color: '#fff'
		},
		'& svg': {
			color: '#fff'
		}
	}
}));

const MyItem = ({ item, active, onToggle }) => {
	const { handleFilterCategory } = useFilter();

	const handleToggleActive = item => {
		handleFilterCategory(item._id);
		onToggle();
	};
	return (
		<MyListItem
			onClick={() => handleToggleActive(item)}
			disablePadding
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				padding:
					'calc(6px + (8 - 6) * ((100vw - 320px) / (1920 - 320))) calc(12px + (15 - 12) * ((100vw - 320px) / (1920 - 320)))',
				backgroundColor: '#fafafa',
				borderRadius: '8px'
			}}
			className={active === item._id ? 'active' : ''}
		>
			<Typography
				component="span"
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 'calc(7px + (10 - 7) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<ArrowRightAltIcon
					sx={{
						width: '16px',
						height: '16px',
						stroke: '#767676'
					}}
				/>
				{item.name}
			</Typography>
			<Typography
				component="span"
				sx={{
					color: '#0f8fac',
					fonSize: '14px',
					fontWeight: 600
				}}
			>
				{' '}
			</Typography>
		</MyListItem>
	);
};

MyItem.propTypes = {
	item: PropTypes.object.isRequired,
	active: PropTypes.string.isRequired,
	onToggle: PropTypes.func.isRequired
};

export default MyItem;
