import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsSimDetailComponent } from './obs-sim-detail.component';

describe('ObsSimDetailComponent', () => {
  let component: ObsSimDetailComponent;
  let fixture: ComponentFixture<ObsSimDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsSimDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsSimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
