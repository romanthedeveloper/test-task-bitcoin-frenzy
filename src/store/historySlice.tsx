import {createSlice} from "@reduxjs/toolkit";

interface IHistoryItem {
    id: number;
    date: string;
    text: string;
}

export const historyReducer = createSlice({
    name: 'history',
    initialState: {
        sessionHistory: [] as object[],
        bitcoinPrice: 10000 as number
    },
    reducers: {
        addHistory: (state, data) => {
            let dateNow = new Date()
            let item: IHistoryItem = {
                id: dateNow.getTime(),
                date: `${dateNow.getDate().toString()}
                /${(dateNow.getMonth() + 1).toString()}
                /${dateNow.getFullYear().toString()} 
                ${dateNow.getHours().toString()}
                :${dateNow.getMinutes().toString()}`,
                text: data.payload
            }
            state.sessionHistory = [item, ...state.sessionHistory]
        },
        increaseBitcoin: (state) => {
            state.bitcoinPrice += 1000;
        },
        decreaseBitcoin: (state) => {
            state.bitcoinPrice -= 1000;
        }
    }
});
export const {addHistory, increaseBitcoin, decreaseBitcoin} = historyReducer.actions;
export default historyReducer.reducer;