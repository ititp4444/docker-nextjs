import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '../types'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: User = {
    name: 'name',
    isSignedIn: false
}
export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async () => {
        try {
            const res = await fetch('https://dummyjson.com/products/1')
            const result = await res.json()
            return result.title
        } catch {
            return initialState.name
        }
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state: User, action: PayloadAction<string>) => {
            state.name = action.payload
            state.isSignedIn = true
        },
        logout: (state: User) => {
            state.name = ''
            state.isSignedIn = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            if (action.payload) {
                state.name = action.payload
                state.isSignedIn = true
            } else {
                state.isSignedIn = false
            }
        })
        builder.addCase(fetchUserData.pending, (state) => {
            state.isSignedIn = false
        })
        builder.addCase(fetchUserData.rejected, (state) => {
            state.isSignedIn = false
        })
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
