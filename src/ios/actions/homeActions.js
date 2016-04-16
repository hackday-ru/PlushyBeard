'use strict';

import { COMPLETE, ADD_TASK } from './actionsConst';

export const completeTask = id => ({type: COMPLETE, id});
export const addTask = label => ({type: ADD_TASK, label});