import React from 'react';
import {useSelector} from "react-redux";
import classes from './SectionNavbar.module.css'

const SectionNavbar = () => {
    const {exchangeRates} = useSelector(state => state.exchangeReducer)

    return (
        <div className={classes.sectionNavbar}>
            <div className={classes.sectionNavbar__content}>
                <div className={classes.sectionNavbar__title}>
                    <h1>Конвертер валют</h1>
                </div>
                <div className={classes.exchangeRateBox}>
                    <div className={classes.exchangeRate}>
                        {exchangeRates.usd
                            ?
                            <p><span>$</span> {exchangeRates.usd}</p>
                            :
                            '00.00'
                        }
                    </div>
                    <div className={classes.exchangeRate}>
                        {exchangeRates.eur
                            ?
                            <p><span>€</span> {exchangeRates.eur}</p>
                            :
                            '00.00'
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionNavbar;