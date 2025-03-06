import { Component } from '@angular/core';
import { Task, TaskComponent } from '../task/task.component';
import { formatDistanceStrict } from 'date-fns';
import { nextWednesday } from 'date-fns';

export const sampleWeeklies: Task[] = [
  { name: 'Herby Werby', image: 'herbyWerby.png', done: false, enabled: true },
  { name: 'The Circus', image: 'circus.png', done: true, enabled: true },
];

@Component({
  selector: 'app-weeklies',
  imports: [TaskComponent],
  templateUrl: './weeklies.component.html',
  styleUrl: './weeklies.component.scss',
})
export class WeekliesComponent {
  nowDatetime: Date;
  resetDatetime: Date;
  formattedTimeLeft: string;
  activeWeeklies: Task[] = sampleWeeklies;

  constructor() {
    this.nowDatetime = new Date();

    this.resetDatetime = nextWednesday(new Date());

    this.formattedTimeLeft = formatDistanceStrict(
      this.resetDatetime,
      this.nowDatetime,
      { addSuffix: true }
    );
  }
}
