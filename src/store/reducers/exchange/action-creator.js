import {exchangeSlice} from "./ExchangeSlice";

export const ExchangeActionCreator = {

    setExchangeRates: (currency) => dispatch => {
        dispatch(exchangeSlice.actions.setExchangeRates(currency))
    },
}