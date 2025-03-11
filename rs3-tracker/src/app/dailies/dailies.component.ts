import { Component, input, OnDestroy, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { add, endOfDay, formatDistanceToNowStrict, isPast } from 'date-fns';
import { UTCDate } from '@date-fns/utc';
import { DatePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Task } from '../task/task.model';
import { DoneTasksActions, EnabledTasksActions } from '../state/tasks.actions';

// export const sampleDailies: Task[] = [
//   {
//     name: 'Guthixian Cache',
//     image: 'guthixianCache.png',
//     done: false,
//     enabled: true,
//   },
//   { name: 'Reaper Task', image: 'reaper.png', done: true, enabled: true },
// ];

@Component({
  selector: 'app-dailies',
  imports: [TaskComponent, DatePipe],
  templateUrl: './dailies.component.html',
  styleUrl: './dailies.component.scss',
})
export class DailiesComponent implements OnInit, OnDestroy {
  resetDatetime: Date;
  formattedTimeLeft?: string;
  timeLeftSubscription?: Subscription;

  readonly dailies = input.required<Task[]>();
  readonly doneDailies = input.required<string[]>();
  editable: boolean = false;

  constructor(private store: Store) {
    this.resetDatetime = endOfDay(new UTCDate());
  }

  ngOnInit() {
    console.log('dailies', this.dailies());
    console.log('done dailies', this.doneDailies());
    // debug:
    this.resetDatetime = new Date();
    this.resetDatetime = add(this.resetDatetime, { seconds: 10 });

    this.timeLeftSubscription = interval(1000).subscribe(() => {
      // TODO: maybe turn this into an effect
      if (isPast(this.resetDatetime)) {
        this.store.dispatch(DoneTasksActions.resetTasks());
        this.resetDatetime = endOfDay(new UTCDate());
      }

      this.formattedTimeLeft = formatDistanceToNowStrict(this.resetDatetime, {
        addSuffix: true,
      });
    });
  }

  ngOnDestroy() {
    this.timeLeftSubscription?.unsubscribe();
  }

  onCheckDone(taskName: string) {
    this.store.dispatch(DoneTasksActions.addTask({ taskName }));
  }

  onCheckNotDone(taskName: string) {
    this.store.dispatch(DoneTasksActions.removeTask({ taskName }));
  }

  onEnable(taskName: string) {
    this.store.dispatch(EnabledTasksActions.addTask({ taskName }));
  }

  onDisable(taskName: string) {
    this.store.dispatch(EnabledTasksActions.removeTask({ taskName }));
  }
}
