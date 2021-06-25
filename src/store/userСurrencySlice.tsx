import {createSlice} from "@reduxjs/toolkit";

export const userСurrencyReducer = createSlice({
    name: 'count',
    initialState: {
        dollars: 200 as number,
        bitcoin: 0 as number
    },
    reducers: {
        incrementDeposit: (state) => {
            state.dollars += 100;
        },
        decrementDeposit: (state) => {
            state.dollars -= 100;
        },
        buyBitcoin: (state, data) => {
            state.dollars -= data.payload;
            state.bitcoin += 1;
        },
        sellBitcoin: (state, data) => {
            state.dollars += data.payload;
            state.bitcoin -= 1;
        }
    }
});
export const {incrementDeposit, buyBitcoin, sellBitcoin, decrementDeposit} = userСurrencyReducer.actions;
export default userСurrencyReducer.reducer;