import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyCardComponent } from './tiny-card.component';

describe('TinyCardComponent', () => {
  let component: TinyCardComponent;
  let fixture: ComponentFixture<TinyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
