import React from 'react';
import { Provider } from "react-redux";
import AppCalculaMedidaRedux from './components/AppCalculaMedidaRedux';
import store from "./store";

const CalculaMedidaAppRedux = () => {
    return (
        <Provider store={store}>
            <AppCalculaMedidaRedux />
        </Provider>
    );
}

export default CalculaMedidaAppRedux;