'use strict';

import { MARK_NEW_TASK, MARK_NEW_COMPLETED_TASK, CHECK_BY_INTERVAL } from './actionsConst';

export const markNewCompletedTask = () => ({type: MARK_NEW_COMPLETED_TASK});
export const markNewTask = () => ({type: MARK_NEW_TASK});
export const checkByInterval = () => ({type: CHECK_BY_INTERVAL});