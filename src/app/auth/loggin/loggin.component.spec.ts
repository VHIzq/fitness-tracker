import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginComponent } from './loggin.component';

describe('LogginComponent', () => {
  let component: LogginComponent;
  let fixture: ComponentFixture<LogginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogginComponent]
    });
    fixture = TestBed.createComponent(LogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
