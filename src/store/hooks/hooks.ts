import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../rootReducer';
import { IAppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
