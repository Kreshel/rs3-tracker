import { Component } from '@angular/core';
import { Task, TaskComponent } from '../task/task.component';
import { formatDistanceStrict } from 'date-fns';

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
  imports: [TaskComponent],
  templateUrl: './dailies.component.html',
  styleUrl: './dailies.component.scss',
})
export class DailiesComponent {
  nowDatetime: Date;
  resetDatetime: Date;
  formattedTimeLeft: string;
  activeDailies: Task[] = sampleDailies;

  constructor() {
    this.nowDatetime = new Date();

    this.resetDatetime = new Date(
      Date.UTC(
        this.nowDatetime.getUTCFullYear(),
        this.nowDatetime.getUTCMonth(),
        this.nowDatetime.getUTCDate() + 1, // Move to next day
        0,
        0,
        0,
        0 // Set to 00:00:00 UTC
      )
    );

    this.formattedTimeLeft = formatDistanceStrict(
      this.resetDatetime,
      this.nowDatetime,
      { addSuffix: true }
    );
  }
}
