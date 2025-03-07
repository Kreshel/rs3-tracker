import { Component } from '@angular/core';
import { Task, TaskComponent } from '../task/task.component';
import { formatDistanceToNowStrict, nextWednesday } from 'date-fns';
import { HelperService } from '../helper.service';
import { DatePipe } from '@angular/common';

export const sampleWeeklies: Task[] = [
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
  activeWeeklies: Task[] = sampleWeeklies.filter((task) => task.enabled);

  constructor(private helperFns: HelperService) {
    //this.resetDatetime = this.helperFns.nextWednesdayUTC();

    this.resetDatetime = nextWednesday(new Date());

    this.formattedTimeLeft = formatDistanceToNowStrict(this.resetDatetime, {
      addSuffix: true,
    });
  }
}
