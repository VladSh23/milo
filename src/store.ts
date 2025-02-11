import { configureStore } from '@reduxjs/toolkit'
import { chatsApi } from './services/chats/chats'
import { globalSlice } from './services/global/globalSlice'

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    [chatsApi.reducerPath]: chatsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

