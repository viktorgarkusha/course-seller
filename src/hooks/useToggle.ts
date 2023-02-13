import { useState, useCallback } from 'react';

export const useToggle = () => {
	const [open, setOpen] = useState<boolean>(false);
	const toggle = () =>
		useCallback(() => setOpen((prevState) => !prevState), []);
	return [open, toggle];
};
