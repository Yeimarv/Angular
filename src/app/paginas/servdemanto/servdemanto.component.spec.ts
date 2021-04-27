import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServdemantoComponent } from './servdemanto.component';

describe('ServdemantoComponent', () => {
  let component: ServdemantoComponent;
  let fixture: ComponentFixture<ServdemantoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServdemantoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServdemantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
