import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { shoppingListComponent } from './shopping-list.component';

describe('shoppingListComponent', () => {
  let component: shoppingListComponent;
  let fixture: ComponentFixture<shoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ shoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(shoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
