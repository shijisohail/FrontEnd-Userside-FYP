// @ts-ignore
// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {LoginpageComponent} from './loginpage.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

// @Component({
//   selector: 'app-loginpage',
//   templateUrl: './loginpage.component.html',
//   styleUrls: ['./loginpage.component.scss']
// })
// export class LoginpageComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
