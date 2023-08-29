import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTitleComponent } from './exp-title.component';

describe('ExpTitleComponent', () => {
  let component: ExpTitleComponent;
  let fixture: ComponentFixture<ExpTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
