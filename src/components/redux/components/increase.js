import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { increase } from '../actions/actions';

export const Increase = () => {
    const dispatch = useDispatch();
    console.log('increase');

    return (
        <button className="counter__button counter__button--increase"
                onClick={() => dispatch(increase())}>
            Increase
        </button>
    );
}