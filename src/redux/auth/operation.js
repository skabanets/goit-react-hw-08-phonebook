import { createAsyncThunk } from '@reduxjs/toolkit';
import { phonebookApi } from '../../axiosConfig/phonebookApi';

//sergey.kc.1997@gmail.com
export const registerThunk = createAsyncThunk('register', async (credentials, thunkApi) => {
  try {
    const { data } = await phonebookApi.post('/users/signup', credentials);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('login', async (credentials, thunkAPI) => {
  try {
    const { data } = await phonebookApi.post('/users/login', credentials);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
