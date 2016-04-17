'use strict';

import React, { Component } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from '../../ios/reducers';
import App from './App';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class AppContainer extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}

//make timeout for beardman
import { checkByInterval } from '../../ios/actions/beardmanActions';
import { CHECK_INTERVAL } from '../../ios/reducers/beardman';

(function AngryMeterLoop() {
	setTimeout(() => {
		store.dispatch(checkByInterval());
		AngryMeterLoop();
	}, CHECK_INTERVAL);
}());