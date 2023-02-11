import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitGigPostComponent } from './submit-gig-post.component';

describe('SubmitGigPostComponent', () => {
  let component: SubmitGigPostComponent;
  let fixture: ComponentFixture<SubmitGigPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitGigPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitGigPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
