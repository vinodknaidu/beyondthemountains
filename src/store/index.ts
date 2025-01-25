import {
  useDispatch as uDispatch,
  useSelector as uSelector,
  useStore as uStore,
} from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';
export { store as default } from './store';

export const useDispatch = uDispatch.withTypes<AppDispatch>();
export const useSelector = uSelector.withTypes<RootState>();
export const useStore = uStore.withTypes<AppStore>();
