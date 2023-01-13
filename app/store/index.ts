import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AppSlice from './slices/appSlice';

const rootReducer = combineReducers({
  root: AppSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default store;
