import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnClickerComponent } from './btn-clicker.component';

describe('BtnClickerComponent', () => {
  let component: BtnClickerComponent;
  let fixture: ComponentFixture<BtnClickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnClickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
