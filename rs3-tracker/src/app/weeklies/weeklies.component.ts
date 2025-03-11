import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { endOfDay, formatDistanceToNowStrict, nextWednesday } from 'date-fns';
import { DatePipe } from '@angular/common';
import { UTCDate } from '@date-fns/utc';
import { Task } from '../task/task.model';

export const sampleWeeklies: any[] = [
  { name: 'Herby Werby', image: 'herbyWerby.png', done: false, enabled: true },
  { name: 'The Circus', image: 'circus.png', done: true, enabled: true },
];

@Component({
  selector: 'app-weeklies',
  imports: [TaskComponent, DatePipe],
  templateUrl: './weeklies.component.html',
  styleUrl: './weeklies.component.scss',
})
export class WeekliesComponent {
  resetDatetime: Date;
  formattedTimeLeft: string;
  activeWeeklies: any[] = sampleWeeklies.filter((task) => task.enabled);

  constructor() {
    this.resetDatetime = endOfDay(nextWednesday(new UTCDate()));

    this.formattedTimeLeft = formatDistanceToNowStrict(this.resetDatetime, {
      addSuffix: true,
    });
  }
}
