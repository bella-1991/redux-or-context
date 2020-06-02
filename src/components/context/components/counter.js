import React from 'react';
import { Count } from './count';
import { Increase } from './increase';
import { Decrease } from './decrease';

export const Counter = () => {
    return (
        <div className="counter">
            <h3>Counter</h3>
            <div className="counter__container">
                <Count />
                <div className="counter__buttons">
                    <Increase />
                    <Decrease />
                </div>
            </div>
        </div>
    );
}