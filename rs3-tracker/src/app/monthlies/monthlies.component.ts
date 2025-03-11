import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { endOfMonth, formatDistanceToNowStrict } from 'date-fns';
import { DatePipe } from '@angular/common';
import { UTCDate } from '@date-fns/utc';
import { Task } from '../task/task.model';

export const sampleMonthlies: any[] = [
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
  activeMonthlies: any[] = sampleMonthlies.filter((task) => task.enabled);

  constructor() {
    this.resetDatetime = endOfMonth(new UTCDate());

    this.formattedTimeLeft = formatDistanceToNowStrict(this.resetDatetime, {
      addSuffix: true,
    });
  }
}
