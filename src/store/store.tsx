import {configureStore} from '@reduxjs/toolkit'
import userСurrencyReducer from './userСurrencySlice';
import historyReducer from './historySlice'

export const store = configureStore({
    reducer: {
        userСurrency: userСurrencyReducer,
        history: historyReducer
    },
})
export type RootState = ReturnType<typeof store.getState>

