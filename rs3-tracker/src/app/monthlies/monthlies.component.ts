import { Component } from '@angular/core';
import { Task, TaskComponent } from '../task/task.component';
import { endOfMonth, formatDistanceToNowStrict } from 'date-fns';
import { HelperService } from '../helper.service';
import { DatePipe } from '@angular/common';

export const sampleWeeklies: Task[] = [
  {
    name: 'Troll Invasion',
    image: 'trollInvasion.png',
    done: false,
    enabled: true,
  },
  { name: 'Giant Oyster', image: 'giantOyster.png', done: true, enabled: true },
];

@Component({
  selector: 'app-monthlies',
  imports: [TaskComponent, DatePipe],
  templateUrl: './monthlies.component.html',
  styleUrl: './monthlies.component.scss',
})
export class MonthliesComponent {
  resetDatetime: Date;
  formattedTimeLeft: string;
  activeMonthlies: Task[] = sampleWeeklies.filter((task) => task.enabled);

  constructor(private helperFns: HelperService) {
    //this.resetDatetime = this.helperFns.endOfMonthUTC();

    this.resetDatetime = endOfMonth(new Date());

    this.formattedTimeLeft = formatDistanceToNowStrict(this.resetDatetime, {
      addSuffix: true,
    });
  }
}
