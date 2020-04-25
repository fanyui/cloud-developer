import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthLoginComponent } from './auth-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalController, AngularDelegate, IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthLoginPage', () => {
  let component: AuthLoginComponent;
  let fixture: ComponentFixture<AuthLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule ,
        IonicModule       
      ],
      providers : [ ModalController, AngularDelegate],
      declarations: [ AuthLoginComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
