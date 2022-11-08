import useFilter from '$hooks/useFilter';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const FilterByPrice = () => {
	const { handleFilterByPrice } = useFilter();
	const [values, setValues] = useState({
		salePrice_gte: 0,
		salePrice_lte: 0
	});
	const handleChange = e => {
		const { name, value } = e.target;
		setValues(prevValues => ({
			...prevValues,
			[name]: value
		}));
	};

	const handleSubmit = () => {
		handleFilterByPrice(values);
	};
	return (
		<Box component="form">
			<Box
				sx={{
					display: { xs: 'flex', sm: 'flex', md: 'block', lg: 'block' },
					alignItems: 'center',
					gap: '5px'
				}}
			>
				<Box
					sx={{
						display: 'inline-flex',
						alignItems: 'center',
						gap: { xs: '3px', sm: '3px', md: '10px', lg: '10px' }
					}}
				>
					<Typography component="span">
						Min{' '}
						<Typography component="strong" sx={{ color: '#007aff' }}>
							$
						</Typography>
					</Typography>
					<TextField
						type="number"
						name="salePrice_gte"
						inputProps={{
							style: {
								padding: 5,
								color: '#007aff'
							}
						}}
						sx={{
							width: '80px',
							textAlign: 'center',
							fontSize: '14px',
							lineHeight: '18px',
							'& fieldset': {
								border: ' 1px solid #ddd',
								borderRadius: '100px !important'
							}
						}}
						value={values.salePrice_gte}
						onChange={handleChange}
					/>
				</Box>
				<Typography
					component="span"
					sx={{
						fontSize: '19px'
					}}
				>
					{' '}
					-{' '}
				</Typography>
				<Box
					sx={{
						display: 'inline-flex',
						alignItems: 'center',
						gap: { xs: '3px', sm: '3px', md: '10px', lg: '10px' }
					}}
				>
					<Typography component="span">
						Max{' '}
						<Typography component="strong" sx={{ color: '#007aff' }}>
							$
						</Typography>
					</Typography>
					<TextField
						type="number"
						name="salePrice_lte"
						inputProps={{
							style: {
								padding: 5,
								color: '#007aff'
							}
						}}
						sx={{
							width: '80px',
							textAlign: 'center',
							fontSize: '14px',
							lineHeight: '18px',
							'& fieldset': {
								border: ' 1px solid #ddd',
								borderRadius: '100px !important'
							}
						}}
						value={values.salePrice_lte}
						onChange={handleChange}
					/>
				</Box>
			</Box>
			<Button
				type="button"
				variant="outlined"
				sx={{
					width: { xs: '100%', sm: '100%', md: 'auto', lg: 'auto' },
					display: 'block',
					marginTop: '10px'
				}}
				onClick={handleSubmit}
			>
				Apply
			</Button>
		</Box>
	);
};

export default FilterByPrice;
