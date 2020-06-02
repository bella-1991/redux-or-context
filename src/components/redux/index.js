import React from 'react';
import { Provider } from 'react-redux';
import { Counter } from './components/counter';
import { store } from './store/configureStore'
import './redux.css';

export const ReduxWay = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}