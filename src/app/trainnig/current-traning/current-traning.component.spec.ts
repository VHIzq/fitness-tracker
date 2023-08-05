import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTraningComponent } from './current-traning.component';

describe('CurrentTraningComponent', () => {
  let component: CurrentTraningComponent;
  let fixture: ComponentFixture<CurrentTraningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentTraningComponent]
    });
    fixture = TestBed.createComponent(CurrentTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
