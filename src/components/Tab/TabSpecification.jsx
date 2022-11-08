import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const TabSpecification = () => {
	function createData(name, desc) {
		return { name, desc };
	}

	const rows = [
		createData('Product Dimensions', '15 x 15 x 3 cm; 250 Grams'),
		createData('Date First Available', '5 April 2021'),
		createData('Manufacturer', 'Aditya Birla Fashion and Retail Limited'),
		createData('ASIN', 'B06Y28LCDN'),
		createData('Item model number', 'AMKP317G04244'),
		createData('Department', 'Men'),
		createData('Item Weight', '250 G'),
		createData('Item Dimensions LxWxH', '15 x 15 x 3 Centimeters'),
		createData('Net Quantity', '1 U'),
		createData('Included Components', '1-T-shirt'),
		createData('Generic Name', 'T-shirt')
	];
	return (
		<Box>
			<Typography
				variant="body1"
				sx={{
					fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320))) !important',
					color: '#767676'
				}}
			>
				The Model is wearing a white blouse from our stylist&apos;s collection, see the image for a mock-up of what the
				actual blouse would look like.it has text written on it in a black cursive language which looks great on a white
				color.
			</Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.desc}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default TabSpecification;
