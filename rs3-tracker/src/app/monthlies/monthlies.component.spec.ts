import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthliesComponent } from './monthlies.component';

describe('MonthliesComponent', () => {
  let component: MonthliesComponent;
  let fixture: ComponentFixture<MonthliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
