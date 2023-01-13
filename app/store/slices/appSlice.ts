import {InitialState} from './../../types/general';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: InitialState = {
  loader: false,
  data: null,
  filterQuery: '',
  sortOrder: 'asc',
};
export type AppSliceState = typeof initialState;

const AppSlice = createSlice({
  name: 'Root Application Slice',
  initialState: initialState,
  reducers: {
    sayHello(state: AppSliceState, action: PayloadAction<any>) {
      console.log('HELLO: ', state, action);
    },
    setData(state: AppSliceState, action: PayloadAction<Array<any>>) {
      state.data = action.payload;
    },
    setLoader(state: AppSliceState, action: PayloadAction<boolean>) {
      state.loader = action.payload;
    },
    setFilterQuery(state: AppSliceState, action: PayloadAction<string>) {
      state.filterQuery = action.payload;
    },
    setSortOrder(state: AppSliceState, action: PayloadAction<'asc' | 'desc'>) {
      state.sortOrder = action.payload;
    },
  },
});
export default AppSlice.reducer;
export const {sayHello, setData, setLoader, setFilterQuery, setSortOrder} =
  AppSlice.actions;
