import { Component } from '@angular/core';
import { Task, TaskComponent } from '../task/task.component';
import { endOfMonth, formatDistanceStrict } from 'date-fns';

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
  imports: [TaskComponent],
  templateUrl: './monthlies.component.html',
  styleUrl: './monthlies.component.scss',
})
export class MonthliesComponent {
  nowDatetime: Date;
  resetDatetime: Date;
  formattedTimeLeft: string;
  activeMonthlies: Task[] = sampleWeeklies; //pipe out non-active

  constructor() {
    this.nowDatetime = new Date();

    this.resetDatetime = endOfMonth(new Date());

    this.formattedTimeLeft = formatDistanceStrict(
      this.resetDatetime,
      this.nowDatetime,
      { addSuffix: true }
    );
  }
}
