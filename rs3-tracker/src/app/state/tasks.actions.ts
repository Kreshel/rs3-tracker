import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Task } from '../task/task.model';

// Should side-effect local storage
export const EnabledTasksActions = createActionGroup({
  source: 'Enabled Tasks',
  events: {
    'Add Task': props<{ taskName: string }>(),
    'Remove Task': props<{ taskName: string }>(),
    'Initialize Tasks': props<{ taskNames: string[] }>(),
  },
});

// Should side-effect local storage
export const DoneTasksActions = createActionGroup({
  source: 'Done Tasks',
  events: {
    'Add Task': props<{ taskName: string }>(),
    'Remove Task': props<{ taskName: string }>(),
    'Initialize Tasks': props<{ taskNames: string[] }>(),
    'Reset Tasks': emptyProps(),
  },
});

// For now, this is static. In the future, this could be from personal API or RS3 API
export const TasksApiActions = createActionGroup({
  source: 'Tasks API',
  events: {
    'Retrieved Task List': props<{ tasks: Task[] }>(),
  },
});
