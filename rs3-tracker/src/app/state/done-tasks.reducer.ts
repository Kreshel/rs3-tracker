import { createReducer, on } from '@ngrx/store';
import { DoneTasksActions } from './tasks.actions';

export const initialState: string[] = [];

export const doneTasksReducer = createReducer(
  initialState,
  on(DoneTasksActions.removeTask, (state, { taskName }) =>
    state.filter((id) => id !== taskName)
  ),
  on(DoneTasksActions.addTask, (state, { taskName }) => {
    if (state.indexOf(taskName) > -1) return state;

    return [...state, taskName];
  }),
  on(DoneTasksActions.initializeTasks, (_state, { taskNames }) => taskNames),
  on(DoneTasksActions.resetTasks, (_state) => [])
);
