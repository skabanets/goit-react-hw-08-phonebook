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
  isRefresh: false,
  isError: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(logoutThunk.fulfilled, state => {
        return initialState;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
        state.isError = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending, logoutThunk.pending),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled), (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.rejected, loginThunk.rejected, logoutThunk.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
        }
      );
  },
  selectors: {
    selectUser: state => state.user,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsLoading: state => state.isLoading,
    selectIsRefresh: state => state.isRefresh,
    selectIsError: state => state.isError,
  },
});

export const authReducer = slice.reducer;
export const { selectUser, selectIsLoggedIn, selectIsLoading, selectIsRefresh, selectIsError } =
  slice.selectors;
