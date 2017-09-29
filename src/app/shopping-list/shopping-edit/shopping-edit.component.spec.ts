import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { shoppingEditComponent } from './shopping-edit.component';

describe('shoppingEditComponent', () => {
  let component: shoppingEditComponent;
  let fixture: ComponentFixture<shoppingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ shoppingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(shoppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
