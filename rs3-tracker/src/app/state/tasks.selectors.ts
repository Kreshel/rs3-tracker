import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from '../task/task.model';

export const selectTaskList = createFeatureSelector<Task[]>('taskList');

export const selectEnabledTasksState =
  createFeatureSelector<string[]>('enabledTasks');

export const selectDoneTasksState =
  createFeatureSelector<string[]>('doneTasks');

export const selectEnabledTasks = createSelector(
  selectTaskList,
  selectEnabledTasksState,
  (taskList, enabledTasks) => {
    return enabledTasks.map(
      (taskName) => taskList.find((task) => task.name === taskName)!
    );
  }
);

export const selectDoneTasks = createSelector(
  selectTaskList,
  selectDoneTasksState,
  (taskList, doneTasks) => {
    return doneTasks.map(
      (taskName) => taskList.find((task) => task.name === taskName)!
    );
  }
);
