'use strict';

import { MARK_NEW_TASK, MARK_NEW_COMPLETED_TASK } from './actionsConst';

export const markNewCompletedTask = () => ({type: MARK_NEW_COMPLETED_TASK});
export const markNewTask = () => ({type: MARK_NEW_TASK});