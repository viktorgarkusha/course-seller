const getValue = (key: string): string => {
	return localStorage.getItem(key);
};

const putValue = (key: string, value: any): void => {
	return localStorage.setItem(key, value);
};

const removeValue = (key: string): void => {
	return localStorage.removeItem(key);
};

export { getValue, putValue, removeValue };
