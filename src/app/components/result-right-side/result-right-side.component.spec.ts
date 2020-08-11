import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultRightSideComponent } from './result-right-side.component';

describe('ResultRightSideComponent', () => {
  let component: ResultRightSideComponent;
  let fixture: ComponentFixture<ResultRightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultRightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
