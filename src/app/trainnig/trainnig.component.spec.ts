import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainnigComponent } from './trainnig.component';

describe('TrainnigComponent', () => {
  let component: TrainnigComponent;
  let fixture: ComponentFixture<TrainnigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainnigComponent]
    });
    fixture = TestBed.createComponent(TrainnigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
