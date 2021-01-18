import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMimicBehaviorComponent } from './load-mimic-behavior.component';

describe('LoadMimicBehaviorComponent', () => {
  let component: LoadMimicBehaviorComponent;
  let fixture: ComponentFixture<LoadMimicBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadMimicBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMimicBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
