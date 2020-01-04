import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighmapsComponent } from './highmaps.component';

describe('HighmapsComponent', () => {
  let component: HighmapsComponent;
  let fixture: ComponentFixture<HighmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
