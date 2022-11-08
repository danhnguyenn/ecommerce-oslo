import { Box, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const MyHeadingTwo = styled(Typography)(({ theme }) => ({
	color: '#fff',
	backgroundColor: theme.palette.primary.light,
	fontWeight: 500,
	lineHeight: '23px',
	gap: '10px',
	borderRadius: 0,
	'&:after': {
		content: '""',
		position: 'absolute',
		width: '100%',
		height: '2.5px',
		backgroundColor: 'inherit',
		left: '50%',
		transform: 'translateX(-50%)',
		bottom: '-6px'
	},
	'&:hover': {
		backgroundColor: theme.palette.secondary.light
	}
}));

const HeadingText = ({ heading }) => {
	return (
		<Box
			sx={{
				textAlign: 'center',
				margin: '0 auto',
				maxWidth: '540px',
				marginTop: 'calc(-8px + (-13 + 8) * ((100vw - 320px) / (1920 - 320)))',
				marginBottom: 'calc(18px + (30 - 18) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<Typography
				variant="h2"
				sx={{
					fontWeight: 600,
					fontSize: 'calc(18px + (28 - 18) * ((100vw - 320px) / (1920 - 320)))',
					lineHeight: 'calc(32px + (45 - 32) * ((100vw - 320px) / (1920 - 320)))',
					color: '#1f1f1f',
					position: 'relative'
				}}
			>
				{heading.title}
			</Typography>
			<Typography
				variant="span"
				sx={{
					width: 'calc(110px + (160 - 110) * ((100vw - 320px) / (1920 - 320)))',
					height: '2px',
					backgroundColor: '#0f8fac',
					gap: '5px',
					display: 'flex',
					justifyContent: 'center',
					margin: '0 auto'
				}}
			>
				<Typography
					component="span"
					sx={{
						width: 'calc(8px + (9 - 8) * ((100vw - 320px) / (1920 - 320)))',
						height: 'calc(8px + (9 - 8) * ((100vw - 320px) / (1920 - 320)))',
						display: 'block',
						position: 'relative',
						backgroundColor: '#0f8fac',
						'&:after': {
							content: '""',
							width: 'inherit',
							height: 'inherit',
							position: 'absolute',
							backgroundColor: 'inherit',
							left: '-14px',
							top: '-3px'
						}
					}}
				>
					{null}
				</Typography>
				<Typography
					component="span"
					sx={{
						width: 'calc(8px + (9 - 8) * ((100vw - 320px) / (1920 - 320)))',
						height: 'calc(8px + (9 - 8) * ((100vw - 320px) / (1920 - 320)))',
						display: 'block',
						position: 'relative',
						backgroundColor: '#0f8fac',
						'&:after': {
							content: '""',
							width: 'inherit',
							height: 'inherit',
							position: 'absolute',
							backgroundColor: 'inherit',
							right: '-14px',
							top: '-3px'
						}
					}}
				>
					{null}
				</Typography>
			</Typography>
			<Typography
				sx={{
					fontWeight: 'normal',
					fontSize: 'calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))',
					color: '#767676',
					lineHeight: 'calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)))',
					marginTop: 'calc(8px + (15 - 8) * ((100vw - 320px) / (1920 - 320)))',
					marginBottom: '-2px'
				}}
			>
				{heading.desc}
			</Typography>
		</Box>
	);
};

export default HeadingText;

HeadingText.propTypes = {
	heading: PropTypes.object.isRequired
};
