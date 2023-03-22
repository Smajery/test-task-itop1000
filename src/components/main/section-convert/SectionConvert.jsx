import React, {useEffect, useState} from 'react';
import classes from './SectionConvert.module.css'
import exchangeImg from '../../../static/exchange.svg'
import CurrencySelect from "../currency-select/CurrencySelect";
import {fetchExchangeResult} from "../../../http/exchangeApi";

const SectionConvert = () => {
    const [amountFrom, setAmountFrom] = useState('')
    const [amountTo, setAmountTo] = useState('')
    const [isAmountFrom, setIsAmountFrom] = useState(false)
    const [isAmountTo, setIsAmountTo] = useState(false)
    const [selectedFromCurrency, setSelectedFromCurrency] = useState('')
    const [selectedToCurrency, setSelectedToCurrency] = useState('')

    useEffect(() => {
        if (isAmountFrom && selectedFromCurrency && selectedToCurrency) {
            if (amountFrom <= 0) {
                setAmountTo('')
            } else {
                fetchExchangeResult(selectedFromCurrency, selectedToCurrency, amountFrom)
                    .then((data) => {
                        setAmountTo(data.result.toFixed(2));
                    })
                    .catch(() => alert('Щось пішло не так!'))
            }
        }

        if (isAmountTo && selectedFromCurrency && selectedToCurrency) {
            if (amountTo <= 0) {
                setAmountFrom('')
            } else {
                fetchExchangeResult(selectedToCurrency, selectedFromCurrency, amountTo)
                    .then((data) => {
                        setAmountFrom(data.result.toFixed(2));
                    })
                    .catch(() => alert('Щось пішло не так!'))
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amountFrom, amountTo, selectedFromCurrency, selectedToCurrency]);

    const handleChangeFromAmount = (e) => {
        if (isNaN(e.target.value)) {
            setAmountFrom('');
        } else {
            setAmountFrom(e.target.value);
        }
    }

    const handleChangeToAmount = (e) => {
        if (isNaN(e.target.value)) {
            setAmountTo('');
        } else {
            setAmountTo(e.target.value);
        }
    }

    const handleCurrentFrom = () => {
        setIsAmountTo(false)
        setIsAmountFrom(true)
    }

    const handleCurrentTo = () => {
        setIsAmountFrom(false)
        setIsAmountTo(true)

    }


    return (
        <div className={classes.sectionConvert}>
            <div className={classes.convertFormBox}>
                <div className={classes.convertBox}>
                    <input
                        className={classes.input__rate}
                        readOnly={
                            selectedFromCurrency === ''
                            && selectedToCurrency === ''
                        }
                        type='text'
                        value={amountFrom}
                        placeholder={
                            selectedFromCurrency === ''
                            && selectedToCurrency === ''
                                ?
                                'Виберіть валюту'
                                :
                                'Введіть число'
                        }
                        onChange={handleChangeFromAmount}
                        onClick={handleCurrentFrom}
                    />
                    <CurrencySelect
                        selectedCurrency={selectedFromCurrency}
                        setSelectedCurrency={setSelectedFromCurrency}
                    />
                </div>
                <div className={classes.convertImgBox}>
                    <img src={exchangeImg} alt='convert'/>
                </div>
                <div className={classes.convertBox}>
                    <input
                        className={classes.input__rate}
                        readOnly={
                            selectedFromCurrency === ''
                            && selectedToCurrency === ''
                        }
                        type='text'
                        value={amountTo}
                        placeholder={
                            selectedFromCurrency === ''
                            && selectedToCurrency === ''
                                ?
                                'Виберіть валюту'
                                :
                                'Введіть число'
                        }
                        onChange={handleChangeToAmount}
                        onClick={handleCurrentTo}
                    />
                    <CurrencySelect
                        selectedCurrency={selectedToCurrency}
                        setSelectedCurrency={setSelectedToCurrency}
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionConvert;