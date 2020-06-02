import React from 'react';
import { Provider } from 'react-redux';
import { Main } from './components';
import { store } from './store/configureStore'
import './redux.css';

export const ReduxWay = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}