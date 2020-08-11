import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcondecreaseComponent } from './icondecrease.component';

describe('IcondecreaseComponent', () => {
  let component: IcondecreaseComponent;
  let fixture: ComponentFixture<IcondecreaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcondecreaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcondecreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
