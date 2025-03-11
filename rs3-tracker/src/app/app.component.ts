import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DailiesComponent } from './dailies/dailies.component';
import { WeekliesComponent } from './weeklies/weeklies.component';
import { MonthliesComponent } from './monthlies/monthlies.component';
import { Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { Task } from './task/task.model';
import { AsyncPipe } from '@angular/common';
import { LocalStorageService } from './local-storage.service';
import {
  selectDoneTasks,
  selectDoneTasksState,
  selectEnabledTasks,
} from './state/tasks.selectors';
import {
  DoneTasksActions,
  EnabledTasksActions,
  TasksApiActions,
} from './state/tasks.actions';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DailiesComponent,
    WeekliesComponent,
    MonthliesComponent,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rs3-tracker';

  enabledTasks$: Observable<Task[]>;
  doneTasks$: Observable<string[]>;

  constructor(private store: Store, private localService: LocalStorageService) {
    this.enabledTasks$ = this.store.select(selectEnabledTasks);
    this.doneTasks$ = this.store.select(selectDoneTasksState);
  }

  ngOnInit() {
    const tasks = this.localService.getDailyTasks();

    this.store.dispatch(TasksApiActions.retrievedTaskList({ tasks }));

    // TODO: These needs to be from local storage
    const enabledTaskNames = tasks.map((task) => task.name);
    const doneTaskNames: string[] = [];
    this.store.dispatch(
      EnabledTasksActions.initializeTasks({ taskNames: enabledTaskNames })
    );
    this.store.dispatch(
      DoneTasksActions.initializeTasks({ taskNames: doneTaskNames })
    );
  }
}
