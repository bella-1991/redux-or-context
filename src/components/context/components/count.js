import React, { useContext } from 'react';
import { GlobalContext } from '../globalState';

export const Count = () => {
    const { state } = useContext(GlobalContext); 
    console.log('count');

    return (
        <div className="count">
            <span className="count__counter">{ state.counter }</span>
            <span className="count__text">Counter</span>
        </div>
    );
}
