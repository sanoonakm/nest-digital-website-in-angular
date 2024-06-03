import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaurosalComponent } from './caurosal.component';

describe('CaurosalComponent', () => {
  let component: CaurosalComponent;
  let fixture: ComponentFixture<CaurosalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaurosalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaurosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
