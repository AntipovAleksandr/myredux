import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import WrapperAppComponent from './components/App';
import {rootReducer} from "./store/reducers";

export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';


const store = createStore(rootReducer);



ReactDOM.render(
    <Provider store={store}>
    <WrapperAppComponent />
</Provider>, document.getElementById('root'));

