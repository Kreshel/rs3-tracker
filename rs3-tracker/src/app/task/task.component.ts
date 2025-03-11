import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task',
  imports: [MatCardModule, MatCheckboxModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  name = input<string>();
  done = input<boolean>();
  image = input<string>();
  editable = input<boolean>();
}
