import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsSimComponent } from './obs-sim.component';

describe('ObsSimComponent', () => {
  let component: ObsSimComponent;
  let fixture: ComponentFixture<ObsSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsSimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
