import { ComponentFixture, TestBed } from '@angular/core/testing';

import { movieDetailsComponent } from './movies-list.component';

describe('movieDetailsComponent', () => {
  let component: movieDetailsComponent;
  let fixture: ComponentFixture<movieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [movieDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(movieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
