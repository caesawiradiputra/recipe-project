import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlserverListComponent } from './sqlserver-list.component';

describe('SqlserverListComponent', () => {
  let component: SqlserverListComponent;
  let fixture: ComponentFixture<SqlserverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlserverListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlserverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
