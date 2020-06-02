import React, { useContext } from 'react';
import { GlobalContext } from '../globalState';

export const Decrease = () => {
    const { dispatch } = useContext(GlobalContext);
    console.log('decrease');

    return (
        <button className="counter__button counter__button--decrease"
                onClick={() => dispatch({
                    type: 'DECREASE_COUNTER'
                })}>
            Decrease
        </button>
    );
}