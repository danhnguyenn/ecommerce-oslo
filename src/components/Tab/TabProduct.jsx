import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, styled, Tab } from '@mui/material';
import { useState } from 'react';
import TabComment from './TabComment';
import TabDescription from './TabDescription';
import TabSpecification from './TabSpecification';

const MyTab = styled(Tab)(({ theme }) => ({
	color: '#767676',
	fontWeight: 600,
	fontSize: 'calc(15px + (16 - 15) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: ' 20px',
	gap: '8px',
	padding: '8px 20px',
	backgroundColor: '#fafafa',
	borderRadius: '5px',
	marginRight: '15px',
	textTransform: 'none',
	'&.Mui-selected': {
		borderColor: 'none',
		color: '#0f8fac !important',
		backgrounColor: '#0d6efd'
	}
}));

const TabProduct = () => {
	const [value, setValue] = useState('1');
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box
			sx={{
				width: '100%',
				typography: 'body1',
				marginTop: 'calc(28px + (40 - 28) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<TabContext value={value} sx={{}}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList
						onChange={handleChange}
						TabIndicatorProps={{
							style: {
								display: 'none'
							}
						}}
					>
						<MyTab label="Description" value="1" />
						<MyTab label="Specification" value="2" />
						<MyTab label="Review" value="3" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<TabDescription />
				</TabPanel>
				<TabPanel value="2">
					<TabSpecification />
				</TabPanel>
				<TabPanel value="3">
					<TabComment />
				</TabPanel>
			</TabContext>
		</Box>
	);
};

export default TabProduct;
