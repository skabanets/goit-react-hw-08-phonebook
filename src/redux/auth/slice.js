import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operation';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        return initialState;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
      })
      .addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled), (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      });
  },
  selectors: {
    selectUser: state => state.user,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsLoading: state => state.isLoading,
  },
});

export const authReducer = slice.reducer;
export const { selectUser, selectIsLoggedIn, selectIsLoading } = slice.selectors;
