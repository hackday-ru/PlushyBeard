'use strict';

import { List, Map } from 'immutable';

import {
	COMPLETE,
	ADD_TASK
} from '../actions/actionsConst';

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
		case ADD_TASK:
			return state.update('tasks', tasks =>
				tasks.push(new Map({
					label: action.label,
					isComplete: false,
					createTime: Date.now()
				})));
		default:
			return state;
	}
}