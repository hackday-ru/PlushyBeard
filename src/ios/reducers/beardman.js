'use strict';

import { List, Map } from 'immutable';

import {
	CHECK_BY_INTERVAL,
	COMPLETE,
	ADD_TASK,
	MARK_NEW_TASK,
	MARK_NEW_COMPLETED_TASK
} from '../actions/actionsConst';

const MAX = 1000;
const MIN = 0;
export const CHECK_INTERVAL = 300000; //5min
// export const CHECK_INTERVAL = 1000; //for tests every 1 sec

const POINTS_TO_ADD_TASK = MAX / 100 * 3;
const POINTS_TO_COMPLETE_TASK = MAX / 100 * 5;
const POINTS_BY_INTERVAL = MAX / 100;

const initialState = new Map({
	angry: (MAX - MIN) / 2,
	numberOfWarnings: 0,
	hasNewCompletedTask: false,
	hasNewTask: false
});
git 
export function beardman(state = initialState, action = {}) {
	switch(action.type) {
		case CHECK_BY_INTERVAL:
			return state
				.update('angry', a => a - POINTS_BY_INTERVAL)
				.update(state => {
					const angry = state.get('angry');
					console.warn('interval! ', angry);
					const numberOfWarnings = state.get('numberOfWarnings');
					if(angry < 0 && numberOfWarnings === 0) {
						return state.set('angry', 0).set('numberOfWarnings', 1);
					} else if(angry < -100 && numberOfWarnings > 0) {
						return state.set('angry', 0).set('numberOfWarnings', numberOfWarnings + 1);
					} else {
						return state;
					}
				});
		case ADD_TASK:
			return state.update('angry', a => a + POINTS_TO_ADD_TASK);
		case COMPLETE:
			return state.update('angry', a => a + POINTS_TO_COMPLETE_TASK);
		case MARK_NEW_TASK:
			return state.update('hasNewTask', false);
		case MARK_NEW_COMPLETED_TASK:
			return state.update('hasNewCompletedTask', false);
		default:
			return state;
	}
}