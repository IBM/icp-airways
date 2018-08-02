import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideAuthComponent } from './slide-auth.component';

describe('SlideAuthComponent', () => {
  let component: SlideAuthComponent;
  let fixture: ComponentFixture<SlideAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
