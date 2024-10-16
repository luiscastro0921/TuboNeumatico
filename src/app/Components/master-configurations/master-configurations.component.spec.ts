import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterConfigurationsComponent } from './master-configurations.component';

describe('MasterConfigurationsComponent', () => {
  let component: MasterConfigurationsComponent;
  let fixture: ComponentFixture<MasterConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterConfigurationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
