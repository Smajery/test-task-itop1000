import React from 'react';
import {useSelector} from "react-redux";
import classes from './CurrencySelect.module.css'

const CurrencySelect = ({selectedCurrency, setSelectedCurrency}) => {
    const {currencyOptions} = useSelector(state => state.exchangeReducer)
    const defaultValue = 'Валюта'
    return (
        <select
            className={classes.select__currency}
            value={selectedCurrency}
            onChange={e => setSelectedCurrency(e.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {currencyOptions.map(option =>
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default CurrencySelect;