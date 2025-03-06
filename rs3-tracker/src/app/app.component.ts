import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DailiesComponent } from './dailies/dailies.component';
import { WeekliesComponent } from './weeklies/weeklies.component';
import { MonthliesComponent } from './monthlies/monthlies.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DailiesComponent,
    WeekliesComponent,
    MonthliesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rs3-tracker';
}
