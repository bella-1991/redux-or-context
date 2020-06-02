import React, { useContext } from 'react';
import { GlobalProvider } from './globalState';
import { Main } from './components/index';
import './context.css';

export const ContextWay = () => {
    return (
        <GlobalProvider>
            <Main />
        </GlobalProvider>
    );
}