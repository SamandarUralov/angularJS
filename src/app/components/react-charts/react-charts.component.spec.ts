import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactChartsComponent } from './react-charts.component';

describe('ReactChartsComponent', () => {
  let component: ReactChartsComponent;
  let fixture: ComponentFixture<ReactChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
