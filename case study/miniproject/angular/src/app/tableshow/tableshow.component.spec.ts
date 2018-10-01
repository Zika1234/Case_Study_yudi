import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableshowComponent } from './tableshow.component';

describe('TableshowComponent', () => {
  let component: TableshowComponent;
  let fixture: ComponentFixture<TableshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
