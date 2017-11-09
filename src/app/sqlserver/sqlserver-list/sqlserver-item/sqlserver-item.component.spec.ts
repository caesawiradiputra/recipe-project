import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlserverItemComponent } from './sqlserver-item.component';

describe('SqlserverItemComponent', () => {
  let component: SqlserverItemComponent;
  let fixture: ComponentFixture<SqlserverItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlserverItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlserverItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
