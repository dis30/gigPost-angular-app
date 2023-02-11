import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigPostComponent } from './gig-post.component';

describe('GigPostComponent', () => {
  let component: GigPostComponent;
  let fixture: ComponentFixture<GigPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
