import { createTheme, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
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

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<SnackbarProvider
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
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
