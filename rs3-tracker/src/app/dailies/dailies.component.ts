import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task, TaskComponent } from '../task/task.component';
import { add, endOfDay, formatDistanceToNowStrict } from 'date-fns';
import { UTCDate } from '@date-fns/utc';
import { DatePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';

export const sampleDailies: Task[] = [
  {
    name: 'Guthixian Cache',
    image: 'guthixianCache.png',
    done: false,
    enabled: true,
  },
  { name: 'Reaper Task', image: 'reaper.png', done: true, enabled: true },
];

@Component({
  selector: 'app-dailies',
  imports: [TaskComponent, DatePipe],
  templateUrl: './dailies.component.html',
  styleUrl: './dailies.component.scss',
})
export class DailiesComponent implements OnInit, OnDestroy {
  resetDatetime: Date = endOfDay(new UTCDate());
  formattedTimeLeft?: string;
  activeDailies: Task[] = sampleDailies.filter((task) => task.enabled);
  wowzaSubscription?: Subscription;

  constructor() {}

  ngOnInit() {
    this.wowzaSubscription = interval(1000).subscribe(() => {
      this.formattedTimeLeft = formatDistanceToNowStrict(this.resetDatetime, {
        addSuffix: true,
      });
    });
  }

  // on reset this has to change

  ngOnDestroy() {
    this.wowzaSubscription?.unsubscribe();
  }
}
