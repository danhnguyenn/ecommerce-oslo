import CloseIcon from '@mui/icons-material/Close';
import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store, { persistor } from './store';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const theme = createTheme({
	palette: {
		primary: {
			light: '#0f8fac',
			main: '#262834',
			dark: '#002884'
		},
		secondary: {
			light: '#ffa422',
			main: '#262834',
			dark: '#002884'
		}
	}
});

// eslint-disable-next-line react/prop-types
const SnackbarCloseButton = ({ snackbarKey }) => {
	const { closeSnackbar } = useSnackbar();

	return (
		<IconButton onClick={() => closeSnackbar(snackbarKey)}>
			<CloseIcon
				sx={{
					fontWeight: '500',
					color: '#fff',
					width: '16px',
					height: '16px'
				}}
			/>
		</IconButton>
	);
};

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<SnackbarProvider
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				action={snackbarKey => <SnackbarCloseButton snackbarKey={snackbarKey} />}
			>
				<BrowserRouter>
					<StoreProvider store={store}>
						<PersistGate persistor={persistor}>
							<App />
						</PersistGate>
					</StoreProvider>
				</BrowserRouter>
			</SnackbarProvider>
		</ThemeProvider>
	</React.StrictMode>
);
