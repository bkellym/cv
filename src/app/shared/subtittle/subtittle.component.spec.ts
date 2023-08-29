import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtittleComponent } from './subtittle.component';

describe('SubtittleComponent', () => {
  let component: SubtittleComponent;
  let fixture: ComponentFixture<SubtittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtittleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
