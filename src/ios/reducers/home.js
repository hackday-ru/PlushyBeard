'use strict';

import {
	INCREMENT
} from '../actions/homeActions';

const initialState = {
	counter: 0
};

export function counter(state = initialState, action = {}) {
	switch(action.type) {
		case INCREMENT:
			return Object.assign({}, state, {
				counter: state.counter + 1
			});
		default:
			return state;
	}
}