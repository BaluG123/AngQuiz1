import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentaffairsComponent } from './currentaffairs.component';

describe('CurrentaffairsComponent', () => {
  let component: CurrentaffairsComponent;
  let fixture: ComponentFixture<CurrentaffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentaffairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentaffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
