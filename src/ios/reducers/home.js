'use strict';

import { List, Map } from 'immutable';

import {
	INCREMENT
} from '../actions/homeActions';

const initialState = new Map({
	tasks: new List([
		new Map({
			label: 'first',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		}),
		new Map({
			label: 'second',
			isComplete: true
		})
	])
});

export function home(state = initialState, action = {}) {
	switch(action.type) {
		case INCREMENT:
			return Object.assign({}, state, {
				counter: state.counter + 1
			});
		default:
			return state;
	}
}