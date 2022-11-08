import styled from '@emotion/styled';
import { Box, Breadcrumbs, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MyNavLink = styled(NavLink)(({ theme }) => ({
	textDecoration: 'none',
	color: theme.palette.primary.main,
	'&.active': {
		color: theme.palette.secondary.light
	}
}));

const MyBreadcrumbs = ({ breadcrumb }) => {
	return (
		<Box
			sx={{
				backgroundColor: '#fafafa',
				position: 'relative',
				height: '150px'
			}}
		>
			<CardMedia
				component="img"
				image="https://themes.pixelstrap.com/oslo/assets/images/inner-page/banner-p.jpg"
				alt="Paella dish"
				sx={{
					width: '100%',
					height: '100%'
				}}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%,-50%)',
					gap: 'calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)))'
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontSize: 'calc(24px + (30 - 24) * ((100vw - 320px) / (1920 - 320)))',
						color: ' #262834',
						marginTop: '-3px',
						fontWeight: 600,
						textAlign: 'center'
					}}
				>
					{breadcrumb.title}
				</Typography>
				<Breadcrumbs>
					<MyNavLink to={breadcrumb.prevLink}>Home</MyNavLink>
					{breadcrumb.shopLink ? (
						<MyNavLink to={breadcrumb.shopLink}>Shop</MyNavLink>
					) : (
						<MyNavLink to={breadcrumb.currentLink}>{breadcrumb.title}</MyNavLink>
					)}
					{breadcrumb.cartLink ? <MyNavLink to={breadcrumb.cartLink}>Cart</MyNavLink> : ''}
					{breadcrumb.shopLink ? <MyNavLink to={breadcrumb.currentLink}>{breadcrumb.title}</MyNavLink> : ''}
				</Breadcrumbs>
			</Box>
		</Box>
	);
};

export default MyBreadcrumbs;

MyBreadcrumbs.propTypes = {
	breadcrumb: PropTypes.object.isRequired
};
