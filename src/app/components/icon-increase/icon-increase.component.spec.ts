import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconIncreaseComponent } from './icon-increase.component';

describe('IconIncreaseComponent', () => {
  let component: IconIncreaseComponent;
  let fixture: ComponentFixture<IconIncreaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconIncreaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
