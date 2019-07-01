import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallWhatsappApiComponent } from './call-whatsapp-api.component';

describe('CallWhatsappApiComponent', () => {
  let component: CallWhatsappApiComponent;
  let fixture: ComponentFixture<CallWhatsappApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallWhatsappApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallWhatsappApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
