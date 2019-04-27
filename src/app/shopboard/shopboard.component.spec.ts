import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopboardComponent } from './shopboard.component';

describe('ShopboardComponent', () => {
  let component: ShopboardComponent;
  let fixture: ComponentFixture<ShopboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
