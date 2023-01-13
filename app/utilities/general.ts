import {RootState} from './../store/index';
import Axios, {AxiosResponse} from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setData, setLoader} from '../store/slices';
import {API_URL} from './constants';
import {User} from '../types';
import {useCallback, useEffect} from 'react';

export const useGetDefaultData = (
  endPoint: string,
): [User[], typeof setData] => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.root.data) as User[];

  const setDataAsync = useCallback(async () => {
    try {
      dispatch(setLoader(true));
      const response = await get<User[]>(endPoint);
      if (response?.data?.length > 0) {
        dispatch(setData(response.data));
      } else {
        dispatch(setData([]));
      }
      dispatch(setLoader(false));
    } catch (error) {
      dispatch(setLoader(false));
      console.error('setDataAsync(): ', error);
    }
  }, [dispatch, endPoint]);

  useEffect(() => {
    setDataAsync();
  }, [setDataAsync]);

  return [data, setData];
};

export const get = async <T>(endpoint: string): Promise<AxiosResponse<T>> => {
  return Axios.get<T>(`${API_URL}${endpoint}`);
};
