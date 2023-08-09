import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogformComponent } from './dialogform.component';

describe('DialogformComponent', () => {
  let component: DialogformComponent;
  let fixture: ComponentFixture<DialogformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogformComponent]
    });
    fixture = TestBed.createComponent(DialogformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
