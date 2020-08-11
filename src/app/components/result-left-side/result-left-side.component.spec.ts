import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultLeftSideComponent } from './result-left-side.component';

describe('ResultLeftSideComponent', () => {
  let component: ResultLeftSideComponent;
  let fixture: ComponentFixture<ResultLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
