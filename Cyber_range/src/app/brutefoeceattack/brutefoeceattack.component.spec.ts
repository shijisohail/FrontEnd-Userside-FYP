import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrutefoeceattackComponent } from './brutefoeceattack.component';

describe('BrutefoeceattackComponent', () => {
  let component: BrutefoeceattackComponent;
  let fixture: ComponentFixture<BrutefoeceattackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrutefoeceattackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrutefoeceattackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
