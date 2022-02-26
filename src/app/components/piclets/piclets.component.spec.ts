import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicletsComponent } from './piclets.component';

describe('PicletsComponent', () => {
  let component: PicletsComponent;
  let fixture: ComponentFixture<PicletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
