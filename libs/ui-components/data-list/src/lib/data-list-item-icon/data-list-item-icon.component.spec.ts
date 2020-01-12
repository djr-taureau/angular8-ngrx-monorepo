import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListItemIconComponent } from './data-list-item-icon.component';

describe('DataListItemIconComponent', () => {
  let component: DataListItemIconComponent;
  let fixture: ComponentFixture<DataListItemIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataListItemIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListItemIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
