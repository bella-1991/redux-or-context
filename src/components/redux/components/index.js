import React from 'react';
import { Header } from './header';
import { Counter } from './counter';

export const Main = () => {    
    return (
        <div className="redux-way">
            <Header />
            <Counter />
        </div>
    );    
}