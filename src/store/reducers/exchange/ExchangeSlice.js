import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    exchangeRates: {},
    currencyOptions: [
        {name: 'USD', value: 'USD'},
        {name: 'EUR', value: 'EUR'},
        {name: 'UAH', value: 'UAH'},
        {name: 'GBP', value: 'GBP'},
    ],


}

export const exchangeSlice = createSlice({
    name: 'exchange',
    initialState,
    reducers: {
        setExchangeRates(state, action) {
            const {key, value} = action.payload
            state.exchangeRates = {...state.exchangeRates, [key]: value}
        },

    }
})

export default exchangeSlice.reducer;