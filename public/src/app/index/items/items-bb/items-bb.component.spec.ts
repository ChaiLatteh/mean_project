import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBbComponent } from './items-bb.component';

describe('ItemsBbComponent', () => {
  let component: ItemsBbComponent;
  let fixture: ComponentFixture<ItemsBbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsBbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsBbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
