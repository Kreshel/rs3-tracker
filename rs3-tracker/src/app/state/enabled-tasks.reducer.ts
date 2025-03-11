import { createReducer, on } from '@ngrx/store';
import { EnabledTasksActions } from './tasks.actions';

export const initialState: string[] = [];

export const enabledTasksReducer = createReducer(
  initialState,
  on(EnabledTasksActions.removeTask, (state, { taskName }) =>
    state.filter((id) => id !== taskName)
  ),
  on(EnabledTasksActions.addTask, (state, { taskName }) => {
    if (state.indexOf(taskName) > -1) return state;

    return [...state, taskName];
  }),
  on(EnabledTasksActions.initializeTasks, (_state, { taskNames }) => taskNames)
);
