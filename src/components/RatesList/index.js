import React from "react";
import './style.css';

export default function RatesList({rates}){
    return (
        <>
        {rates.map(({cost, currency}) => (
                <div className='rates-wrapper' key={cost}>
                    <div className='rate-currency'>{currency}</div>
                    <div className='cost-currency'>{cost}</div>
                </div>
            ))}
        </>
    );

}