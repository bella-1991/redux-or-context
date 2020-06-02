import React, { useContext } from 'react';
import { GlobalContext } from '../globalState';

export const Increase = () => {
    const { dispatch } = useContext(GlobalContext);
    console.log('increase');

    return (
        <button className="counter__button counter__button--increase"
                onClick={() => dispatch({
                    type: 'INCREASE_COUNTER'
                })}>
            Increase
        </button>
    );
}