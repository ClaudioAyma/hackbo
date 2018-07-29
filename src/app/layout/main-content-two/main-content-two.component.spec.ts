import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentTwoComponent } from './main-content-two.component';

describe('MainContentTwoComponent', () => {
  let component: MainContentTwoComponent;
  let fixture: ComponentFixture<MainContentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
