import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { decrease } from '../actions/actions';

export const Decrease = () => {
    const dispatch = useDispatch();
    console.log('decrease');

    return (
        <button className="counter__button counter__button--decrease"
                onClick={() => dispatch(decrease())}>
            Decrease
        </button>
    );
}