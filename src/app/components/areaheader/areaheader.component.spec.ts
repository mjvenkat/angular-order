import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaheaderComponent } from './areaheader.component';

describe('AreaheaderComponent', () => {
  let component: AreaheaderComponent;
  let fixture: ComponentFixture<AreaheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
