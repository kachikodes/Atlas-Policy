import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsnconditionComponent } from './termsncondition.component';

describe('TermsnconditionComponent', () => {
  let component: TermsnconditionComponent;
  let fixture: ComponentFixture<TermsnconditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsnconditionComponent]
    });
    fixture = TestBed.createComponent(TermsnconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
