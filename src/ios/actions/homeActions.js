'use strict';

export const COMPLETE = 'COMPLETE';

export const completeTask = id => ({type: COMPLETE, id});