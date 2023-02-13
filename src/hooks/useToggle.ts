import { useState, useCallback } from 'react';

export type useToggleReturnType = {
	open: boolean;
	toggle: () => void;
};
export type TUseToggle = (initialState?: boolean) => useToggleReturnType;

export const useToggle: TUseToggle = () => {
	const [open, setOpen] = useState<boolean>(false);
	const toggle = useCallback(() => setOpen((prevState) => !prevState), []);

	return { open, toggle };
};
