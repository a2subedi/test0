import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiredataComponent } from './firedata.component';

describe('FiredataComponent', () => {
  let component: FiredataComponent;
  let fixture: ComponentFixture<FiredataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiredataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
