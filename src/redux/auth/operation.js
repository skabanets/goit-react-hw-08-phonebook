import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, phonebookApi, setToken } from '../../axiosConfig/phonebookApi';

//sergey.kc.1997@gmail.com
export const registerThunk = createAsyncThunk('register', async (credentials, thunkApi) => {
  try {
    const { data } = await phonebookApi.post('/users/signup', credentials);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('login', async (credentials, thunkAPI) => {
  try {
    const { data } = await phonebookApi.post('/users/login', credentials);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await phonebookApi.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
