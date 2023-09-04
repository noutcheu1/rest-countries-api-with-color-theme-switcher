import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFlagComponent } from './card-flag.component';

describe('CardFlagComponent', () => {
  let component: CardFlagComponent;
  let fixture: ComponentFixture<CardFlagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFlagComponent]
    });
    fixture = TestBed.createComponent(CardFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
