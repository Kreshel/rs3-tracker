import { Component } from '@angular/core';
import { Task, TaskComponent } from '../task/task.component';
import { endOfDay, formatDistanceToNowStrict } from 'date-fns';
import { UTCDate } from '@date-fns/utc';
import { HelperService } from '../helper.service';

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
  resetDatetime: Date;
  formattedTimeLeft: string;
  activeDailies: Task[] = sampleDailies.filter((task) => task.enabled);

  constructor(private helperFns: HelperService) {
    this.resetDatetime = endOfDay(new UTCDate());

    this.formattedTimeLeft = formatDistanceToNowStrict(this.resetDatetime, {
      addSuffix: true,
    });
  }
}
