import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekliesComponent } from './weeklies.component';

describe('WeekliesComponent', () => {
  let component: WeekliesComponent;
  let fixture: ComponentFixture<WeekliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
