import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { GlobalState } from './interfaces'

// Define the initial state using that type
const initialState: GlobalState = {
  expanded: false,
  lastMessage: ''
}

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    setLastMessage: (state, action: PayloadAction<string>) => {
      state.lastMessage = action.payload
    },
    clearLastMessage: (state) => {
      state.lastMessage = initialState.lastMessage
    },
    setExpanded: (state, action: PayloadAction<boolean>) => {
      state.expanded = action.payload
    },
  },
})

export const { setLastMessage, clearLastMessage, setExpanded } = globalSlice.actions

export const selectExpanded = (state: RootState) => state.global.expanded
export const selectLastMessage = (state: RootState) => state.global.lastMessage

export default globalSlice.reducer