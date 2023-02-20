const getValue = (key: string): string => {
	return localStorage.getItem(key);
};

export default getValue;
