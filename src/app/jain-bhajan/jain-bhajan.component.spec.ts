import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JainBhajanComponent } from './jain-bhajan.component';

describe('JainBhajanComponent', () => {
  let component: JainBhajanComponent;
  let fixture: ComponentFixture<JainBhajanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JainBhajanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JainBhajanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
