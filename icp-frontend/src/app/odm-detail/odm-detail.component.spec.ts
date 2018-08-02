import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdmDetailComponent } from './odm-detail.component';

describe('OdmDetailComponent', () => {
  let component: OdmDetailComponent;
  let fixture: ComponentFixture<OdmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
