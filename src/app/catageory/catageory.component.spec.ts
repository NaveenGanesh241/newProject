import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatageoryComponent } from './catageory.component';

describe('CatageoryComponent', () => {
  let component: CatageoryComponent;
  let fixture: ComponentFixture<CatageoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatageoryComponent]
    });
    fixture = TestBed.createComponent(CatageoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
