import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedUploadComponent } from './feed-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

describe('FeedUploadPage', () => {
  let component: FeedUploadComponent;
  let fixture: ComponentFixture<FeedUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ 
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        HttpClientModule
      ],
      declarations: [ FeedUploadComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
