import useFilter from '$hooks/useFilter';
import useNotify from '$hooks/useNotify';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const FilterByPrice = () => {
	const { error } = useNotify();
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

	console.log(values);

	const handleSubmit = e => {
		e.preventDefault();
		const salePriceGte = parseInt(values.salePrice_gte);
		const salePriceLte = parseInt(values.salePrice_lte);

		if (salePriceGte > salePriceLte) {
			error('Invalid price, please min price smaller than max price');
		} else {
			const formValues = {
				salePrice_gte: salePriceGte,
				salePrice_lte: salePriceLte
			};
			handleFilterByPrice(formValues);
		}
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
						onKeyDown={evt => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
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
						onKeyDown={evt => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
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
