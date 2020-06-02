import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Count = () => {
    const counter = useSelector(state => state.counterReducer.counter );
    console.log('count');

    return (
        <div className="count">
            <span className="count__counter">{ counter }</span>
            <span className="count__text">Counter</span>
        </div>
    );
}