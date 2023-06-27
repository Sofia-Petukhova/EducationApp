import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../store'
import { FetchAccountResponse, FetchAccountParams, AccountState } from './AccountSliceTypes'

export const createAuthSelectors = {
  isLoadingAuth({ account }: RootState) {
    return account.isLoading
  },
}

// eslint-disable-next-line max-len
export const fetchAccount = createAsyncThunk<FetchAccountResponse, FetchAccountParams, { rejectValue: string }>(
  'account/fetchAccount',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://45.9.40.139:8000/users/auth',
        {
          email: params.data.email,
          password: params.data.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        },
      )
      localStorage.setItem('accessToken', `${response.data.access}`)
      localStorage.setItem('refreshToken', `${response.data.refresh}`)
      params.successCallback?.()
      return { data: response.data }
    } catch (error) {
      return rejectWithValue(error as string)
    }
  },
)

const initialState: AccountState = {
  account: null,
  isLoading: false,
  error: null,
}

const AccountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAccount.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.account = payload.data.user
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Unknown error'
      })
  },
})

export default AccountSlice.reducer
