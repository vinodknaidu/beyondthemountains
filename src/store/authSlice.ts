import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  isAuthenticated: false,
  userPhNo: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, payload: PayloadAction<AuthState>) => {
      state.isAuthenticated = payload.payload.isAuthenticated;
    },
  },
});

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;

export interface AuthState {
  isAuthenticated: boolean;
  userPhNo: string;
}
