import React, {useEffect} from 'react';
import {fetchExchangeRates} from "../../http/exchangeApi";
import {useActions} from "../../hooks/UseActions";
import SectionNavbar from "./section-navbar/SectionNavbar";

const Header = () => {
    const {setExchangeRates} = useActions()

    useEffect(() => {
        fetchExchangeRates('USD', 'UAH')
            .then(data => {
                const newRate = data.info.rate.toFixed(2)
                const currency = {key: 'usd', value: newRate}
                setExchangeRates(currency)
            })
            .catch(error => console.error(error.message || 'Щось пішло не так!'))

        fetchExchangeRates('EUR', 'UAH')
            .then(data => {
                const newRate = data.info.rate.toFixed(2)
                const currency = {key: 'eur', value: newRate}
                setExchangeRates(currency)
            })
            .catch(error => console.error(error.message || 'Щось пішло не так!'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <header>
            <SectionNavbar/>
        </header>
    );
};

export default Header;