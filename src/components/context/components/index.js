import React from 'react';
import { Header } from './header';
import { Counter } from './counter';

export const Main = () => {    
    return (
        <div className="context-way">
            <Header />
            <Counter />
        </div>
    );    
}