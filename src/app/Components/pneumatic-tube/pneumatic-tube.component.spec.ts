import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PneumaticTubeComponent } from './pneumatic-tube.component';

describe('PneumaticTubeComponent', () => {
  let component: PneumaticTubeComponent;
  let fixture: ComponentFixture<PneumaticTubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PneumaticTubeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PneumaticTubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
