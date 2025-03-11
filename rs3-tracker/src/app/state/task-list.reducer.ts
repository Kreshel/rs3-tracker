import { createReducer, on } from '@ngrx/store';
import { TasksApiActions } from './tasks.actions';
import { Task } from '../task/task.model';

export const initialState: Task[] = [];

export const taskListReducer = createReducer(
  initialState,
  on(TasksApiActions.retrievedTaskList, (_state, { tasks }) => tasks)
);
