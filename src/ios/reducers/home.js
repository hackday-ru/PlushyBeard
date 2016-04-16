'use strict';

import { List, Map } from 'immutable';

import {
	COMPLETE
} from '../actions/homeActions';

const initialState = new Map({
	tasks: new List([
		new Map({
			label: 'first',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		}),
		new Map({
			label: 'second',
			isComplete: false
		})
	])
});

export function home(state = initialState, action = {}) {
	switch(action.type) {
		case COMPLETE:
			return state.updateIn(['tasks', action.id], t => t.set('isComplete', true));
		default:
			return state;
	}
}