import AuthStore from '$constants/AuthStorage';
import localStoragePlus from './localStoragePlus';

const storage = localStoragePlus.createStorage(AuthStore.Name);
const authStorage = {
	getToken: () => {
		return storage.getItem(AuthStore.Token);
	},
	getRefreshToken: () => {
		return storage.getItem(AuthStore.RefreshToken);
	},
	saveToken: (token, refreshToken) => {
		if (token || refreshToken) {
			if (token) {
				storage.setItem(AuthStore.Token, token, '15m');
			}

			if (refreshToken) {
				storage.setItem(AuthStore.RefreshToken, refreshToken, '1h');
			}
		}
	},
	destroyToken: () => {
		storage.removeItem(AuthStore.Token);
		storage.removeItem(AuthStore.RefreshToken);
	}
};

export default authStorage;
